// 'use server';

// import { signIn,signOut } from "@/auth";

// export const login = async () => {
//     await signIn("github", {redirectTo: "/"});
// };

// export const logout = async () => {
//     await signOut({redirectTo: "/"});
// };
"use server";

import { signIn, signOut } from "@/auth";

export const login = async ({provide}:{provide:string}) => {
    await signIn(provide, { redirectTo: "/" });
};

export const logout = async () => {
    await signOut({ redirectTo: "/" });
};
