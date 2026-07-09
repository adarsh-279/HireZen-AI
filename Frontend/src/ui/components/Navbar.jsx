import { NavLink } from "react-router-dom";
import { LogOut } from "lucide-react";

const Navbar = () => {
    return (
        <nav className="bg-[#111111] border border-gray-800 rounded-xl px-8 py-4 flex items-center justify-between">
            <NavLink >
                <div className="text-2xl font-bold">
                    <span className="text-[#4f46cd]">HireZen AI</span>
                </div>
            </NavLink>

            <div className="flex items-center gap-10">
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) => `text-sm font-medium transition ${isActive ? "text-[#21c768] underline underline-offset-8" : "text-gray-300 hover:text-white"}`}
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to="/resume"
                    className={({ isActive }) =>`text-sm font-medium transition ${isActive ? "text-[#21c768] underline underline-offset-8" : "text-gray-300 hover:text-white"}`}
                >
                    Resume
                </NavLink>

                <NavLink
                    to="/reports"
                    className={({ isActive }) =>`text-sm font-medium transition ${isActive? "text-[#21c768] underline underline-offset-8": "text-gray-300 hover:text-white"}`}
                >
                    Reports
                </NavLink>
            </div>

            <button className="flex items-center gap-2 text-gray-300 border p-2 rounded-md hover:text-red-400 transition">
                <LogOut size={18} />
                <span className="text-sm font-medium">Logout</span>
            </button>
        </nav>
    );
};

export default Navbar;