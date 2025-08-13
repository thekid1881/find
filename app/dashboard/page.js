import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import SignOutButton from "@/components/SignOutButton";

export default async function Dashboard() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/");
    }

    return (
        <div>
            <h1>
                Dashboard
            </h1>
            <p>
                Welcome, {session.user.name}!
            </p>
            <SignOutButton />
        </div>
    );
}