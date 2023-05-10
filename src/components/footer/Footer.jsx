import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Jackson</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      </div>

      <div className="footer__copyright">
        <small>&copy; Jackson Smith. All rights reserved.</small>
      </div>
    </footer>
  )
};

export default Footer;