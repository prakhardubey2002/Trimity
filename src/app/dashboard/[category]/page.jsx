"use client"
import React, { useState } from 'react'
import styles from "./style.module.css"
import { useUser } from '@auth0/nextjs-auth0/client';
const Category = ({ params }) => {
  const { user, error, isLoading } = useUser();
  const [fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState();
  const submit = () => {

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

            <select name="Personality">
              <option value="volvo">Realistic</option>
              <option value="saab"> Investigative</option>
              <option value="fiat"> Social</option>
              <option value="audi">Enterprising</option>
              <option value="audi">Conventional</option>
            </select>
          </span>
          <span>

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