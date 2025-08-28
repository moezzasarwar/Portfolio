import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import React, { useState } from "react";



const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='navbar'>
      <h1 className='Logo'>Moezza Sarwar</h1>
      <nav className="Menu" onClick={() => setIsOpen(!isOpen)}>
        <FaBars size={28}/>
        </nav>
        {isOpen && (
        <ul className="mobile-menu">
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
      <ul className="menu">
        
        {/* <li><Link to="/home">Home</Link></li>           {Seprate pages use these links}
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>*/}
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  )
}

export default Navbar
