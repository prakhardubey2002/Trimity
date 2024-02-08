'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { useContext } from 'react';
import { AuthContext } from '@/app/Context/AuthContext';
import React from 'react'
import styles from "./style.module.css"
import Link from 'next/link'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
const Navbar = () => {
    const { user, error, isLoading } = useUser();
    const { toggle, mode } = useContext(AuthContext)
    return (
        <div className={styles.nav} >
            <div className={styles.left} >
                <Link href="/" >
                    <span>T</span>rimity
                </Link>
            </div>
            <div className={styles.right} >
                <div className={styles.container} onClick={toggle} >
                    {
                        mode === "default" ? <div className={styles.icon}><LightModeIcon/></div> : <div className={styles.icon}><DarkModeIcon/></div>
                    }
                   
                </div>
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