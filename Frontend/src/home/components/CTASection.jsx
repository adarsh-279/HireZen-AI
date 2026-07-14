import { ArrowUpRight, Sparkles, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router";

const CTASection = () => {
    const navigate = useNavigate()

    const handleButtonClick = () => {
        navigate('/register')
    }
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[36px] border border-zinc-800 bg-linear-to-br from-[#181818] via-[#131313] to-[#0F0F0F] p-14 lg:p-20">
          {/* Background Glow */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-green-500/10 blur-[120px]" />

          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-indigo-500/10 blur-[140px]" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 font-semibold text-sm">
                <Sparkles size={16} />
                AI Powered Career Assistant
              </div>

              <h2 className="mt-8 text-5xl lg:text-6xl font-black leading-tight">
                Ready To Ace
                <br />
                <span className="bg-linear-to-r from-indigo-300 via-cyan-300 to-green-400 bg-clip-text text-transparent">
                  Your Next Interview?
                </span>
              </h2>

              <p className="mt-8 text-zinc-400 text-lg leading-9 max-w-xl">
                Upload your resume, receive AI-powered interview questions,
                discover your skill gaps, and follow a personalized preparation
                roadmap designed to maximize your chances of getting hired.
              </p>

              <div className="mt-10 flex flex-wrap gap-5">
                <button onClick={handleButtonClick} className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-xl font-semibold text-black flex items-center gap-3">
                  Get Started Free
                  <ArrowUpRight size={20} />
                </button>
              </div>

              <div className="mt-10 flex items-center gap-3 text-zinc-500 text-sm">
                <ShieldCheck className="text-green-400" size={18} />
                No credit card required • Free forever plan available
              </div>
            </div>

            {/* Right */}
            <div className="bg-[#181818] border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-bold">What you'll unlock</h3>

              <div className="mt-8 space-y-6">
                {[
                  "ATS Resume Evaluation",
                  "Resume & Job Description Matching",
                  "AI-Generated Technical Questions",
                  "Behavioral Interview Preparation",
                  "Skill Gap Detection",
                  "Personalized Learning Roadmap",
                  "Interview Readiness Score",
                  "Comprehensive AI Report",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                      <ShieldCheck className="text-green-400" size={18} />
                    </div>

                    <span className="text-md">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl bg-[#111111] border border-zinc-800 p-6">
                <p className="text-green-400 font-semibold">
                  Trusted by students & developers
                </p>

                <p className="mt-3 text-zinc-400 leading-8">
                  Join thousands of candidates using HireZen AI to prepare
                  smarter, improve faster, and land better opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
