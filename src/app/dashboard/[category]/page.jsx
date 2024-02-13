import React from 'react'
import styles from "./style.module.css"
const Category = ({params}) => {
  return (
    <div className={styles.sidemain} >pages: {params.category}</div>
  )
}

export default Category