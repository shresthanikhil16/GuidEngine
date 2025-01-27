import React from "react";
import { MdChat, MdDashboard, MdLogout, MdSportsEsports } from "react-icons/md";
import Logo from "../assets/images/GameEngine.png";

const Sidebar = () => {
    return (
        <aside className="w-64 bg-[#2d1217] text-white shadow-lg rounded-3xl m-4 relative">
            {/* Logo and Branding */}
            <div className="flex items-center p-4">
                <img src={Logo} alt="GameEngine Logo" className="w-12 h-12" />
                <span className="ml-3 text-xl font-bold">GuidEngine</span>
            </div>

            {/* Navigation */}
            <nav className="mt-8" role="navigation" aria-label="Main Sidebar Navigation">
                <ul>
                    <li className="flex items-center p-4 text-[#ff7171] font-medium rounded-xl">
                        <MdDashboard className="mr-4" />
                        Dashboard
                    </li>
                    <li className="flex items-center p-4 text-white hover:text-[#ff7171] rounded-xl">
                        <MdSportsEsports className="mr-4" />
                        Matchmaking
                    </li>
                    <li className="flex items-center p-4 text-white hover:text-[#ff7171] rounded-xl">
                        <MdChat className="mr-4" />
                        Chat
                    </li>
                </ul>
            </nav>

            {/* Logout Button */}
            <div className="absolute bottom-7 w-full p-4">
                <button className="flex items-center text-white hover:text-[#ff7171] rounded-xl">
                    <MdLogout className="mr-4" />
                    Log Out
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
