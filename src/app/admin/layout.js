"use client"
import React from 'react'
import styles from "./style.module.css"
import Image from 'next/image'
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import InventoryIcon from '@mui/icons-material/Inventory';
import BookIcon from '@mui/icons-material/Book';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AnalyticsIcon from '@mui/icons-material/Analytics';

const Layout = ({ children }) => {
    const { user, error, isLoading } = useUser();

    return (
        <div className={styles.adminlayout} >
            <div className={styles.sidebar} >
                <div className={styles.top} >
                    <Image
                        className={styles.Profimg}
                        // src="https://images.unsplash.com/photo-1660336122128-91f7f26aa067?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        src={!isLoading ? user.picture : ""}
                        width={80}
                        height={80}
                        alt="Picture of the author"
                    />
                    {/* <br /> */}
                    <h4>{!isLoading ? user.name : ""}</h4>
                    <p>{!isLoading ? user.email : ""}</p>
                </div>

                <div className={styles.bottom} >
                    <Link href="/admin">
                        <AnalyticsIcon/>
                        Analytics
                    </Link>
                    <Link href="/admin/support">
                        <InventoryIcon/>
                        Support
                    </Link>
                    <Link href="/admin/Blog">
                        <BookIcon/>
                        Blogs
                    </Link>
                    <Link href="/admin/addBlog">
                        < AddCircleOutlineIcon />
                        Add blog
                    </Link>

                </div>
                <div className={styles.help} >
                    <Link href="/help" >
                        <LiveHelpIcon />
                        Help
                    </Link>
                </div>
            </div>

            <div >
                {children}
            </div>
        </div>
    )
}

export default Layout