"use client"
import React from 'react'
import styles from "./style.module.css"
import lottie from "lottie-web";
import about from "../animation/about.json"
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AppsIcon from '@mui/icons-material/Apps';
import Groups3Icon from '@mui/icons-material/Groups3';
// import React from "react";
const About = () => {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#zleb"),
      animationData: about,
      loop: true,
      autoplay: true,
    });
  }, []);
  return (
    <div className={styles.aboutmain} >
      <h2>About</h2>
      <div className={styles.top} >
        <div className={styles.topimg} id="zleb" ></div>
      </div>
      <br />
      <div className={styles.bottom} >
        <div className={styles.aboutcards} >

          <h2> <PsychologyAltIcon className={styles.icon} /> Who are we?</h2>
          <br />
          <p>

            At Trimity, we are passionate about empowering students to reach their full potential through efficient task management and productivity solutions. Founded by a team of dedicated educators and technology enthusiasts, Trimity aims to revolutionize the way students approach their academic journey.
          </p>
        </div>
        <br />
        <div className={styles.aboutcards} >

          <h2> <PsychologyIcon className={styles.icon} /> What is our mission</h2>
          <br />
          <p>

            Our mission is simple: to provide students with the tools and resources they need to excel in their studies while maintaining a healthy work-life balance. Whether it's managing deadlines, organizing study sessions, or collaborating with peers, Trimity is here to streamline the process and make academic life easier and more enjoyable.
          </p>
        </div>
        <br />
        <div className={styles.aboutcards} >

          <h2> <AppsIcon className={styles.icon} /> What we do?</h2>
          <br />
          <p>

            With a focus on user experience and innovation, we are committed to continuously improving and expanding our platform to meet the evolving needs of students worldwide. By harnessing the latest technologies and best practices in education, we strive to create a supportive and empowering environment where students can thrive academically and personally.
          </p>
        </div>
        <br />
        <div className={styles.aboutcards} >
          <h2> <Groups3Icon className={styles.icon} /> Why join us?</h2>
          <br />
          <p>

            Join us on this journey towards academic success and personal growth. Together, let's unlock the full potential of every student with Trimity.
          </p>
        </div>




      </div>


    </div>
  )
}

export default About