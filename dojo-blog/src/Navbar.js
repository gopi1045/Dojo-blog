import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
        <h1>DOJO BLOG</h1>
        <div className="links">
            <a href="/">Home</a>
            <a href="/create"  style={{
                color:'white',
                backgroundColor: '#f1356d',
                borderRadius:'8px'
            }}>New Blog</a>
        </div>
    </nav>
  )
}

export default Navbar