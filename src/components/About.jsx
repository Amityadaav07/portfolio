import React, { useState } from 'react';
import Avatar from './assets/images/Avatar.jpg'; // Replace with your avatar image path

const About = () => {
  const [activeTab, setActiveTab] = useState('about');

  const user = {
    name: "Amit yadaav",
    title: "Android developer & Frontend Developer",
    avatar: Avatar,
    summary: "Motivated and detail-oriented Full Stack Developer with a solid foundation in front-end and back-end development technologies. Proficient in creating dynamic, responsive web applications using HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB. Strong understanding of RESTful APIs, Git/GitHub, and Agile development practices. Eager to contribute to collaborative teams and learn new technologies. Built multiple academic and personal projects, including e-commerce platforms and data-driven dashboards, demonstrating both problem-solving and practical coding skills. Passionate about delivering clean code, seamless user experiences, and scalable solutions.",
    skills: [
      { name: "React", level: 90 },
      { name: "React Native", level: 80 },
      { name: "JavaScript", level: 95 },
      { name: "HTML/CSS", level: 90 },
      { name: "API Development", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "MongoDB", level: 95 },
      { name: "CSS/SCSS", level: 85 },
      { name: "Git/GitHub", level: 90 },
      { name: "Agile Development", level: 90 },
      { name: "Data Visualization", level: 80 },
      { name: "Responsive Design", level: 90 },
      { name: "Java/Python/C++", level: 80 },
      { name: "Problem Solving", level: 95 },
      { name: "Team Collaboration", level: 90 }
       
      // Add more skills as needed
    ],
    stats: [
      // { value: "12+", label: "Projects" },
      // { value: "1", label: "Years Exp" },
      // { value: "2+", label: "Clients" }
    ]
  };

  return (
    <div className="about-container">
      <div className="profile-card">
        <div className="avatar-container">
          <img src={user.avatar} alt={user.name} className="avatar" />
          <div className="status-indicator" />
        </div>
        
        <div className="profile-info">
          <h2 className="name">{user.name}</h2>
          <p className="title">{user.title}</p>
          
          <div className="stats-container">
            {user.stats.map((stat, index) => (
              <div className="stat-item" key={index}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="content-container">
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => setActiveTab('about')}
          >
            About
          </button>
          <button 
            className={`tab ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            Skills
          </button>
        </div>
        
        <div className="tab-content">
          {activeTab === 'about' ? (
            <div className="about-content">
              <h3 className="section-title">Profile Summary</h3>
              <p className="summary-text">{user.summary}</p>
              
              {/* <h3 className="section-title">Experience</h3>
              <div className="experience-item">
                <h4 className="experience-title">Lead UX Designer</h4>
                <p className="experience-company">TechCorp Inc. • 2020 - Present</p>
                <p className="experience-description">
                  Led a team of 5 designers to create innovative digital experiences for enterprise clients.
                </p>
              </div>
              
              <div className="experience-item">
                <h4 className="experience-title">UI Designer</h4>
                <p className="experience-company">Creative Studio • 2016 - 2020</p>
                <p className="experience-description">
                  Designed web and mobile interfaces for various clients across multiple industries.
                </p>
              </div> */}
            </div>
          ) : (
            <div className="skills-content">
              {user.skills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-bar">
                    <div 
                      className="skill-level" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="skill-percentage">{skill.level}%</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;