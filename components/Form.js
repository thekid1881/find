'use client';

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from 'next/navigation';

export default function Form() {
    const router = useRouter();
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
            router.push("/");
        }
    };

    return (
        <div className="p-4 border-solid border-1 border-gray-700 rounded-md justify-self-center">
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
                {error && <p className="text-red-500">{error}</p>}
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-md"
                >
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    );
}