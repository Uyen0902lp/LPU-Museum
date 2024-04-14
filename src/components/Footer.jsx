import React from 'react'
import { Link } from 'react-router-dom'
import logo3 from '../assets/images/logo3.png'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { PiPhoneDisconnect } from "react-icons/pi";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import './footer.css'


const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article className='footer__left'>
                <div>
                    <Link to='/' className='logo3'>
                        <img src={logo3} alt="Logo hihi" />
                    </Link>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Aut dolorem dicta, corrupti asperiores accusantium ut.
                    </p>
                </div>
                
                <h4>Follow us</h4>
                <div className="footer__socials">
                    <a href="https://www.facebook.com/" target='_blank' rel='noreferrer noopener'>
                    <FaFacebook/>
                    </a>
                    <a href="https://www.instagram.com/" target='_blank' rel='noreferrer noopener'>
                    <FaInstagram/>   
                    </a>
                    <a href="https://twitter.com/" target='_blank' rel='noreferrer noopener'>
                    <FaXTwitter/>   
                    </a>
                    <a href="https://www.youtube.com/" target='_blank' rel='noreferrer noopener'>
                    <FaYoutube />
                    </a>
                </div>
                
            </article>
            <div className="footer__right-container">
                <article className='footer__right'>
                    <h4>Contact</h4>
                    <p><IoHomeOutline /> 1000 Crown Avenue, New York, NY 10000</p>
                    <p><PiPhoneDisconnect /> Phone: 012-345-6789</p>
                    <p><MdOutlineMailOutline /> lupmuseum@gmail.com</p>
                    <p><AiOutlineGlobal /> https://lpumuseum.com</p>
                </article>
                <article className='footer__right'>
                    <h4>Permalinks</h4>
                    <Link to='/visit'>Visit</Link>
                    <Link to='/ticket'>Ticket</Link>
                    <Link to='/art'>Art</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                </article>
                <article className='footer__right'>
                    <h4>Get In Touch</h4>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/s'>Support</Link>
                    <Link to='/s'>Term and Privacy</Link>
                </article>
            </div>
        </div>
        <div className="footer__copyright">
            <small>©2024 LPU Museum. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer