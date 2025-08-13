import Link from "next/link";

export default function Findjobs() {
    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16">
            <main className="flex flex-col gap-[32px] row-start-2 items-center">
                <h1 className="text-center justify-items-center text-5xl font-bold">
                    Find Your Job.
                </h1>
                <p>
                    Ready to get hired? Show off your value to targeted employers. It's that simple.
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