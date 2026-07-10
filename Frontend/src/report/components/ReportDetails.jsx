import { useParams } from "react-router";
import Navbar from "../../ui/components/Navbar";
import Footer from "../../ui/components/Footer";

import ReportHeader from "../components/ReportHeader";
import CandidateSummary from "../components/CandidateSummary";
import TechnicalQuestions from "../components/TechnicalQuestions";
import BehavioralQuestions from "../components/BehavioralQuestions";
import SkillGapCard from "../components/SkillGapCard";
import PreparationTimeline from "../components/PreparationTimeline";
import JobDescription from "../components/JobDescription";

const ReportDetails = () => {
  const { id } = useParams();

  // Replace this with API call
  const report = {
    title: "Full Stack Developer Intern",
    company: "AI Startup Impact",
    matchScore: 85,

    createdAt: "2026-07-09",

    selfDescription:
      "I'm a 2nd-year B.Tech student passionate about full-stack development, problem-solving, and creating user-focused digital experiences.",

    resume: "Adarsh Shaw\nB.Tech IT\nReact, Node.js, Express.js, MongoDB...",

    technicalQuestions: [
      {
        question: "Explain Event Loop in JavaScript.",
        intention: "Check async programming knowledge.",
        answer:
          "JavaScript uses a single-threaded event loop to execute asynchronous callbacks.",
      },
      {
        question: "Difference between Authentication and Authorization?",
        intention: "Backend fundamentals",
        answer:
          "Authentication verifies identity while Authorization checks permissions.",
      },
    ],

    behavioralQuestions: [
      {
        question: "Tell me about yourself.",
        intention: "Communication",
        answer: "Focus on education, projects, achievements and career goals.",
      },
      {
        question: "Describe a challenge you faced.",
        intention: "Problem solving",
        answer: "Explain Situation → Task → Action → Result.",
      },
    ],

    skillGaps: [
      {
        skill: "AWS",
        severity: "high",
      },
      {
        skill: "Docker",
        severity: "medium",
      },
      {
        skill: "System Design",
        severity: "medium",
      },
    ],

    preparationPlan: [
      {
        day: 1,
        focus: "JavaScript",
        tasks: ["Revise ES6", "Practice Array Questions"],
      },
      {
        day: 2,
        focus: "React",
        tasks: ["Hooks", "Context API"],
      },
      {
        day: 3,
        focus: "Node.js",
        tasks: ["Express Routing", "Middleware"],
      },
      {
        day: 4,
        focus: "MongoDB",
        tasks: ["Aggregation", "Indexing"],
      },
      {
        day: 5,
        focus: "JWT & Authentication",
        tasks: ["JWT Flow", "Refresh Tokens"],
      },
      {
        day: 6,
        focus: "DSA",
        tasks: ["Arrays", "Strings", "HashMaps"],
      },
      {
        day: 7,
        focus: "Mock Interview",
        tasks: ["Behavioral Questions", "Technical Revision"],
      },
    ],

    jobDescription:
      "AI Startup Impact is hiring a Full Stack Developer Intern...",
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-12 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <ReportHeader report={report} />

          <CandidateSummary report={report} />

          <TechnicalQuestions questions={report.technicalQuestions} />

          <BehavioralQuestions questions={report.behavioralQuestions} />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {report.skillGaps.map((skill, index) => (
              <SkillGapCard key={index} skill={skill} />
            ))}
          </div>

          <PreparationTimeline plan={report.preparationPlan} />

          <JobDescription description={report.jobDescription} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ReportDetails;
