"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Login() {
    const { data: session } = useSession();
    console.log(session);

    if (session) {
        return (
            <>
                <button
                    onClick={() => signOut()}
                    type="button"
                    className="btn btn-primary"
                >
                    Sign Out of Google
                </button>
            </>
        );
    } else {
        return (
            <>
                <button
                    onClick={() => signIn()}
                    type="button"
                    className="btn btn-primary"
                >
                    Sign In with Google
                </button>
            </>
        );
    }
}
