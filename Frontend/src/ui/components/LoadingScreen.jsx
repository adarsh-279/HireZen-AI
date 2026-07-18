import { Loader } from 'lucide-react';

export const LoadingScreen = ({ message = "Generating your report..." }) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#181818] border border-zinc-800 rounded-2xl p-8 max-w-md w-full mx-4 text-center">
        {/* Animated Loader */}
        <div className="flex justify-center mb-6">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 border-4 border-transparent border-t-indigo-600 border-r-indigo-600 rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-4 border-transparent border-b-green-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
            <Loader className="absolute inset-0 m-auto text-indigo-600 animate-pulse" size={28} />
          </div>
        </div>

        {/* Message */}
        <h3 className="text-xl font-bold text-white mb-2">Processing Your Interview</h3>
        <p className="text-zinc-400 text-sm mb-6">{message}</p>

        {/* Progress Text */}
        <div className="space-y-2 text-xs text-zinc-500">
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <span>Analyzing resume</span>
            <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <p className="pt-2">This may take 30-60 seconds...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
