// import React, { useState } from 'react';
// import { FaBriefcase, FaBars, FaTimes } from 'react-icons/fa';

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <div className="logo">
//           <FaBriefcase className="logo-icon" />
//           <span className="logo-text">Amit<span> yadaav</span></span>
//         </div>

//         <div className={`nav-links ${isMobileMenuOpen ? 'show' : ''}`}>
//           <a href="/" className="active">Home</a>
//           <a href="/jobs">Project</a>
//           <a href="/Companies">About</a>
//           <a href="/Resources">Contact</a>
//         </div>

//         <div className="nav-buttons">
//           <button className="btn btn-post">Resume</button>
//         </div>

//         <div className="mobile-toggle" onClick={toggleMobileMenu}>
//           {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { FaBriefcase, FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import resumePDF from './Amit_kumar.pdf'; // Import your resume PDF





const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  const downloadResume = () => {
    // Create a temporary anchor tag to trigger download
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Amit_yadaav_Resume.pdf'; // Set the filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <FaBriefcase className="logo-icon" /> 
          <span className="logo-text">Amit<span> yadaav</span></span>
        </div>

        <div className={`nav-links ${isMobileMenuOpen ? 'show' : ''}`}>
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
        </div>

        <div className="nav-buttons">
          <button className="btn btn-post" onClick={downloadResume}>
            <FaDownload className="download-icon" /> Resume
          </button>
        </div>

        <div className="mobile-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;