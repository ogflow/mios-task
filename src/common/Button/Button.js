import React from 'react'
import './Button.scss'

const Button = ({ title, type = 'filled', width = 300 }) => (
  <button 
    className={
    `button button-${type}`
    }
    style={{ width: width }}
  >
    {title}
  </button>
)

export default Button