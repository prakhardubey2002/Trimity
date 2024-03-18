'use client'
import React, { Suspense } from 'react' // Import Suspense
import styles from "./style.module.css"
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

const Blog = () => {
  const searchParams = useSearchParams()
  const getData = searchParams.get('data');
  const data = JSON.parse(getData);
  console.log(data)
  return (
    <div className={styles.main} >
      <Suspense fallback={<div>Loading...</div>}> {/* Add Suspense */}
        <div className={styles.mainblog} >
          <Link className={styles.animated} href="/dashboard/Blogs" >
            Go Back
          </Link>
          <h2>{data?.Title}</h2>
          <h3>{data?.Subtitle}</h3>
          <br />
          <span>
            {data?.Tag}
          </span>
          <br />
          {/* <p>Date: {new Date(data?._creationTime).toLocaleDateString()}</p> */}
          <div className={styles.imgContainer} >
            <img src={data?.Image} alt="" />
          </div>
          <br />
          <p>
            {data?.Desc}
          </p>
          <br />
        </div>
      </Suspense>
    </div>
  )
}

export default Blog
