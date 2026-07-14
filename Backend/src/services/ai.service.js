import dotenv from "dotenv";
dotenv.config();

import Groq from "groq-sdk";
import { z } from "zod";

const ai = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const interviewReportSchema = z.object({
  matchScore: z.number().min(0).max(100),

  title: z.string(),

  technicalQuestions: z.array(
    z.object({
      question: z.string(),
      intention: z.string(),
      answer: z.string(),
    }),
  ),

  behavioralQuestions: z.array(
    z.object({
      question: z.string(),
      intention: z.string(),
      answer: z.string(),
    }),
  ),

  skillGaps: z.array(
    z.object({
      skill: z.string(),
      severity: z.enum(["low", "medium", "high"]),
    }),
  ),

  preparationPlan: z.array(
    z.object({
      day: z.number(),
      focus: z.string(),
      tasks: z.array(z.string()),
    }),
  ),
});

async function generateInterviewReport({
  resume,
  selfDescription,
  jobDescription,
}) {
  const prompt = `
You are an expert technical interviewer and hiring manager.

Analyze the candidate profile.

Resume:
${resume}

Self Description:
${selfDescription}

Job Description:
${jobDescription}

Generate:

1. Match score (0-100)

2. Job title

3. 3-5 Technical Interview Questions

Each question should contain:
- question
- intention
- answer

4. 3-5 Behavioral Questions

Each should contain:
- question
- intention
- answer

5. 3-5 Skill Gaps

Each should contain:
- skill
- severity

6. 7 Day Preparation Plan

Each day should contain:
- day
- focus
- tasks

Return ONLY valid JSON.

Do not return markdown.
Do not return explanations.
`;

  const response = await ai.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    temperature: 0.2,
    response_format: {
      type: "json_object",
    },
    messages: [
      {
        role: "system",
        content: `
You are an expert technical interviewer and hiring manager.

You MUST return ONLY valid JSON.

Return ONLY valid JSON using EXACTLY these property names.

{
  "matchScore": number,
  "title": string,
  "technicalQuestions": [
    {
      "question": "",
      "intention": "",
      "answer": ""
    }
  ],
  "behavioralQuestions": [
    {
      "question": "",
      "intention": "",
      "answer": ""
    }
  ],
  "skillGaps": [
    {
      "skill": "",
      "severity": "low"
    }
  ],
  "preparationPlan": [
    {
      "day": 1,
      "focus": "",
      "tasks": [""]
    }
  ]
}

Rules:
- Use EXACTLY these property names.
- Do NOT rename any property.
- Do NOT omit any property.
- matchScore must be a number between 0 and 100.
- title must be a string.
- technicalQuestions must contain 3-5 objects.
- behavioralQuestions must contain 3-5 objects.
- skillGaps must contain 3-5 objects.
- preparationPlan must contain exactly 7 objects.
- Each technicalQuestions object MUST contain:
  question, intention, answer.
- Each behavioralQuestions object MUST contain:
  question, intention, answer.
- Each skillGaps object MUST contain:
  skill, severity.
- severity must be ONLY one of:
  "low", "medium", "high".
- Each preparationPlan object MUST contain:
  day, focus, tasks.
- tasks must always be an array of strings.

DO NOT use these property names:
- match_score
- job_title
- technical_questions
- behavioral_questions
- skill_gaps
- preparation_plan

Calculate the match score using this rubric:

- Required technical skills: 40 points
- Relevant project experience: 25 points
- Education: 10 points
- Years of relevant experience: 10 points
- Soft skills and communication: 10 points
- Resume quality and completeness: 5 points

Deduct points for every important missing requirement.

The final matchScore should reflect the actual fit.
Do not default to values between 80 and 90.
Scores below 50 are acceptable for weak candidates.
Scores above 90 should only be given to exceptional matches.

Do NOT wrap the JSON inside markdown.
Do NOT include explanations.
Do NOT include any text before or after the JSON.
`,
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });


  const raw = response.choices?.[0]?.message?.content;

  if (!raw) {
    throw new Error("AI returned an empty response.");
  }

  let parsed = JSON.parse(raw);

  try {
    parsed = {
      matchScore: parsed.matchScore ?? parsed.match_score,
      title: parsed.title ?? parsed.job_title,
      technicalQuestions:
        parsed.technicalQuestions ?? parsed.technical_questions,
      behavioralQuestions:
        parsed.behavioralQuestions ?? parsed.behavioral_questions,
      skillGaps: parsed.skillGaps ?? parsed.skill_gaps,
      preparationPlan: parsed.preparationPlan ?? parsed.preparation_plan,
    };
  } catch (err) {
    console.error(raw);
    throw new Error("Invalid JSON returned by AI.");
  }

  const validated = interviewReportSchema.safeParse(parsed);

  if (!validated.success) {
    console.error(validated.error.format());
    throw new Error("AI response does not match the expected schema.");
  }

  return validated.data;
}

export default generateInterviewReport;
