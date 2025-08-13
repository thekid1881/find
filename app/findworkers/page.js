import Link from "next/link";

export default function Findworkers() {
    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16">
            <main className="flex flex-col gap-[32px] row-start-2 items-center">
                <h1 className="text-center justify-items-center text-5xl font-bold">
                    Find Your Applicant.
                </h1>
                <p>
                    Want to find the exact right person for a role? Discover perfect matches through guided job postings. Let's get going.
                </p>
                <div className="flex-row gap-4 items-center m-6">
                    <Link
                        href="/signin"
                        className="mx-10 rounded-md p-4 border-solid border-2 border-gray-500 hover:bg-amber-200"
                    >
                        Sign In
                    </Link>
                </div>
            </main>
        </div>
    );
}