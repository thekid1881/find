import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import AuthStatus from "@/components/AuthStatus";
import Jobs from "@/components/Jobs";
import Link from 'next/link';
import Form from "@/components/Form";

export default async function Dashboard() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/");
    }

    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16">
            <main className="flex flex-col gap-[32px] row-start-2 items-center">
                <AuthStatus />
                <h1 className="text-center justify-items-center text-5xl font-bold">Dashboard</h1>
                <p>Welcome, {session.user.name}!</p>
                <div className="flex flex-row m-6 p-4 justify-self-center">
                    <Jobs />
                    <p className="flex flex-col m-6 px-14 py-4 border-solid border-1 border-gray-700 rounded-md text-3xl text-center font-bold">
                        Resume Builder
                        <Link 
                            href="/resume"
                            className="mt-12 p-2 border-solid border-1 border-gray-700 rounded-md font-bold hover:bg-amber-300 text-sm"
                        >
                            Resume Builder
                        </Link>
                        <Link 
                            href="/profile"
                            className="mt-12 p-2 border-solid border-1 border-gray-700 rounded-md font-bold hover:bg-amber-300 text-sm"
                        >
                            Go to Profile
                        </Link>
                    </p>
                </div>
            </main>
        </div>
    );
}