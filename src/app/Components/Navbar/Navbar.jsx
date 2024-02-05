'use client';

import { useUser } from '@auth0/nextjs-auth0/client';

import React from 'react'
import styles from "./style.module.css"
import Link from 'next/link'
const Navbar = () => {
    const { user, error, isLoading } = useUser();
    return (
        <div className={styles.nav} >
            <div className={styles.left} >
                <span>T</span>rimity
            </div>
            <div className={styles.right} >
                <Link href="/about" >About</Link>
                <Link target='_blank' href="https://github.com/prakhardubey2002" >Github</Link>
                 <Link href="/help" >Help</Link>
                {user && <Link href="/api/auth/logout" >Logout</Link>}
                {user ? <Link href="/api/auth/login" > <img className={styles.profileimg} src={user.picture} alt={user.name} />  {user.name}</Link> : <Link href="/api/auth/login" >Login</Link>}
            </div>
        </div>
    )
}

export default Navbar