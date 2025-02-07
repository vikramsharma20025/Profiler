// 'use client';
import React from 'react';
import { auth } from '@/auth';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = async () => {
    const session = await auth();
    return (
        <div className=''>
            <p>User name {session?.user?.name}</p>
            <p>User email {session?.user?.email}</p>
            <p>User Image Link {session?.user?.image}</p>
            <p>Session Expires {session?.expires}</p>
            {session?.user?.image && (
                <Image
                    src={session.user.image}
                    width={48}
                    height={48}
                    alt={session.user.name ?? "Avatar"}
                    style={{ borderRadius: "50%" }}
                />
            )}
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
