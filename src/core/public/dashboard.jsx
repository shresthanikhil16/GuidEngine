import 'material-icons/iconfont/material-icons.css';
import React from "react";
import Navbar from '../../components/navbar/navbar';
import Sidebar from '../../components/sidebar/sidebar';

const DashboardPage = () => {
    return (
        <div className="flex h-screen bg-[#662f34]">
            <Sidebar />
            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Navbar */}
                <Navbar />

                {/* Main Sections */}
                <main className="flex-1 p-6 space-y-6">
                    {/* Popular Games Section */}
                    <section className="bg-[#2d1217] rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-bold text-white">Popular Games</h2>
                        <div className="grid grid-cols-3 gap-4 mt-6">
                            <div
                                className="bg-[#E35C5C] text-white p-4 rounded-lg flex items-center justify-center h-40">
                            </div>
                            <div
                                className="bg-[#E35C5C] text-white p-4 rounded-lg flex items-center justify-center h-40">
                            </div>
                            <div
                                className="bg-[#E35C5C] text-white p-4 rounded-lg flex items-center justify-center h-40">
                            </div>
                        </div>
                    </section>
                </main>

                <main className="flex-1 p-6 space-y-6">
                    {/* Popular Games Section */}
                    <section className="bg-[#2d1217] rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-bold text-white">Ongoing Matches</h2>
                        <div className="grid grid-cols-1 gap-4 mt-6">
                            <div
                                className="bg-[#E35C5C] text-white p-4 rounded-lg flex items-center justify-center h-40">
                            </div>
                        </div>
                    </section>


                </main>

            </div>
        </div>
    );
};

export default DashboardPage;
