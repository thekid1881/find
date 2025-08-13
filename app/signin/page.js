'use client';

import { signIn } from "next-auth/react";
import { FaGooglePlus } from "react-icons/fa";

export default function Signin() {
    const handleLogin = async () => {
        await signIn('google', {
            callbackUrl: '/dashboard',
        });
    };

    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16">
            <main className="flex flex-col gap-[32px] row-start-2 items-center">
                <h1 className="text-center justify-items-center text-5xl font-bold">
                    Sign In Page
                </h1>
                <button
                    onClick={handleLogin}
                    className="flex flex-row text-xl font-bold mt-12 border-solid border-1 border-gray-700 p-2 rounded-md"
                >
                    <FaGooglePlus 
                        className="m-2"
                    />
                    <p className="m-2">
                        Google Sign In
                    </p>
                </button>
            </main>
        </div>
    );
}