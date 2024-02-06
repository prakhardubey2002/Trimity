import React from 'react'
import styles from "./style.module.css"
import Link from 'next/link'
const Footer = () => {
  return (
    <div className={styles.footer} >
        Made with &#10084; by <Link target='_blank' href="https://github.com/prakhardubey2002" > Prakhar Dubey</Link>
    </div>
  )
}

export default Footer