import dotenv from "dotenv";
dotenv.config();

import { GoogleGenAI } from "@google/genai";
import { z } from "zod"
import {zodToJsonSchema} from "zod-to-json-schema";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});


const interviewReportSchema = z.object({
    matchScore: z.number().describe("A score between 0 and 100 indicating how well the candidate's profile matches the job describe"),
    technicalQuestions: z.array(z.object({
        question: z.string().describe("The technical question can be asked in the interview"),
    })).describe("Technical questions that can be asked in the interview along with their intention and how to answer them"),
    behavioralQuestions: z.array(z.object({
        question: z.string().describe("The technical question can be asked in the interview"),
    })).describe("Behavioral questions that can be asked in the interview along with their intention and how to answer them"),
    skillGaps: z.array(z.object({
        skill: z.string().describe("The skill which the candidate is lacking"),
        severity: z.enum([ "low", "medium", "high" ]).describe("The severity of this skill gap, i.e. how important is this skill for the job and how much it can impact the candidate's chances")
    })).describe("List of skill gaps in the candidate's profile along with their severity"),
    preparationPlan: z.array(z.object({
        day: z.number().describe("The day number in the preparation plan, starting from 1"),
        focus: z.string().describe("The main focus of this day in the preparation plan, e.g. data structures, system design, mock interviews etc."),
        tasks: z.array(z.string()).describe("List of tasks to be done on this day to follow the preparation plan, e.g. read a specific book or article, solve a set of problems, watch a video etc.")
    })).describe("A day-wise preparation plan for the candidate to follow in order to prepare for the interview effectively"),
    title: z.string().describe("The title of the job for which the interview report is generated"),
})

async function generateInterviewReport({ resume, selfDescription, jobDescription }) {


const prompt = `
You are an expert technical interviewer.

Analyze the candidate profile and generate an interview preparation report.

Resume:
${resume}

Self Description:
${selfDescription}

Job Description:
${jobDescription}

Return ONLY valid JSON in this structure:

{
 "matchScore": number,
 "title": "job title",
 "technicalQuestions": [
   {
     "question": "string",
     "intention": "string",
     "answer": "string"
   }
 ],
 "behavioralQuestions": [
   {
     "question": "string",
     "intention": "string",
     "answer": "string"
   }
 ],
 "skillGaps": [
   {
     "skill": "string",
     "severity": "low | medium | high"
   }
 ],
 "preparationPlan": [
   {
     "day": number,
     "focus": "string",
     "tasks": ["string"]
   }
 ]
}

Rules:
- matchScore must be between 0 and 100
- Generate 4-6 technical questions
- Generate 3-5 behavioral questions
- Generate 3-5 skill gaps
- Create a 7 day preparation plan
- title must be extracted from job description
- Return ONLY JSON
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents: prompt + "\nIMPORTANT: Follow JSON schema exactly.",
      config: {
        responseMimeType: "application/json",
        responseJsonSchema: zodToJsonSchema(interviewReportSchema),
      },
    });
  
    const raw = response.text?.trim();
    
  console.log("RAW AI RESPONSE:\n", raw);
  
  if (!raw) {
    throw new Error("AI returned empty response");
  }

  function normalizeAIResponse(data) {
    if (Array.isArray(data.technicalQuestions)) {
      data.technicalQuestions = data.technicalQuestions.map((q) => ({
        question: q,
      }));
    }

    if (Array.isArray(data.behavioralQuestions)) {
      data.behavioralQuestions = data.behavioralQuestions.map((q) => ({
        question: q,
      }));
    }

    if (Array.isArray(data.skillGaps)) {
      data.skillGaps = data.skillGaps.map((skill) => ({
        skill,
        severity: "medium",
      }));
    }

    if (Array.isArray(data.preparationPlan)) {
      data.preparationPlan = data.preparationPlan.map((plan, index) => ({
        day: index + 1,
        focus: plan.split(":")[0] || "Preparation",
        tasks: [plan],
      }));
    }

    return data;
  }

  let parsed = JSON.parse(raw);
  parsed = normalizeAIResponse(parsed);

  const validated = interviewReportSchema.safeParse(parsed);

  if (!validated.success) {
    console.error(validated.error);
    throw new Error("AI response does not match schema");
  }

  return validated.data;

}


export default generateInterviewReport