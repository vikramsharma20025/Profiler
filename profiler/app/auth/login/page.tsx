'use client';

import { SignInButton } from "@/components/shared/AuthButtons/sign-in-button";

export default function Login(){
    return (
        <div>
            {" "}
            <p>You are not signed in.</p>{" "}
            {/* <button> */}
                <SignInButton />
            {/* </button> */}
        </div>
    )
}