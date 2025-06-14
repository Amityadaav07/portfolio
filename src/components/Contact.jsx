// import React from 'react';
// import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

// const Contact = () => {
//   return (
//     <section id="contact" className="contact">
//       <div className="container">
//         <h2>Get In Touch</h2>
//         <div className="contact-links">
//           <a href="mailto:you@example.com"><FaEnvelope /> Email</a>
//           <a href="https://linkedin.com/in/yourprofile"><FaLinkedin /> LinkedIn</a>
//           <a href="https://github.com/yourusername"><FaGithub /> GitHub</a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React, { useState } from 'react';
import { FiMail, FiMapPin, FiPhone, FiSend, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setTimeout(() => setSubmitSuccess(false), 3000);
      }, 1500);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p>Have a project in mind or want to collaborate? Feel free to reach out!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <FiMail />
              </div>
              <div className="info-content">
                <h3>Email</h3>
                <p>amityadaav568@gmail.com</p>
                <a href="mailto:amityadaav568@gmail.com">Send a message</a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FiMapPin />
              </div>
              <div className="info-content">
                <h3>Location</h3>
                <p>Gurgaon Haryana, India</p>
                <a
                  href="https://www.google.com/maps/@28.4297679,77.0046118,16z?entry=ttu&g_ep=EgoyMDI1MDYxMC4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on map
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FiPhone />
              </div>
              <div className="info-content">
                <h3>Phone</h3>
                <p>+91-9905906689</p>
                <a href="tel:+919905906689">Call now</a>
              </div>
            </div>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/amit-yadaav-a619a2252/" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FiLinkedin />
              </a>
              <a href="https://github.com/Amityadaav07" className="social-icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <FiGithub />
              </a>
              <a href="https://twitter.com/yourusername" className="social-icon" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <FiTwitter />
              </a>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className={errors.subject ? 'error' : ''}
                />
                {errors.subject && <span className="error-message">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  className={errors.message ? 'error' : ''}
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <FiSend /> Send Message
                  </>
                )}
              </button>

              {submitSuccess && (
                <div className="success-message">
                  Your message has been sent successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;