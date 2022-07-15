import React from 'react'
import styles from "../../styles/Home.module.css"

export default function header() {
  return (
        <nav className={styles.nav}>
            <ul className={styles.headerLinks}>
                <li className={styles.navright}><a href="">Name</a></li>
                <li><a href="">Writing</a></li>
                <li><a href="">Speaking</a></li>
                <li><a href="">Workshop</a></li>
                <li><a href="">Playing</a></li>
            </ul>
        </nav>
  )
}
