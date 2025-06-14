// import React from 'react';

// const Hero = () => {
//   return (
//     <section id="home" className="hero">
//       <div className="container">
//         <h1>Hi, I'm <span>Your Name</span></h1>
//         <h2>Frontend Developer</h2>
//         <p>I build responsive web apps with React and JavaScript</p>
//         <a href="#projects" className="btn">View My Work</a>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Amit yadaav!</h1>
        <h2>Full Stack Developer</h2>
        <p>
          I create dynamic and responsive web applications using the latest technologies.
          Passionate about coding and always eager to learn new skills.</p>
        
        <div className="stats">
          <div className="stat-item">
            <div className="stat-number">72%</div>
            <div className="stat-label">B.Tech/B.E</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">70%</div>
            <div className="stat-label">Intermediate</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">60%</div>
            <div className="stat-label">Matriculation</div>
          </div>
        </div>
        
       
       
      </div>
    </div>
  );
};

export default Hero;