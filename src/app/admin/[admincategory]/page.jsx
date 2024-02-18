"use client"
import React from 'react'
import styles from "./style.module.css"
import { useQuery } from 'convex/react'
import { api } from '../../../../convex/_generated/api'
const Admincategory = ({ params }) => {
  const supportRequests = useQuery(api.support.getsupport);
  return (
    <div>
    {
      params.admincategory==="support" && <div className={styles.main} >
        <h2>All Support Queries</h2>
        <div className={styles.supportquesry}>
          {
            supportRequests?.map((data)=>(
              <div key={data._id}>
                  {data.Email}
                </div>
            ))
          }
        </div>
      </div>
    }
    
    
    
    
    </div>
  )
}

export default Admincategory