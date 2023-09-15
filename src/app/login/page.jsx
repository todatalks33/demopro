'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can access form data in the `formData` object and perform authentication or other actions.
        console.log(formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="flex items-center justify-center flex-col max-w-md w-full p-6 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-semibold mb-6">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-[100%] px-3 py-2 border border-gray-300 rounded-lg"
                            required
                            onChange={handleInputChange}
                            value={formData.email}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600 mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-[100%] px-3 py-2 border border-gray-300 rounded-lg"
                            required
                            onChange={handleInputChange}
                            value={formData.password}
                        />
                    </div>
                    <div className="mt-4">
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-[100%]">Login</button>
                    </div>
                </form>
                <p className="text-gray-600 text-sm mt-4">
                    Don't have an account? <Link href="/register" className="text-blue-500">Register here</Link>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;
