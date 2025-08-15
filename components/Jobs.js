import { supabase } from "@/lib/supabaseClient";
import Link from 'next/link';

export default async function Jobs() {
    const { data: jobs, error } = await supabase
        .from('jobs')
        .select('*');
    
    if (error) {
        return <div>Error loading jobs: {error.message}</div>;
    }

    return (
        <div className="text-center m-6 px-14 py-4 border-solid border-1 border-gray-700 rounded-md">
            <h1 className="font-bold text-3xl mb-6">
                Target Jobs
            </h1>
            <ul className="list-disc mb-6">
                {jobs.map((job) => (
                    <li key={job.id}>
                        <p>{job.name}</p>
                    </li>
                ))}
            </ul>
            <Link
                href="/targetjobs"
                className="p-2 border-solid border-1 border-gray-700 rounded-md font-bold hover:bg-amber-300"
            >
                Go to Jobs
            </Link>
        </div>
    );
}