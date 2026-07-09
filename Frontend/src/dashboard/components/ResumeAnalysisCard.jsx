import { FileText, ArrowRight } from "lucide-react";

const ResumeAnalysisCard = () => {
    return (
        <div className="bg-[#1A1A1A] border border-[#21c768] rounded-2xl p-8 h-4xl flex flex-col justify-between">
            <div className="w-3xl">
                <div className="flex items-center gap-5">
                    <div className="w-10 h-10 rounded-lg bg-[#21c768]/10 flex items-center justify-center">
                        <FileText className="text-[#21c768]" size={20} />
                    </div>

                    <p className="text-[#21c768] text-xs font-semibold uppercase">
                        Recommended Action
                    </p>
                </div>

                <h2 className="text-3xl font-semibold pt-6">
                    Resume Analysis
                </h2>

                <p className="text-gray-400 pt-6 leading-8">Our AI engine is ready to scan your latest resume against <br /> 500+ top-tier tech job descriptions. Get instant feedback <br /> on keywords and formatting.</p>
            </div>

            <button className="mt-10 flex items-center gap-2 bg-[#B8B5FF] text-black px-6 py-3 rounded-lg w-fit font-medium hover:opacity-80">
                Resume Upload
                <ArrowRight size={18} />
            </button>
        </div>
    );
};

export default ResumeAnalysisCard;