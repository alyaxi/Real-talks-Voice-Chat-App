import React from 'react'
import styles from"./Nav.module.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className={`container ${styles.navbar}`}>
        <Link to="" >
            <img src="/assests/Logo (1).png" alt="logo" />
        </Link>
    </nav>
  )
}

export default Navbar