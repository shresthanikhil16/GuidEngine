import 'material-icons/iconfont/material-icons.css';
import React from "react";

const Navbar = () => {
    return (
        <header
            className="flex items-center justify-between px-6 py-4 bg-[#2d1217] text-white shadow rounded-3xl m-4">
            <h1 className="text-lg font-semibold">Good Evening, Gamer</h1>
            <div className="flex items-center space-x-6">
                <input
                    type="text"
                    placeholder="Search games"
                    className="px-4 py-2 text-sm text-white rounded-lg focus:outline-none bg-[#662f34]"
                />
                <button className="material-icons">notifications</button>
                <img
                    src="src/assets/images/user-profile.jpg"
                    alt="User"
                    className="w-10 h-10 rounded-full border"
                />
            </div>
        </header>
    );
};

export default Navbar;
