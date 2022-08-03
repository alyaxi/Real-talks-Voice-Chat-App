import React from 'react'
import styles from './Button.module.css'
const Button = ({text,icon, onClick}) => {
  return (
    
    <button onClick={onClick} className={styles.button}>
      <span>{text}</span>
      <img src={`/assests/${icon}.png`} alt={`button${icon}`} />
    </button>
    
  )
}

export default Button