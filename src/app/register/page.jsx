'use client'
import { useState } from 'react';
const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        gender: 'male',
        dob: '',
        email: '',
        mobile: '',
        state: 'Andhra Pradesh',
        username: '',
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
        console.log(formData);
    };

    return (
        <div className="max-w-2xl mx-auto p-8 flex flex-col items-center  bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-6 md:text-left text-center">Registration Form</h2>
            <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-4">
                <div className="mb-4">
                    <label htmlFor="full_name" className="block text-gray-600">Full Name</label>
                    <input type="text" id="full_name" name="full_name" className="md:w-[80%] w-[100%] px-3 py-2 border border-gray-300 rounded-lg" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="gender" className="block text-gray-600">Gender</label>
                    <select id="gender" name="gender" className="md:w-[80%] w-[100%] px-3 py-2 border border-gray-300 rounded-lg" required>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="dob" className="block text-gray-600">Date of Birth</label>
                    <input type="date" id="dob" name="dob" className="md:w-[80%] w-[100%] px-3 py-2 border border-gray-300 rounded-lg" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-600">Email</label>
                    <input type="email" id="email" name="email" className="md:w-[80%] w-[100%] px-3 py-2 border border-gray-300 rounded-lg" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="mobile" className="block text-gray-600">Mobile Number</label>
                    <input type="tel" id="mobile" name="mobile" className="md:w-[80%] w-[100%] px-3 py-2 border border-gray-300 rounded-lg" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="state" className="block text-gray-600">State</label>
                    <select id="state" name="state" className="md:w-[80%] w-[100%] px-3 py-2 border border-gray-300 rounded-lg" required>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        {/* Add all other Indian states here */}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-600">Username</label>
                    <input type="text" id="username" name="username" className="md:w-[80%] w-[100%] px-3 py-2 border border-gray-300 rounded-lg" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-600">Password</label>
                    <input type="password" id="password" name="password" className="md:w-[80%] w-[100%] px-3 py-2 border border-gray-300 rounded-lg" required />
                </div>
            </div>
            <div className="mt-6">
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Register</button>
            </div>
        </div>
    );
}

export default RegistrationForm;
