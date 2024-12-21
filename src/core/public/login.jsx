import React from 'react';

const LoginPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-5xl px-8 bg-white shadow-md rounded-lg">
                {/* Left Section with Logo */}
                <div className="flex items-center justify-center lg:w-1/2 w-full p-4">
                    <img
                        src="src/assets/images/GuidEngine.png"
                        alt="Logo"
                        className="w-48 h-48"
                    />
                </div>

                {/* Right Section with Login Form */}
                <div className="lg:w-1/2 w-full p-8 text-right">
                    <h2 className="text-3xl font-bold text-gray-900">Log in to your account</h2>
                    <p className="mt-2 text-sm text-gray-500">
                        Welcome back! Please enter your details.
                    </p>

                    <form className="mt-8 space-y-6">
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
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
                                required
                                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Password"
                            />
                        </div>

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
                                    src="src\assets\icons\google.png"
                                    alt="Google"
                                    className="w-5 h-5 mr-2"
                                />
                                Sign in with Google
                            </button>
                        </div>

                        <div className="flex items-center justify-center mt-6">
                            <p className="text-sm text-gray-600">
                                Don't have an account?{' '}
                                <a href="#" className="font-medium text-blue-600 hover:underline">
                                    Sign up
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
