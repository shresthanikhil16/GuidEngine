import 'material-icons/iconfont/material-icons.css';
import React, { useState } from "react";

const AdminDashboardPage = () => {
    const [games, setGames] = useState([]);
    const [newGame, setNewGame] = useState({
        name: "",
        description: "",
        imageUrl: "",
    });

    // Handle input changes for the new game
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewGame((prevGame) => ({
            ...prevGame,
            [name]: value,
        }));
    };

    // Add a new game to the games list
    const handleAddGame = () => {
        if (newGame.name && newGame.description && newGame.imageUrl) {
            setGames((prevGames) => [...prevGames, newGame]);
            setNewGame({ name: "", description: "", imageUrl: "" }); // Clear the input fields
        } else {
            alert("Please fill in all the fields.");
        }
    };

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
                        {/* Removed the Matchmaking and Chat options */}
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
                    {/* Add Game Form */}
                    <section className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-bold text-gray-900">Add New Game</h2>
                        <div className="mt-4 space-y-4">
                            <input
                                type="text"
                                name="name"
                                value={newGame.name}
                                onChange={handleInputChange}
                                placeholder="Game Name"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <textarea
                                name="description"
                                value={newGame.description}
                                onChange={handleInputChange}
                                placeholder="Game Description"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                name="imageUrl"
                                value={newGame.imageUrl}
                                onChange={handleInputChange}
                                placeholder="Image URL"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                onClick={handleAddGame}
                                className="w-full py-3 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
                            >
                                Add Game
                            </button>
                        </div>
                    </section>

                    {/* Games List Section */}
                    <section className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-bold text-gray-900">Added Games</h2>
                        <div className="grid grid-cols-3 gap-4 mt-4">
                            {games.map((game, index) => (
                                <div key={index} className="h-32 bg-gray-100 rounded flex flex-col justify-between p-4">
                                    <img
                                        src={game.imageUrl}
                                        alt={game.name}
                                        className="w-full h-20 object-cover rounded"
                                    />
                                    <div className="mt-2">
                                        <h3 className="font-semibold text-gray-800">{game.name}</h3>
                                        <p className="text-gray-600 text-sm">{game.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default AdminDashboardPage;
