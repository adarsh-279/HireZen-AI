import { GoogleGenAI } from "@google/genai";
import { z } from "zod"
import {zodToJsonSchema} from "zod-to-json-schema";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});


async function invokeGeminiAI() {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-lite",
        contents: "Explain how AI works in 5 words only",
    });
    console.log(response.text);
}

const interviewReportSchema = z.object({
    matchScore: z.number().min(0).max(100).describe("Overall percentage match between the candidate profile and the job description (0-100)"),

    technicalQuestion: z.array(
        z.object({
        question: z.string().describe("A technical interview question relevant to the job role"),
        intention: z.string().describe("What skill or concept the interviewer is trying to evaluate with this question"),
        answer: z.string().describe("A strong sample keypoints on how to answer the question")
        })
    ).describe("List of technical interview questions tailored to the job role"),

    behavioralQuestion: z.array(
        z.object({
        question: z.string().describe("List of technical interview questions tailored to the job role"),
        intention: z.string().describe("The soft skill or behavioral trait being assessed"),
        answer: z.string().describe("An answer in keywords as structured reasoning such as the STAR method")
        })
    ).describe("Behavioral interview questions to evaluate communication and teamwork skills"),

    skillGap: z.array(
        z.object({
        skill: z.string().describe("A skill that the candidate lacks or needs improvement in"),
        severity: z.enum(["low", "medium", "high"]).describe("How critical this skill gap is for the job role")
        })
    ).describe("List of missing or weak skills compared to job requirements"),

    preparationPlan: z.array(
        z.object({
        day: z.number().describe("List of missing or weak skills compared to job requirements"),
        focus: z.string().describe("Main topic or skill to focus on for that day"),
        tasks: z.array(z.string()).describe("Specific learning tasks or exercises for that day")
        })
    ).describe("Specific learning tasks or exercises for that day")
});

async function generateInterviewReport({ resume, selfDescription, jobDescription }) {

    const prompt = `You are an expert technical interviewer, career coach, and hiring manager.

Your task is to analyze a candidate's profile and generate a detailed interview preparation report.

Carefully analyze the following information:

RESUME:
${resume}

CANDIDATE SELF DESCRIPTION:
${selfDescription}

JOB DESCRIPTION:
${jobDescription}

Based on this information, generate a structured interview preparation report.

Follow these guidelines:

1. MATCH SCORE
Evaluate how well the candidate matches the job description.
Return a matchScore between 0 and 100 based on:
- skills alignment
- relevant experience
- technologies mentioned
- responsibilities match

2. TECHNICAL QUESTIONS
Generate 4-6 realistic technical interview questions relevant to the job role.

For each question provide:
- question: the technical interview question
- intention: what concept or skill the interviewer wants to evaluate
- answer: key bullet-style points that a strong candidate should mention

Focus on:
- core technologies in the job description
- real-world engineering scenarios
- problem solving ability
- system design or implementation knowledge if relevant

3. BEHAVIORAL QUESTIONS
Generate 3-5 behavioral interview questions.

For each question provide:
- question: realistic behavioral interview question
- intention: what personality trait or skill is being evaluated
- answer: short structured answer guidance using STAR method (Situation, Task, Action, Result)

Focus on:
- teamwork
- leadership
- conflict resolution
- ownership
- problem solving
- learning mindset

4. SKILL GAP ANALYSIS
Identify the most important missing or weak skills compared to the job requirements.

For each skill provide:
- skill: missing or weak skill
- severity:
    low = helpful but not critical
    medium = important but learnable quickly
    high = critical requirement for the role

Focus on practical skills that would impact hiring decisions.

5. PREPARATION PLAN
Create a short preparation roadmap for the candidate.

Generate a 7-day preparation plan.

For each day include:
- day: day number
- focus: main topic for that day
- tasks: 3-5 actionable tasks such as:
    - studying a concept
    - solving problems
    - building a small feature
    - reviewing interview questions

The preparation plan should prioritize:
- the most critical skill gaps
- core technologies in the job description
- common interview topics for the role

Important rules:
- Base your analysis strictly on the provided resume, self description, and job description.
- Be practical and realistic as a hiring manager would be.
- Do not include explanations outside the JSON structure.
- Ensure all outputs follow the provided JSON schema.

Return the result strictly in this JSON structure:

{
 "matchScore": number,
 "technicalQuestion": [
   {
     "question": "string",
     "intention": "string",
     "answer": "string"
   }
 ],
 "behavioralQuestion": [
   {
     "question": "string",
     "intention": "string",
     "answer": "string"
   }
 ],
 "skillGap": [
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
 
Return each section strictly as objects matching the JSON schema.
Do NOT flatten arrays into strings.`;
    
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-lite",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: zodToJsonSchema(interviewReportSchema)
        }
    })

    return JSON.parse(response.text)
}


export default generateInterviewReport