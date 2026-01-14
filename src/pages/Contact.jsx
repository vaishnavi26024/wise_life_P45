import React, { useEffect, useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact-section" ref={sectionRef}>
      {/* 1. Header */}
      <div className="contact-header reveal">
        <h2 className="contact-title">Contact Us</h2>
        <div className="teal-line"></div>
        <p className="contact-description">
          Wise Life — We innovate solutions for the ease of life.
        </p>
      </div>

      {/* 2. Main Form Card */}
      <div className="contact-card reveal delay-200">
        
        <div className="form-header-centered">
          <h3 className="form-title-text">Send us a message</h3>
        </div>

        <div className="grid-layout">
          {/* LEFT COLUMN: Inputs */}
          <div className="form-side">
            <form onSubmit={(e) => e.preventDefault()}>
              {['Full Name', 'Email Address', 'Phone Number', 'Address'].map((label, idx) => (
                <div 
                  key={idx} 
                  className="input-group reveal" 
                  style={{ transitionDelay: `${(idx + 3) * 100}ms` }}
                >
                  <label className="input-label">{label}</label>
                  <input type="text" className="input-field" />
                  <div className="input-highlight"></div>
                </div>
              ))}
            </form>
          </div>

          {/* RIGHT COLUMN: Message & Map */}
          <div className="info-side">
            
            {/* Message Section */}
            <div className="message-container reveal delay-400">
              <label className="input-label">Message</label>
              <textarea 
                placeholder="How can we help?" 
                className="message-area-compact"
              ></textarea>
            </div>

            {/* Location Section */}
            <div className="message-container reveal delay-500">
              {/* Using 'input-label' here ensures it looks exactly like 'Message' */}
              <label className="input-label">Location</label>
              
              <div className="map-container">
                <iframe 
                  title="Office Location" 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.56225398254041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf589780c4c3%3A0x217fe83432efd790!2s74%20DOWN%20TOWN%20By%20AURA%20Realtors!5e0!3m2!1sen!2sin!4v1705060000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <button className="submit-btn-compact reveal delay-500">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;