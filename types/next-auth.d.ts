
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: number;
            name: string;
            email: string;
        } & DefaultSession["user"];
    }
    interface JWT {
        idToken: string;
    }
}
