"use client";
import React, { useState } from 'react';
import styles from "./style.module.css";
import { useMutation, useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import { toast } from 'react-hot-toast';
import Link from 'next/link';

const Admincategory = ({ params }) => {
  const supportRequests = useQuery(api.support.getsupport);
  const CreateBlog = useMutation(api.blog.createBlog);
  const [blogdata, setBlogdata] = useState({
    title: "",
    subtitle: "",
    thumbnail: "",
    img: "",
    desc: "",
  });

  const submit = (e) => {
    e.preventDefault();

    CreateBlog({
      title: blogdata.title,
      subtitle: blogdata.subtitle,
      thumbnail: blogdata.thumbnail,
      img: blogdata.img,
      desc: blogdata.desc,
    }).then(() => {
      toast.success(`Blog added`, {
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
      setBlogdata({ ...blogdata, title: "" });
    }).catch(error => {
      console.error("Error submitting blog:", error);
      toast.error(`Error adding blog: ${error.message}`);
    });
  };

  return (
    <div>
      {params.admincategory === "support" && (
        <div className={styles.main}>
          <h2>All Support Queries</h2>
          <div className={styles.supportquesry}>
            {supportRequests?.map((data, index) => (
              <div className={styles.SupportPoints} key={data._id}>
                <h4>{index + 1}. Name: {data.FirstName}</h4>
                <p>Date: {new Date(data._creationTime).toLocaleDateString()}</p>
                <p>Desc: {data.Description}</p>
                <button>
                  <Link href={"mailto:" + data.Email}>
                    Reply To mail
                  </Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {params.admincategory === "Blog" && (
        <div className={styles.main}>
          sadvfblmnkg
        </div>
      )}

      {params.admincategory === "addBlog" && (
        <div className={styles.main}>
          <h2>Add Blog</h2>
          <div className={styles.Blogform}>
            <br />
            <label htmlFor="Title">Title</label>
            <input
              value={blogdata.title}
              onChange={(e) => setBlogdata({ ...blogdata, title: e.target.value })}
              type="text"
              placeholder="Title"
            />
            <label htmlFor="Subtitle">Subtitle</label>
            <input
              value={blogdata.subtitle}
              onChange={(e) => setBlogdata({ ...blogdata, subtitle: e.target.value })}
              type="text"
              placeholder="Subtitle"
            />
            <label htmlFor="Thumbnail">Thumbnail</label>
            <input
              value={blogdata.thumbnail}
              onChange={(e) => setBlogdata({ ...blogdata, thumbnail: e.target.value })}
              type="url"
              placeholder="Thumbnail URL"
            />
            <label htmlFor="Image">Image</label>
            <input
              value={blogdata.img}
              onChange={(e) => setBlogdata({ ...blogdata, img: e.target.value })}
              type="url"
              placeholder="Image URL"
            />
            <label htmlFor="Description">Description</label>
            <textarea
              value={blogdata.desc}
              onChange={(e) => setBlogdata({ ...blogdata, desc: e.target.value })}
              name="description"
              placeholder="Description"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <br />
            <button onClick={submit}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admincategory;
