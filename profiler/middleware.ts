import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/auth";

const protectedRoutes = ["/candidate","/recruiter","/dashboard"];

export default async function middleware(request: NextRequest) {
    const session = await auth();

    const { pathname } = request.nextUrl;

    const isProtected = protectedRoutes.some((route) =>
        pathname.startsWith(route)
    );

    if (isProtected && !session) {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    return NextResponse.next();
}























// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { getToken } from "next-auth/jwt";

// export function middleware(request:NextRequest){
//     const token = request.cookies.get('authToken')?.value;

//     // Redirect unauthenticated users to the login page
//     if(!token && !request.nextUrl.pathname.startsWith('/auth')){
//         return NextResponse.redirect(new URL('/auth/login',request.url));
//     }

//     // Redirect authenticated users to the dashboard from auth pages
//     if(token && request.nextUrl.pathname.startsWith('/auth')){
//         return NextResponse.redirect(new URL('/dashboard',request.url));
//     }

//     return NextResponse.next();
// }

// // Specify the routes to apply the middleware to
// export const config = {
//     matcher: ['/dashboard/:path*','/auth/:path*'],
// }