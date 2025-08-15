import { supabase } from "@/lib/supabaseClient";
import Link from 'next/link';

export default async function OutputForm() {
    const { data: resumeforms, error } = await supabase
        .from('resumeform')
        .select('*');
    
    if (error) {
        return <div>Error loading resumes: {error.message}</div>;
    }

    return (
        <div className="text-center m-6 px-14 py-4 border-solid border-1 border-gray-700 rounded-md">
            <h1 className="font-bold text-3xl mb-6">
                Resume Forms
            </h1>
            <ul className="mb-6">
                {resumeforms.map((resumeform) => (
                    <li key={resumeform.id}>
                        <p>{resumeform.name}</p>
                        <p>{resumeform.phone}</p>
                        <p>{resumeform.email}</p>
                        <p>{resumeform.salary}</p>
                        <p>{resumeform.homegeo}</p>
                        <p>{resumeform.loctype}</p>
                        <p>{resumeform.career}</p>
                        <p>{resumeform.roleseek}</p>
                    </li>
                ))}
            </ul>
            <Link
                href="/"
                className="p-2 border-solid border-1 border-gray-700 rounded-md font-bold hover:bg-amber-300"
            >
                Go Back Home
            </Link>
        </div>
    );
}