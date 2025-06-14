import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import Hero from './Hero';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-about">
            <h3 className="footer-logo">Amit<span>yadaav</span></h3>
            <p className="footer-about-text">
              We create beautiful, functional websites that help businesses grow and succeed in the digital world.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="GitHub"><FaGithub /></a>
            </div>
          </div>

          <div className="footer-links">
            <h3 className="footer-title">Quick Links</h3>
            <ul>
              <li><a href={Hero}>Home</a></li>
              <li><a href={About}>About</a></li>

              <li><a href={Hero}>Blog</a></li>
              <li><a href={Contact}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3 className="footer-title">Services</h3>
            <ul>
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Data Visualization</a></li>
              <li><a href="#">App Development</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="footer-title">Contact Us</h3>
            <ul className="footer-contact-info">
              <li>
                <FiMapPin />
                <span>Gurgaon,Haryana. India</span>
              </li>
              <li>
                <FiMail />
                <span>amityadaav568@gmail.com</span>
              </li>
              <li>
                <FiPhone />
                <span>+91-9905906689</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} Amit yadaav. All Rights Reserved.
          </div>
          <div className="footer-legal">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/cookie-policy">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;