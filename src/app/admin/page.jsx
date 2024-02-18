"use client"
import React from 'react'
import styles from "./style.module.css"
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
const Admin = () => {
    const Email = process.env.NEXT_PUBLIC_ADMIN_CREDENTIAL;
    const { user, error, isLoading } = useUser();
    const router = useRouter();
    return (
        <div className={styles.adminmain} >
            <h2>
                {/* Welcome {user.name} */}
                Welcome {Email}
            </h2>
        </div>
    )
}

export default Admin