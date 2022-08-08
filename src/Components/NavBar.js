import React from 'react'
import { Link } from 'react-router-dom'
import resume from '../Images/resume.pdf'

function NavBar() {
  return (
    <nav className='navbar navbar-dark navbar-expand mt-4 p-5 bg-primary rounded'>
        <div className='container-fluid'>
            <h1 className='text-white'>Matt Browne</h1>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <Link className='nav-link' to='/'>About Me</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/portfolio'>Portfolio</Link>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href={resume} target="_blank">Resume</a>
                </li>
            </ul>
        </div>
        
    </nav>
  )
}

export default NavBar