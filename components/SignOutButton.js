'use client';

import { signOut } from "next-auth/react";
import { FaGooglePlus } from "react-icons/fa";

export default function SignOutButton() {
    return (
        <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="flex flex-row text-md font-bold mt-12 border-solid border-1 border-gray-700 p-2 rounded-md"
        >
            <FaGooglePlus 
                className="m-2"
            />
            <p className="m-2">
                Google Sign Out
            </p>
        </button>
    );
}