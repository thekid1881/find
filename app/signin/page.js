'use client';

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Signin() {
    const { data: session } = useSession();
    const router = useRouter();

    if (session) {
        router.push("/dashboard");
        return null;
    }

    return (
        <div>
            <h1>
                Welcome to the App
            </h1>
            <button
                onClick={() => signIn("google")}
            >
                Google Sign-In
            </button>
        </div>
    );
}