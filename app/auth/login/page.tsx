'use client';

import { SignInGithub } from "@/components/shared/AuthButtons/sign-in-github";
import { SignInGoogle } from "@/components/shared/AuthButtons/sign-in-google";


export default function Login(){
    return (
        <div>
            {" "}
            <p>You are not signed in.</p>{" "}
            <SignInGithub />
            <SignInGoogle />
        </div>
    );
};
