import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
        <ul>
            <li>
                <Link to='/'>About Me</Link>
            </li>
            <li>
                <Link to='/portfolio'>Portfolio</Link>
            </li>
            <li>
                <Link to='/resume'>Resume</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar