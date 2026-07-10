const Footer = () => {
  return (
    <footer className="border-t-2 border-zinc-800 bg-[#111111] px-8 py-6 mt-10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
          <h2 className="text-xl font-bold text-indigo-500">HireZen AI</h2>

          <p className="text-sm text-gray-400 text-center sm:text-left">
            © {new Date().getFullYear()} HireZen AI. All rights reserved.
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-gray-400 hover:border-indigo-500 hover:text-indigo-400 transition-all"
          >
           Twitter
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-gray-400 hover:border-indigo-500 hover:text-indigo-400 transition-all"
          >
            
                      LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
