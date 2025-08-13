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
                <h1 className="text-center justify-items-center text-5xl font-bold">
                    Dashboard
                </h1>
                <p>
                    Welcome, {session.user.name}!
                </p>
                <Jobs />
                <Form />
                <Link
                    href="/resume"
                    className="p-4 border-solid border-1 border-gray-700 rounded-md hover:bg-amber-300"
                >
                    Work on Resume
                </Link>
            </main>
        </div>
    );
}