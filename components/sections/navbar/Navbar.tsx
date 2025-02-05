import React from 'react';
import { auth } from '@/auth';
import Image from 'next/image';

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
        </div>
    )
}

export default Navbar