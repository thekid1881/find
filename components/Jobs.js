import { supabase } from "@/lib/supabaseClient";

export default async function Jobs() {
    const { data: jobs, error } = await supabase
        .from('jobs')
        .select('*');
    
    if (error) {
        return <div>Error loading jobs: {error.message}</div>;
    }

    return (
        <div className="text-center m-2 px-14 py-4 border-solid border-1 border-gray-700 rounded-md">
            <h1 className="font-bold text-3xl mb-6">
                Jobs List
            </h1>
            <ul className="list-disc">
                {jobs.map((job) => (
                    <li key={job.id}>
                        <p>{job.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}