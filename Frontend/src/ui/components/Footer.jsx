import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 bg-[#111111] px-8 py-6 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">
            <span className="text-indigo-500">HireZen</span>
            <span className="text-white"> AI</span>
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            © {new Date().getFullYear()} HireZen AI. All rights reserved.
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-8 text-sm">
          <NavLink to="/" className="text-gray-400 hover:text-white transition">
            Home
          </NavLink>

          <NavLink
            to="/login"
            className="text-gray-400 hover:text-white transition"
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className="text-gray-400 hover:text-white transition"
          >
            Register
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
