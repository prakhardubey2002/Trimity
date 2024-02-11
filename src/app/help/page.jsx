"use client"
import React, { useState, useEffect } from 'react'
import styles from "./style.module.css"
import support from "../animation/support"
import Lottie from 'lottie-web'
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { toast } from 'react-hot-toast'
const page = () => {
    const [fname, setFname] = useState("");
    const [Lname, setLname] = useState("");
    const [desc, setDesc] = useState("");
    const [email, setEmail] = useState("");
    const createsupport = useMutation(api.support.createsupport);
    const submit = (e) => {
        e.preventDefault();
        createsupport({
            firsttext: fname,
            lasttext: Lname,
            email: email,
            desc: desc,
        }).then(() => {
            toast.success(`Respose Recorded for ${fname}  `, {
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
            setDesc("");
            setEmail("");
        }).catch(error => {
            // Handle error
            console.error("Error submitting support:", error);
        });
    }
    useEffect(() => {
        Lottie.loadAnimation({
            container: document.querySelector("#support"),
            animationData: support,
            // path: "https://lottie.host/embed/44e3fd55-f3f4-47bf-9555-6d8f8e58fa77/SY6AVbGEOW.json",
            loop: true,
            autoplay: true,
        });
    }, []);

    return (
        <div className={styles.helpmain} >
            <div className={styles.formmain} >
                <h2>Support</h2>
                <br />
                <label htmlfor="Firstname">First Name</label>
                <input value={fname} onChange={(e) => setFname(e.target.value)} type="text" placeholder='Firstname' />
                <label htmlfor="Lastname">Last Name</label>
                <input value={Lname} onChange={(e) => setLname(e.target.value)} type="text" placeholder='Lastname' />
                <label htmlfor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' />
                <label htmlfor="Description">Description</label>
                <textarea value={desc} onChange={(e) => setDesc(e.target.value)} name="description" placeholder='Description' id="" cols="30" rows="10"></textarea>
                <br />
                <span>

                    <button onClick={submit} >
                        Submit
                    </button>
                </span>
            </div>
            <div className={styles.iconcontainer} >
                <div className={styles.supporticon} id='support' >
                </div>
            </div>
        </div>
    )
}

export default page