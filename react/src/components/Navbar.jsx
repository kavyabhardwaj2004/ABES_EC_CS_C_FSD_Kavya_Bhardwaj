import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div id="navbar">
        
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Sign Up</a></li>
        </ul>
    </div>
  )
}

export default Navbar