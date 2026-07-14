import { NavLink, useNavigate } from "react-router-dom";

const NavbarHome = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-zinc-800 bg-[#111111c7] backdrop-blur-md">
      <div className="max-w-8xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <NavLink to="/">
          <h1 className="text-2xl font-bold">
            <span className="text-indigo-500">HireZen</span>
            <span className="text-white"> AI</span>
          </h1>
        </NavLink>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <a
            href="#home"
            className="text-sm font-medium text-zinc-300 hover:text-green-400 transition"
          >
            Home
          </a>

          <a
            href="#resume"
            className="text-sm font-medium text-zinc-300 hover:text-green-400 transition"
          >
            Resume Analysis
          </a>

          <a
            href="#features"
            className="text-sm font-medium text-zinc-300 hover:text-green-400 transition"
          >
            Features
          </a>

          <a
            href="#cta"
            className="text-sm font-medium text-zinc-300 hover:text-green-400 transition"
          >
            Get Started
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/login")}
            className="px-5 py-2 rounded-lg border border-zinc-700 text-zinc-300 hover:border-green-500 hover:text-white transition"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            className="px-5 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-black font-semibold transition"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarHome;
