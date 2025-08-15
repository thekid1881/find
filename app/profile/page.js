import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import AuthStatus from "@/components/AuthStatus";
import Link from 'next/link';
import OutputForm from "@/components/OutputForm";

export default async function Profile() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/");
    }

    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16">
            <main className="flex flex-col gap-[32px] row-start-2 items-center">
                <AuthStatus />
                <h1 className="text-center justify-items-center text-5xl font-bold">Profile</h1>
                <div className="flex flex-row m-6 p-4 justify-self-center">
                    <OutputForm />
                </div>
            </main>
        </div>
    );
}