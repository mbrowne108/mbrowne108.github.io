import React from 'react'
import { Link } from 'react-router-dom'
import resume from '../Images/resume.pdf'

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
                <a href={resume} target="_blank">Resume</a>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar