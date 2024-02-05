"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Components/Navbar/Navbar";
import Link from "next/link";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import lottie from "lottie-web";
import home from "./animation/dash.json";
import React from "react";
export default function Home() {
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
            <button>
              Get Started
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
