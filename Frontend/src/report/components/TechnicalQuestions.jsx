import { Code2, Target, Lightbulb } from "lucide-react";

const TechnicalQuestions = ({ questions }) => {
  return (
    <div className="bg-[#181818] border border-zinc-800 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-11 h-11 rounded-lg bg-blue-600/20 flex items-center justify-center">
          <Code2 className="text-blue-400" size={22} />
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            Technical Interview Questions
          </h2>
          <p className="text-sm text-zinc-500">
            AI-generated questions based on your resume and the job description.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {questions?.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-zinc-800 bg-[#111] p-5"
          >
            {/* Question */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-lg">{item.question}</h3>
              </div>
            </div>

            {/* Intention */}
            <div className="mt-5 flex gap-3">
              <Target
                className="text-yellow-400 mt-1 flex-shrink-0"
                size={18}
              />

              <div>
                <p className="text-sm text-zinc-500 font-medium">
                  Interviewer's Intention
                </p>

                <p className="text-zinc-300 mt-1 leading-7">{item.intention}</p>
              </div>
            </div>

            {/* Answer */}
            <div className="mt-5 flex gap-3">
              <Lightbulb
                className="text-green-400 mt-1 flex-shrink-0"
                size={18}
              />

              <div>
                <p className="text-sm text-zinc-500 font-medium">
                  Recommended Answer
                </p>

                <p className="text-zinc-300 mt-1 leading-7 whitespace-pre-line">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}

        {(!questions || questions.length === 0) && (
          <div className="text-center py-12 text-zinc-500">
            No technical questions available.
          </div>
        )}
      </div>
    </div>
  );
};

export default TechnicalQuestions;
