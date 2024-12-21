import 'material-icons/iconfont/material-icons.css';
import React from "react";

const DashboardPage = () => {
    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md">
                <div className="flex items-center p-4">
                    <img
                        src="src/assets/images/GuidEngine.png"
                        alt="Logo"
                        className="w-12 h-12"
                    />
                    <span className="ml-3 text-xl font-bold text-gray-800">GameEngine</span>
                </div>
                <nav className="mt-4">
                    <ul>
                        <li className="flex items-center p-4 text-blue-600 font-medium">
                            <span className="material-icons mr-4">home</span>
                            Dashboard
                        </li>
                        <li className="flex items-center p-4 text-gray-600 hover:text-blue-600">
                            <span className="material-icons mr-4">sports_esports</span>
                            Matchmaking
                        </li>
                        <li className="flex items-center p-4 text-gray-600 hover:text-blue-600">
                            <span className="material-icons mr-4">chat</span>
                            Chat
                        </li>
                    </ul>
                </nav>
                <div className="absolute bottom-0 w-full p-4">
                    <button className="flex items-center text-gray-600 hover:text-blue-600">
                        <span className="material-icons mr-4">logout</span>
                        Log Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Navbar */}
                <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
                    <input
                        type="text"
                        placeholder="Search product, supplier, order"
                        className="w-1/2 px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="flex items-center space-x-4">
                        <button className="material-icons text-gray-600">notifications</button>
                        <img
                            src="src/assets/images/user-profile.jpg"
                            alt="User"
                            className="w-10 h-10 rounded-full border"
                        />
                    </div>
                </header>

                {/* Main Sections */}
                <main className="flex flex-col p-6 space-y-6">
                    {/* Popular Games Section */}
                    <section className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-bold text-gray-900">Popular Games</h2>
                        <div className="grid grid-cols-3 gap-4 mt-4">
                            {/* Placeholder for game cards */}
                            <div className="h-32 bg-gray-100 rounded"></div>
                            <div className="h-32 bg-gray-100 rounded"></div>
                            <div className="h-32 bg-gray-100 rounded"></div>
                        </div>
                    </section>

                    {/* Ongoing Matches Section */}
                    <section className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-bold text-gray-900">Ongoing Matches</h2>
                        <div className="h-64 bg-gray-100 rounded"></div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default DashboardPage;
