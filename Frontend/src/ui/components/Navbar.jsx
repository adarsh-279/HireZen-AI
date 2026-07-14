import { NavLink, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { useAuth } from "../../auth/hooks/useAuth";

const Navbar = () => {
    const navigate = useNavigate()
    const { handleLogout } = useAuth();

    const handleLogoutButton = async () => {
        await handleLogout()
        navigate('/login')
    }
    return (
        <nav className="w-full bg-[#111111c7] backdrop-blur-sm border-gray-800 border-b-2 px-8 py-4 flex items-center justify-between fixed z-50">
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

            <button onClick={handleLogoutButton} className="flex items-center gap-2 text-gray-300 border p-2 rounded-md hover:text-red-400 transition">
                <LogOut size={18} />
                <span className="text-sm font-medium">Logout</span>
            </button>
        </nav>
    );
};

export default Navbar;