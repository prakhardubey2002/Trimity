"use client"
import React, { useState } from 'react'
import styles from "./style.module.css"
import { useUser } from '@auth0/nextjs-auth0/client';
import { useMutation } from 'convex/react';
import { toast } from 'react-hot-toast';
import { api } from '../../../../convex/_generated/api';
const Category = ({ params }) => {
  const { user, error, isLoading } = useUser();
  const [fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [mainemail, setMainEmail] = useState(user.email)
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

  return (
    <div className={styles.sidemain} >
      pages: {params.category}
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
        <div>
          Blog
        </div>
      }

    </div>
  )
}

export default Category