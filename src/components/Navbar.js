import React, { useState } from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'

import './Navbar.css';

const Navbar = () => {
  return (
    <div className= 'Navbar'>
        <div className='container'>
            <h1><span><BsFillHouseFill />Real </span> Estate </h1>
            <button className='btn'> Sign In </button>
            <ul className='nav-menu'>
                <li> <a href='#'></a>Home </li>
                <li> <a href='#'></a>Search</li>
                <li> <a href='#'></a>About</li>
                <li> <a href='#'></a>Contact</li>
            </ul>
            <div className='hamburger'>
                <HiOutlineMenuAlt4/>
            </div>
        </div>
    </div>
  )
}

export default Navbar