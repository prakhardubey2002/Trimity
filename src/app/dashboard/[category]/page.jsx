"use client"
import React, { useEffect, useState } from 'react'
import styles from "./style.module.css"
import { useUser } from '@auth0/nextjs-auth0/client';
import { useMutation, useQuery } from 'convex/react';
import { toast } from 'react-hot-toast';
import { api } from '../../../../convex/_generated/api';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SendIcon from '@mui/icons-material/Send';
import Lottie from 'lottie-web';
import Pomodoro from "../animation/Pomodoro"
const Category = ({ params }) => {
  useEffect(() => {
    Lottie.loadAnimation({
      container: document.querySelector("#timer-animation"),
      animationData: Pomodoro,
      // path: "https://lottie.host/embed/44e3fd55-f3f4-47bf-9555-6d8f8e58fa77/SY6AVbGEOW.json",
      loop: true,
      autoplay: true,
    });
  }, []);

  const { user, error, isLoading } = useUser();
  const BlogsData = useQuery(api.blog.CollectBlog);

  const [content, setContent] = useState(["Hi how can I help you?"])
  const [message, setMessage] = useState("");

  const handelSend = async () => {
    if (!message) {
      return
    }
    const tempMsg = message
    setMessage("");
    setContent([...content, tempMsg]);
    const response = await fetch("/api/openai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ tempMsg }),
    });

    const data = await response.json();
    const { output } = data;
    setContent([...content, tempMsg, output]);
  }

  const [fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [mainemail, setMainEmail] = useState(user?.email);
  const [email, setEmail] = useState("")
  const [bio, setBio] = useState("");
  const [gender, setGender] = useState("");
  const [Personality, setPersonality] = useState("");
  const [Disorder, seTDisorder] = useState("");
  const createProfile = useMutation(api.profile.createProfile);

  const submit = (e) => {
    e.preventDefault();
    createProfile({
      Fname: fname,
      Lname: Lname,
      Mainemail: mainemail,
      Aemail: email,
      gender: gender,
      Desc: bio,
      Personality: Personality,
      Disorder: Disorder,
    }).then(() => {
      toast.success(`Profile added`, {
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
      setFname("");
      setLname("");
      setEmail("");
      setBio("");
      setGender("");
      setPersonality("");
    }).catch(error => {
      console.error("Error submitting blog:", error);
      toast.error(`Error adding blog: ${error.message}`);
    });

  }
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedTime, setSelectedTime] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, timer]);

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleTimerSelection = (time) => {
    setTimer(time * 60);
    setSelectedTime(time);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  return (
    <div className={styles.sidemain} >
      {/* pages: {params.category} */}
      {
        params.category === "profile" &&
        <div className={styles.formmain} >
          {/* <h2>Support</h2> */}
          <br />
          <label htmlfor="Firstname">First Name</label>
          <input value={fname} onChange={(e) => setFname(e.target.value)} type="text" placeholder='Firstname' />
          <label htmlfor="Lastname">Last Name</label>
          <input value={Lname} onChange={(e) => setLname(e.target.value)} type="text" placeholder='Lastname' />
          <label htmlfor="email">Alternate Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' />
          <label htmlfor="gender">Gender</label>
          <input value={gender} onChange={(e) => setGender(e.target.value)} type="email" placeholder='Male/female/prefer not to say' />
          <label htmlfor="Description">Description</label>
          <textarea value={bio} onChange={(e) => setBio(e.target.value)} name="description" placeholder='Description' id="" cols="30" rows="5"></textarea>
          <br />
          <label htmlFor="Personality">Personality</label>
          <span>

            <select value={Personality} onChange={(e) => setPersonality(e.target.value)} name="Personality">
              <option value="Realistic">Realistic</option>
              <option value="Investigative"> Investigative</option>
              <option value="Social"> Social</option>
              <option value="Enterprising">Enterprising</option>
            </select>
          </span>
          <br />
          <label htmlFor="Disorder">Type of neurodevelopmental disorders</label>
          <span>
            <select value={Disorder} onChange={(e) => seTDisorder(e.target.value)} name="Disorder">
              <option value="ADHD">ADHD</option>
              <option value="AUTISM"> AUTISM</option>
              <option value="PTSD"> Post-traumatic stress disorder</option>
              <option value="Schizophrenia">Schizophrenia</option>
            </select>
          </span>
          <span>
            <br />
            <button onClick={submit} >
              Submit
            </button>
          </span>
        </div>
      }
      {
        params.category === "Blogs" &&
        <div className={styles.blogcontainer} >
          {
            BlogsData?.map((blogs, index) => (
              <div key={index} className={styles.blogcard} >
                <div className={styles.imgcontainer} >
                  <img src={blogs.Image} alt="" />
                </div>
                <p><span>{blogs.Tag}</span></p>
                {/* <br /> */}
                <h4>{blogs.Title}</h4>
                <p>{blogs.Subtitle.substring(0, 40)}...</p>
                <p>Date : {new Date(blogs._creationTime).toLocaleDateString()}</p>
                {/* <br /> */}

              </div>
            ))
          }
        </div>
      }
      {
        params.category === "Pomodoro" &&
        <div className={styles.pomodoromain} >
          <h1>Pomodoro App</h1>
          <div className={styles.lottietimer} >
          <div id='timer-animation' >
          </ div>
          </div>
          <div classname={styles.buttonrow} >
            <button onClick={() => handleTimerSelection(15)}>15 minutes</button>
            <button onClick={() => handleTimerSelection(25)}>25 minutes</button>
            <button onClick={() => handleTimerSelection(45)}>45 minutes</button>
          </div>
          <div>
            <p>{formatTime(timer)}</p>
            <button onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
          </div>
          <p>Selected Time: {selectedTime} minutes</p>
        </div>
      }
      {
        params.category === "chatbot" &&
        <div className={styles.mainchatbotContainer} >
          <div className={styles.content}>
            {
              content?.map((item, index) => {
                return (
                  <p key={index}> <SupportAgentIcon className={styles.chaticon} /> {item}</p>
                )
              })
            }
          </div>
          <div className={styles.inpurContainer}>
            <input type="text" onChange={(e) => setMessage(e.target.value)} value={message} placeholder="Explain your problem" />
            <button onClick={handelSend}>
              Send
              <SendIcon className={styles.icon} />
            </button>
          </div>
        </div>

      }

    </div>
  )
}

export default Category