import React from "react";
import "./Footer.css";
import { FiGithub, FiFacebook, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <a href="#top" className="footer__logo">
        Portfolio
      </a>

      <ul className="permalinks">
        <li>
          <a href="#top">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100010136431166">
          <FiFacebook />
        </a>
        <a href="https://github.com/srafsan">
          <FiGithub />
        </a>
        <a href="https://www.linkedin.com/in/syed-rafsan-raiyan-71138b227/">
          <FiLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Syed Rafsan Raiyan. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
