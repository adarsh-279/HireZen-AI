import { ArrowUpRight, PlayCircle, Sparkles } from "lucide-react";
import { useNavigate } from "react-router";
import demoResumeTemplate from "../../assets/demo-resume-template.webp"

const HeroSection = () => {
    const navigate = useNavigate()

    const handleButtonClick = () => {
        navigate('/register')
    }
  return (
    <section className="pt-36 pb-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-semibold">
            <Sparkles size={16} />
            Elevate Your Career Trajectory
          </div>

          <h1 className="mt-8 text-5xl lg:text-6xl font-black leading-tight">
            Master Your Next
            <br />
            Interview with{" "}
            <span className="bg-linear-to-r from-indigo-400 via-cyan-300 to-green-400 bg-clip-text text-transparent">
              AI Intelligence
            </span>
          </h1>

          <p className="mt-8 text-zinc-400 text-lg leading-9 max-w-xl">
            Personalized resume analysis, AI-generated interview questions,
            detailed performance reports, and strategic career insights—all in
            one intelligent platform.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <button onClick={handleButtonClick} className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-xl font-semibold flex items-center gap-3 text-black">
              Start Practicing
              <ArrowUpRight size={20} />
            </button>

          </div>

          <div className="mt-16 grid grid-cols-3 gap-10">
            <div>
              <h2 className="text-4xl font-bold text-white">1K+</h2>
              <p className="mt-2 text-zinc-500 uppercase tracking-wider text-xs">
                Resume Parsed
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-green-400">94%</h2>
              <p className="mt-2 text-zinc-500 uppercase tracking-wider text-xs">
                Hiring Success
              </p>
            </div>

            <div>
              <h2 className="text-3xl text-green-400">★★★★★</h2>
              <p className="mt-2 text-zinc-500 uppercase tracking-wider text-xs">
                Top Rated Tool
              </p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <div className="absolute -inset-6 bg-green-500/10 blur-3xl rounded-full" />

          <div className="relative bg-[#181818] border border-zinc-800 rounded-4xl p-6 shadow-2xl">
            <div className="rounded-2xl overflow-hidden border border-zinc-700">
  <img
    src={demoResumeTemplate}
    alt="HireZen AI Dashboard"
    className="w-full h-150 object-cover object-top"
  />
</div>

            <div className="mt-6 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-semibold">AI Performance Score</h3>

                <p className="text-zinc-500">Live Analysis in Progress</p>
              </div>

              <div className="bg-green-500/15 text-green-400 px-4 py-2 rounded-lg text-2xl font-bold">
                92%
              </div>
            </div>

            <div className="mt-6 h-3 bg-zinc-800 rounded-full overflow-hidden">
              <div className="w-[88%] h-full bg-linear-to-r from-indigo-400 to-green-400 rounded-full" />
            </div>

            <div className="mt-8 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-400 flex items-center justify-center text-black font-bold">
                  AI
                </div>

                <div>
                  <p className="font-semibold">Deep Learning Sync Active</p>

                  <p className="text-xs text-zinc-500">
                    Interview Intelligence Engine
                  </p>
                </div>
              </div>

              <span className="text-green-400 font-semibold text-sm">
                ● LIVE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
