import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // Make sure to use the correct error state

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        // Reset error message
        setError("");

        if (!email || !password) {
            setError("Please fill in both fields");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:3000/api/auth/login", // Use direct URL
                { email, password }
            );

            // Extract token and role from response
            const { token, role } = response.data;

            // Store the token in localStorage
            localStorage.setItem("token", token);

            // Redirect based on role
            if (role === "admin") {
                navigate("/admindashboard");
            } else if (role === "user") {
                navigate("/dashboard");
            } else {
                throw new Error("Unknown role");
            }
        } catch (error) {
            console.error("Login error: ", error);  // Log the error for debugging
            const errorMsg = error.response?.data?.message || "Error logging in. Please try again.";
            setError(errorMsg);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-5xl px-8 bg-white shadow-md rounded-lg">
                {/* Left Section with Logo */}
                <div className="flex items-center justify-center lg:w-1/2 w-full p-4">
                    <img
                        src="src/assets/images/GuidEngine.png"
                        alt="Logo"
                        className="w-64 h-64"
                    />
                </div>

                {/* Right Section with Login Form */}
                <div className="lg:w-1/2 w-full p-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Log in to your account</h2>
                    <p className="mt-2 text-sm text-gray-500">
                        Welcome back! Please enter your details.
                    </p>

                    <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Password"
                            />
                        </div>

                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center">
                                <input
                                    id="remember_me"
                                    name="remember_me"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <label htmlFor="remember_me" className="ml-2 text-sm text-gray-600">
                                    Remember for 30 days
                                </label>
                            </div>
                            <a href="#" className="text-sm font-medium text-blue-600 hover:underline">
                                Forgot password?
                            </a>
                        </div>

                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full px-4 py-2 text-sm font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Sign in
                            </button>
                        </div>

                        <div className="flex items-center justify-center mt-4">
                            <button
                                type="button"
                                className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                <img
                                    src="src/assets/icons/google.png"
                                    alt="Google"
                                    className="w-5 h-5 mr-2"
                                />
                                Sign in with Google
                            </button>
                        </div>

                        <div className="flex items-center justify-center mt-6">
                            <p className="text-sm text-gray-600">
                                Don't have an account?{' '}
                                <button
                                    type="button"
                                    onClick={() => navigate("/signup")}
                                    className="font-medium text-blue-600 hover:underline"
                                >
                                    Sign up
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
