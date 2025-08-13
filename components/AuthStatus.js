'use client';

import { useSession } from 'next-auth/react';
import SignOutButton from './SignOutButton';

export default function AuthStatus() {
    const { data: session } = useSession();

    if (session) {
        return (
            <div className='static'>
                <div className='absolute top-3 left-3 p-2'>
                    <p>Signed in as {session.user.email}</p>
                    <SignOutButton />
                </div>
            </div>
        );
    }

    return <p>Not Signed In</p>;
}