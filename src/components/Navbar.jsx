import React from 'react'
import { Link, NavLink} from 'react-router-dom'
import { useState } from 'react';
import './Navbar.css'
import logo from '../assets/images/logo3.png';
import {links} from '../data'
import { FaBars } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";


const Navbar = () => {
    const [navShow, setNavShow] = useState(false);


    return (
        <nav>
            <div className="container nav__container">
                <Link to="/" className='logo' onClick={() => setNavShow(false)}>
                    <img src={logo} alt="Nav Logo"/>
                </Link>
                <ul className={`nav__links ${navShow ? 'show__nav' : 'hide__nav'}`}>
                    {
                        links.map(({name, path}, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : '' }onClick={() => setNavShow(prev => !prev)}>{name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                <button className="nav__toggle-btn" onClick={() => setNavShow(prev => !prev)}>
                    {
                        navShow ? <MdOutlineClose/> : <FaBars/>
                    }
                </button>
            </div>
        </nav>
    )
}

export default Navbar