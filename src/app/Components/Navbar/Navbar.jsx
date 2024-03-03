'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { useContext } from 'react';
import { AuthContext } from '@/app/Context/AuthContext';
import React from 'react'
import styles from "./style.module.css"
import Link from 'next/link'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { toast } from 'react-hot-toast';
const Navbar = () => {
    const { user, error, isLoading } = useUser();
    const { toggle, mode } = useContext(AuthContext);
    const showToast = (message) => {
        toast.success(message, {
            style: {
                border: '1px solid #713200',
                padding: '16px',
                color: '#fff',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '2rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05)',
                transition: '0.2s all ease-in-out',
            },
            iconTheme: {
                primary: '#713200',
                secondary: '#FFFAEE',
            },
        });
    };

    const login = () => {
        if (user) {
            showToast(`Welcome ${user.name}`);
        }
    };

    const logout = () => {
        if (!isLoading && user) {
            showToast('Logged out successfully');
        }
    };

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
                        mode === "default" ? <div className={styles.iconl}><LightModeIcon /></div> : <div className={styles.icond}><DarkModeIcon /></div>
                    }

                </div>
                <Link href="/about" >About</Link>
                <Link href="/admin" >Admin</Link>
                
                <Link href="/help" >Help</Link>
                {user && <Link href="/api/auth/logout" onClick={logout} >Logout</Link>}
                {user ? <Link href="/dashboard/profile" > <img className={styles.profileimg} src={user.picture} alt={user.name} />{user.name}</Link> : <Link href="/api/auth/login" onClick={login} >Login</Link>}
            </div>
        </div>
    )
}

export default Navbar