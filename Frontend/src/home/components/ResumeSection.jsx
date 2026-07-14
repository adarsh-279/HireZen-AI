import { Check, Sparkles, FileText, Upload } from "lucide-react";
import { useNavigate } from "react-router";

const ResumeSection = () => {
    const navigate = useNavigate()

    const handleButtonClick = () => {
        navigate('/register')
    }
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Left Resume Card */}
        <div className="bg-[#181818] border border-zinc-800 rounded-[30px] p-8">
          {/* Resume Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-green-500/15 flex items-center justify-center">
                <FileText className="text-green-400" size={28} />
              </div>

              <div>
                <h3 className="font-semibold text-2xl">resume_v2_final.pdf</h3>

                <p className="text-zinc-500 text-sm">
                  Resume uploaded successfully
                </p>
              </div>
            </div>

            <span className="px-4 py-2 rounded-lg bg-green-500/15 text-green-400 font-semibold">
              ATS READY
            </span>
          </div>

          {/* Score */}
          <div className="mt-10">
            <div className="flex justify-between mb-3">
              <span className="text-zinc-300 font-medium">
                Keyword Match Score
              </span>

              <span className="text-indigo-300 font-bold text-xl">94%</span>
            </div>

            <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full w-[94%] rounded-full bg-linear-to-r from-indigo-400 via-cyan-400 to-green-400" />
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 gap-5 mt-8">
            <div className="bg-[#232323] rounded-2xl p-6 border border-zinc-700">
              <Check className="text-green-400" size={24} />

              <h4 className="mt-5 font-semibold text-lg">Formatting</h4>

              <p className="text-zinc-500 mt-2 text-sm">
                Industry standard compliant
              </p>
            </div>

            <div className="bg-[#232323] rounded-2xl p-6 border border-zinc-700">
              <Sparkles className="text-indigo-400" size={24} />

              <h4 className="mt-5 font-semibold text-lg">Optimization</h4>

              <p className="text-zinc-500 mt-2 text-sm">
                12 AI keywords injected
              </p>
            </div>
          </div>

          {/* Feedback */}
          <div className="mt-8 rounded-2xl bg-[#111111] border border-zinc-800 p-6">
            <p className="uppercase tracking-widest text-xs text-indigo-400 font-semibold">
              AI Feedback
            </p>

            <p className="italic text-zinc-300 leading-8 mt-5">
              "Strengthened your Lead Developer bullets with more impactful
              action verbs. Re-ranked the skills section to prioritize
              high-demand cloud architecture technologies."
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div>
          <div className="inline-flex items-center gap-2 border border-indigo-500/30 bg-indigo-500/10 rounded-lg px-4 py-2 text-indigo-300 text-sm font-semibold">
            Resume Intelligence
          </div>

          <h2 className="mt-8 text-5xl font-black leading-tight">
            Unlock Your Profile's
            <br />
            <span className="bg-linear-to-r from-indigo-300 via-cyan-300 to-green-400 bg-clip-text text-transparent">
              True Potential
            </span>
          </h2>

          <p className="mt-8 text-zinc-400 text-lg">
            Before the interview starts, your resume does the talking. HireZen
            AI analyzes every section, boosts ATS compatibility, optimizes
            keywords, and provides actionable feedback to help you stand out.
          </p>

          <div className="mt-10 space-y-7">
            <div className="flex gap-5">
              <div className="w-8 h-8 rounded-full bg-green-500/15 flex items-center justify-center">
                <Check className="text-green-400" size={18} />
              </div>

              <div>
                <h4 className="font-semibold text-xl">
                  ATS Compatibility Checks
                </h4>

                <p className="text-zinc-500 mt-2">
                  Ensure your resume passes Applicant Tracking Systems without
                  formatting issues.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-8 h-8 rounded-full bg-indigo-500/15 flex items-center justify-center">
                <Check className="text-indigo-300" size={18} />
              </div>

              <div>
                <h4 className="font-semibold text-xl">
                  AI Keyword Optimization
                </h4>

                <p className="text-zinc-500 mt-2">
                  Dynamically align your resume with the target job description
                  using intelligent keyword suggestions.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-8 h-8 rounded-full bg-green-500/15 flex items-center justify-center">
                <Check className="text-green-400" size={18} />
              </div>

              <div>
                <h4 className="font-semibold text-xl">
                  Industry Formatting Feedback
                </h4>

                <p className="text-zinc-500 mt-2">
                  Receive professional layout recommendations and improve
                  readability for recruiters.
                </p>
              </div>
            </div>
          </div>

          <button onClick={handleButtonClick} className="mt-12 bg-indigo-300 hover:bg-indigo-200 transition text-indigo-950 font-bold px-10 py-5 rounded-2xl flex items-center gap-3">
            Upload Your Resume
            <Upload size={20} />
          </button>

          <p className="mt-6 uppercase tracking-widest text-xs text-zinc-500">
            Privacy Focused • Your Data Stays Yours
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
