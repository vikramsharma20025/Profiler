// 'use client';
import { auth } from '@/auth';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/images/Logo.webp'

const Navbar = async () => {
    const session = await auth();
    console.log("session",session);
    return (
        <div className='flex flex-row justify-between h-20 w-full border'>
            <Image
                src={Logo}
                width={100}
                height={100}
                alt='Logo'
                style={{borderRadius: "50%" }}
            />
            <p>Welcome {session?.user?.name}</p>
            {/* <p>User email {session?.user?.email}</p>
            <p>User Image Link {session?.user?.image}</p>
            <p>Session Expires {session?.expires}</p>
            <p>Session User Id{session?.user?.id}</p> */}
            {session?.user?.image && (
                <Image
                    src={session.user.image}
                    width={100}
                    height={100}
                    alt={session.user.name ?? "Avatar"}
                    style={{ borderRadius: "50%" }}
                />
            )}
            {/* <Link href={'/dashboard'}>to Dashboard!</Link> */}
            {/* <Link href='/recruiter/posting/?jobId=h11h1'>Check if it works</Link> */}
            {/* <button
                type="button"
                onClick={() => {
                router.push({
                pathname: '/recruiter/posting/[jobId]',
                query: { jobId:  },
                })
                }}
                >
                Click here to read more
                </button> */}
        </div>
    )
}

export default Navbar;


// /api/auth/callback/google?code=4%2F0ASVgi3JPtZ9tH-Ud8kLN7KEUvPPRDcQWGGwLwwW8OxMB1_Q2NnwgMVdRuu3aSUoaclKRiA&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+openid&authuser=0&prompt=none
