import { BrainCircuit, FileSearch, Route } from "lucide-react";
import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <p className="uppercase tracking-[6px] text-indigo-300 font-semibold text-xs">
            THE HIREZEN SUITE
          </p>

          <h2 className="mt-6 text-5xl lg:text-6xl font-black">
            Advanced Tools for Professionals
          </h2>

          <div className="w-28 h-1 rounded-full bg-linear-to-r from-indigo-400 to-green-400 mx-auto mt-8" />

          <p className="mt-8 text-zinc-400 text-lg leading-9 max-w-3xl mx-auto">
            Our AI-powered ecosystem combines resume intelligence, interview
            simulations, and detailed performance analytics to help you become
            job-ready faster.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          <FeatureCard
            icon={<FileSearch size={28} />}
            title="AI Resume Analysis"
            description="Upload your resume and target job description to receive an ATS match score, personalized feedback, keyword optimization and improvement suggestions."
            buttonText="Analyze Resume"
            accent="green"
          />

          <FeatureCard
            icon={<BrainCircuit size={28} />}
            title="AI Interview Preparation"
            description="Generate technical and behavioral interview questions with ideal answers, interviewer intent and role-specific preparation."
            buttonText="Prepare Interview"
            accent="indigo"
          />

          <FeatureCard
            icon={<Route size={28} />}
            title="Skill Gap & Roadmap"
            description="Identify missing skills, receive a personalized learning roadmap and actionable recommendations to improve interview readiness."
            buttonText="View Roadmap"
            accent="green"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
