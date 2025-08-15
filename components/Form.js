'use client';

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { redirect } from 'next/navigation';

export default function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { data, error } = await supabase
            .from('resumeform')
            .insert([formData]);
        
        setLoading(false);

        if (error) {
            setError(error.message);
        } else {
            redirect("/profile");
        }
    };

    return (
        <div className="m-6 p-4 border-solid border-1 border-gray-700 rounded-md justify-self-center">
            <h1 className="font-bold text-3xl mb-6 text-center">
                Resume Builder
            </h1>
            <form onSubmit={handleSubmit} className="p-4 justify-self-center text-center">
                <div className="flex flex-row mb-4">
                    <label htmlFor="name" className="mr-4">Name:</label>
                    <input
                        type="text"
                        placeholder="First Last"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="p-2 w-full border-solid border-1 border-gray-400 rounded-md"
                        required
                    />
                </div>
                <div className="flex flex-row mb-4">
                    <label htmlFor="email" className="mr-4">Email:</label>
                    <input
                        type="text"
                        placeholder="janedoe@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="p-2 w-full border-solid border-1 border-gray-400 rounded-md"
                        required
                    />
                </div>
                <div className="flex flex-row mb-4">
                    <label htmlFor="phone" className="mr-4">Phone:</label>
                    <input
                        type="text"
                        placeholder="999-888-7777"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="p-2 w-full border-solid border-1 border-gray-400 rounded-md"
                        required
                    />
                </div>
                <div className="flex flex-row mb-4">
                    <label htmlFor="salary" className="mr-4">Salary:</label>
                    <input
                        type="text"
                        placeholder="$85,000"
                        value={formData.salary}
                        onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                        className="p-2 w-full border-solid border-1 border-gray-400 rounded-md"
                        required
                    />
                </div>
                <div className="flex flex-row mb-4">
                    <label htmlFor="homegeo" className="mr-4">Home Location:</label>
                    <input
                        type="text"
                        placeholder="Raliegh, NC"
                        value={formData.homegeo}
                        onChange={(e) => setFormData({ ...formData, homegeo: e.target.value })}
                        className="p-2 w-full border-solid border-1 border-gray-400 rounded-md"
                        required
                    />
                </div>
                <div className="flex flex-row mb-4">
                    <label htmlFor="loctype" className="mr-4">Work Location:</label>
                    <input
                        type="text"
                        placeholder="Remote"
                        value={formData.loctype}
                        onChange={(e) => setFormData({ ...formData, loctype: e.target.value })}
                        className="p-2 w-full border-solid border-1 border-gray-400 rounded-md"
                        required
                    />
                </div>
                <div className="flex flex-row mb-4">
                    <label htmlFor="career" className="mr-4">Career Role:</label>
                    <input
                        type="text"
                        placeholder="Business Analyst"
                        value={formData.career}
                        onChange={(e) => setFormData({ ...formData, career: e.target.value })}
                        className="p-2 w-full border-solid border-1 border-gray-400 rounded-md"
                        required
                    />
                </div>
                <div className="flex flex-row mb-4">
                    <label htmlFor="roleseek" className="mr-4">Target Role:</label>
                    <input
                        type="text"
                        placeholder="Senior Engineer"
                        value={formData.roleseek}
                        onChange={(e) => setFormData({ ...formData, roleseek: e.target.value })}
                        className="p-2 w-full border-solid border-1 border-gray-400 rounded-md"
                        required
                    />
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <button
                    type="submit"
                    disabled={loading}
                    className="p-2 border-solid border-1 border-gray-700 rounded-md font-bold hover:bg-amber-300"
                >
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    );
}