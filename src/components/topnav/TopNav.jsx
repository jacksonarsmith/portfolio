import React from 'react';
import './topnav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri'; 
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { useState } from 'react'; 

const TopNav = () => {
    const [activeNav, setActiveNav] = useState(''); 
    return (
        <div className='topnav'>
            <a href="#" className={activeNav === '#' ? 'active' : ''}><AiOutlineHome size={56}/></a>
            <a href="#about" onClick={() => setActiveNav('#about')}><AiOutlineUser size={56}/></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')}><BiBook size={56}/></a>
            <a href="#projects" onClick={() => setActiveNav('#projects')}><AiOutlineHome size={56}/></a>
            <a href="#services" onClick={() => setActiveNav('#services')}><RiServiceLine size={56}/></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')}><BiMessageSquareDetail size={56}/></a>
            <div className='navbar__socials'>
                <a href="https://linkedin.com" target='_blank'><BsLinkedin size={56}/></a>
                <a href="https://github.com/jacksonarsmith" target='_blank'><FaGithub size={56}/></a>
            </div>
        </div>
    )
};

export default TopNav;