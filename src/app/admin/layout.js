"use client"
import React from 'react'
import styles from "./style.module.css"
import Image from 'next/image'
import { useUser } from '@auth0/nextjs-auth0/client';
const Layout = ({ children }) => {
    const { user, error, isLoading } = useUser();
    return (
        <div className={styles.adminlayout} >
            <div className={styles.sidebar} >
                <div className={styles.top} >
                    <Image
                        src="https://images.unsplash.com/photo-1660336122128-91f7f26aa067?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                </div>
                <div className={styles.Bottom} >
                    dxfbdg
                </div>

            </div>
            <div >
                {children}
            </div>
        </div>
    )
}

export default Layout