import React from 'react'
import '../styles/navbar.css'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <>
        <div className='navbar sticky'> 
            <p className='navBrand'>Divas Singh</p>
            <ul className='navCont'>
                <li><NavLink to="/" className="home a1"><i class="fa-solid fa-house"></i> <span className='mobile'>Home</span></NavLink></li>
                <li><NavLink to="about" className="about a1"><i class="fa-solid fa-paragraph"></i>  <span className='mobile'>About</span></NavLink></li>
                <li><NavLink to="skills" className="skills a1"><i class="fa-solid fa-list"></i>  <span className='mobile'>Skills</span></NavLink></li>
                <li><NavLink to="project" className="projects a1"><i class="fa-solid fa-file"></i>  <span className='mobile'>Project</span></NavLink></li>
                {/* <li><NavLink to="contact" className="contact a1"><i class="fa-solid fa-user"></i>  <span className='mobile'>Contact</span></NavLink></li> */}
            </ul>
        </div> 
    </>
  )
}

export default Navbar