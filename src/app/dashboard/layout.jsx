"use client"
import React, { useEffect } from 'react'
import styles from './style.module.css'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import HomeIcon from '@mui/icons-material/Home';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FeedIcon from '@mui/icons-material/Feed';
import PersonIcon from '@mui/icons-material/Person';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import ChatIcon from '@mui/icons-material/Chat';
const Layout = ({ children }) => {
    const router = useRouter();
    const { user, error, isLoading } = useUser();
    // useEffect(() => {
    //     if (!isLoading) {
    //         if (!user) {
    //             toast.error(`Login first`, {
    //                 style: {
    //                     border: '1px solid #713200',
    //                     padding: '16px',
    //                     color: '#fff',
    //                     background: 'rgba(255, 255, 255, 0.1)',
    //                     backdropFilter: 'blur(10px)',
    //                     borderRadius: '2rem',
    //                     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05)',
    //                     transition: '0.2s all ease-in-out',
    //                 },
    //                 iconTheme: {
    //                     primary: '#713200',
    //                     secondary: '#FFFAEE',
    //                 },
    //             });
    //             router.push("/");
    //         }
    //     }


    // }, [user])

    return (
        <div className={styles.main} >
            <div className={styles.sidebaritems} >
                <Link href="/dashboard" className={styles.item}>
                    {/* Foldername/categoryname ,category name can be obtained in slug layout using params property */}
                    <span><HomeIcon className={styles.icon} /></span><span className={styles.title} >Home </span>
                </Link>
                <Link href="/dashboard/Pomodoro" className={styles.item}>
                    {/* Foldername/categoryname ,category name can be obtained in slug layout using params property */}
                    <span><AccessTimeIcon className={styles.icon} /></span><span className={styles.title} >Pomodoro</span>
                </Link>
                <Link href="/dashboard/Task" className={styles.item}>
                    <span><AssignmentIcon className={styles.icon} /></span><span className={styles.title} >Task</span>
                </Link>
                <Link href="/dashboard/Blogs" className={styles.item}>
                    <span><FeedIcon className={styles.icon} /></span><span className={styles.title} >Blogs</span>
                </Link>
                <Link href="/dashboard/profile" className={styles.item}>
                    <span><PersonIcon className={styles.icon} /></span><span className={styles.title} >Profile</span>
                </Link>
                <Link href="/dashboard/chatbot" className={styles.item}>
                    <span><ChatIcon className={styles.icon} /></span><span className={styles.title} >ChatBot</span>
                </Link>

                <Link href="/help" className={styles.item}>
                    <span><HelpCenterIcon className={styles.icon} /></span><span className={styles.title} >Support</span>
                </Link>
            </div>
            {children}
        </div>
    )
}

export default Layout