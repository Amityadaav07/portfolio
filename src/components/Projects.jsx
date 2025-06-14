import React, { useState } from "react";
import foodDelivery from "./assets/images/Food-Delivery.jpg";
import VirtualHarbal from "./assets/images/Garden.jpg";
import Rozerpay from "./assets/images/Razorpay.jpg"
import Repo from "./assets/images/Repo.png"
import youtube from "./assets/images/YouTube-Video-Downloader.png" 
import sales from "./assets/images/sales-dashboard.png"

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: "Food Delivery Application",
      desc: `This project involves developing a food delivery application that connects users with a variety of restaurants. The app features real-time order tracking, menu browsing, and secure payment processing. Users can create accounts, save favorite restaurants, and track their order history.`,
      tech: ["React","Node.js", "MongoDB"],
      demo: "https://demo-ecommerce.com",
      code: "https://github.com/yourname/ecommerce-app",
      image: foodDelivery,
      features: [
        "User authentication and profiles",
        "Restaurant search and filtering",
        "Real-time order tracking",
        "Secure payment processing",
        "Order history and reviews"
      ]
    },
    {
      title: "Virtual Herbal Garden",
      desc: `Virtual Herbal Garden is an educational and informative web application that allows users to explore, learn, and manage a collection of medicinal plants digitally. It serves as a virtual encyclopedia for herbs, detailing their uses, benefits, growing methods, and scientific information.`,
      tech: ["React", "Firebase Auth", "Node.js"],
      demo: "https://demo-ecommerce.com",
      code: "https://github.com/Amityadaav07/Virtual-Harbal-Garden",
      image: VirtualHarbal,
      features: [
        "Interactive herb catalog with search and filter options",
        "Detailed descriptions including botanical names, medicinal uses, and precautions",
        "Add to personal garden – manage your favorite herbs",
        "Seasonal growth recommendations and care tips",
        "Responsive UI with herbal images and categorization"
      ]
    },

        {
      title: "Youtube Video Downloader",
      desc: `YouTube Video Downloader is a web-based application that enables users to download videos from YouTube by simply pasting the video URL. It provides multiple format and resolution options for downloading.`,
      tech: ["Python", "Streamlit", "Pandas"],
      demo: "https://demo-ecommerce.com",
      code: "https://github.com/Amityadaav07/YoutubeVideoDownloader",
      image: youtube,
      features: [
        "Paste YouTube URL to fetch video info",
        "Download video in multiple formats (MP4, MP3, 360p, 720p, etc.)",
        "Fast and secure downloading with progress feedback",
        "Simple and clean UI",
        "Backend support for URL parsing and file conversion"
      ]
    },

        {
      title: "Razorpay Payment Integration",
      desc: `This project integrates Razorpay’s payment gateway into a web or mobile application to enable secure and smooth online transactions. It demonstrates the complete flow from checkout to payment success/failure.`,
      tech: ["React", "Node.js", "API", "Razorpay"],
      demo: "https://demo-ecommerce.com",
      code: "https://github.com/Amityadaav07/Razorpay_Payment_Integration",
      image: Rozerpay,
      features: [
        "Seamless Razorpay checkout form",
        "Dynamic payment amount and user detail input",
        "Payment success/failure handling with alerts or redirection",
        "Backend integration for transaction verification",
        "Test mode with dummy credentials for development"
      ]
    },

        {
      title: "Github Repo Search",
      desc: `GitHub Repo Search is a React/JavaScript application that uses GitHub’s public API to allow users to search for repositories by name, topic, or user, and view detailed repository statistics.`,
      tech: ["Flutter", "Dart", "API", "GitHub"],
      demo: "https://demo-ecommerce.com",
      code: "https://github.com/Amityadaav07/github_repo_search",
      image: Repo,
      features: [
        "Live search with GitHub API",
        "Repository details including stars, forks, language, and description",
        "Sort/filter by stars, language, or update time",
        "Responsive design with pagination",
        "Error handling for no results or API issues"
      ]
    },

        {
      title: "Sales Performance Analysis",
      desc: `Sales Performance Analysis is a dashboard-driven application that visualizes sales data to help businesses monitor performance, identify trends, and make data-driven decisions. It leverages charts, filters, and KPIs to summarize key sales insights.`,
      tech: ["Python", "SQL", "PowerBI", "NLP"],
      demo: "https://demo-ecommerce.com",
      code: "https://github.com/yourname/ecommerce-app",
      image: sales,
      features: [
        "Interactive charts for monthly/yearly sales trends",
        "Key metrics: total sales, top products, revenue growth, customer acquisition",
        "Filter by region, date, or product category",
        "Export reports in PDF/Excel",
        "Integration with backend APIs or CSV uploads for real-time data"
      ]
    },
    // ... other projects
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Here are some of the recent projects I have worked on</p>
        <div className="divider"></div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={`${project.title} screenshot`} className="project-image" />
              <h3>{project.title}</h3>
              <p className="short-desc">{project.desc.length > 100 ? `${project.desc.substring(0, 100)}...` : project.desc}</p>
              <div className="tech-used">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <button onClick={() => openModal(project)} className="btn">Details</button>
                <a href={project.demo} className="btn" target="_blank" rel="noopener noreferrer">Demo</a>
                <a href={project.code} className="btn" target="_blank" rel="noopener noreferrer">Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal/Popup */}
      {isModalOpen && selectedProject && (
        <div className="project-modal">
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}>&times;</button>
            <h2>{selectedProject.title}</h2>
            <img src={selectedProject.image} alt={`${selectedProject.title} screenshot`} className="modal-image" />
            <div className="modal-body">
              <p>{selectedProject.desc}</p>
              <div className="tech-used">
                <h4>Technologies Used:</h4>
                {selectedProject.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              {selectedProject.features && (
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {selectedProject.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="modal-links">
                <a href={selectedProject.demo} className="btn" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={selectedProject.code} className="btn" target="_blank" rel="noopener noreferrer">View Code</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;