import React, { useState } from 'react'
import style from '../styles/Home.module.css'

export default function About() {
    const [state, setState] = useState(false)
  return (
    <div className={style.container}>
        <h1>About Page</h1>
    </div>
  )
}
