"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useUser } from '@auth0/nextjs-auth0/client';
import Navbar from "./Components/Navbar/Navbar";
import Link from "next/link";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import lottie from "lottie-web";
import home from "./animation/dash.json";
import React from "react";
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

export default function Home() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  const redirect = () => {
    if (user) {
      toast.success(`Welcome ${user.name}`, {
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
      router.push("/dashboard");
    } else {
      toast.success('Login first', {
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

    }

  }
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#react-logo"),
      animationData: home,
      // path: "https://lottie.host/embed/44e3fd55-f3f4-47bf-9555-6d8f8e58fa77/SY6AVbGEOW.json",
      loop: true,
      autoplay: true,
    });
  }, []);

  return (
    <main className={styles.main} >
      <div className={styles.mainsection} >

        <div className={styles.left} >
          <div className={styles.top} >
            <h2>
              Elevate Your Productivity <br /> with Trimity
            </h2>
            <br />
            <p> the ultimate companion for students seeking peak productivity and seamless task management. Elevate your academic experience as you dive into a world of focused learning, efficient scheduling, and goal achievement.</p>
            <br />
            <button onClick={redirect} >
              {/* <Link href="/dashboard" > */}
              Get Started

              {/* </Link> */}
            </button>
          </div>
          <div className={styles.bottom} >
            <h2>Our services</h2>
            <br />
            <div className={styles.cards} >
              <div className={styles.card} >
                <div className={styles.text} >
                  <TaskAltIcon />
                  <p>Task managment</p>
                </div>
                <p>
                  Effortlessly organize your tasks, assignments, and deadlines. Our intuitive interface allows you to prioritize, categorize, and stay on top of your academic responsibilities.
                </p>
              </div>
              <div className={styles.card} >
                <div className={styles.text} >
                  <TaskAltIcon />
                  <p>Pomodoro</p>
                </div>
                <p>
                  Effortlessly organize your tasks, assignments, and deadlines. Our intuitive interface allows you to prioritize, categorize, and stay on top of your academic responsibilities.
                </p>
              </div>
              <div className={styles.card} >
                <div className={styles.text} >
                  <TaskAltIcon />
                  <p>Team</p>
                </div>
                <p>
                  Effortlessly organize your tasks, assignments, and deadlines. Our intuitive interface allows you to prioritize, categorize, and stay on top of your academic responsibilities.
                </p>
              </div>
            </div>
          </div>

        </div>
        <div className={styles.right} >
          <div className={styles.rightimg} id="react-logo" ></div>
        </div>
      </div>
    </main>
  );
}
