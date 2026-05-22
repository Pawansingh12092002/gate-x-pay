import React from 'react';
import '../../css/ContactForm.css';

// SVG Icons
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cf-icon">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cf-icon">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cf-icon">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const ContactForm = () => {
  return (
    <section className="cf-section" id="contact" aria-label="Contact Us Form">
      <div className="cf-container">
        
        {/* Main White Card containing everything */}
        <div className="cf-main-card">
          
          {/* Header */}
          <div className="cf-header">
            <h2>Tell Us About Your Requirements</h2>
            <p>Whether you're exploring our services or ready to get started, our team is here to support you at every step.</p>
          </div>

          <div className="cf-content-wrapper">
            
            {/* Left Side: Info Cards */}
            <div className="cf-info-column">
              
              <div className="cf-info-box">
                <div className="cf-info-title">
                  <PhoneIcon /> Contact Us
                </div>
                <div className="cf-info-text">+91-8502888838</div>
              </div>

              <div className="cf-info-box">
                <div className="cf-info-title">
                  <MailIcon /> Email
                </div>
                <div className="cf-info-text">info@gatecode.in</div>
                <div className="cf-info-text">vitin@gatecode.in</div>
              </div>

              <div className="cf-info-box">
                <div className="cf-info-title">
                  <MapPinIcon /> Address
                </div>
                <div className="cf-info-text">412, Sumer Nagar,</div>
                <div className="cf-info-text">Mansarovar, Jaipur</div>
                <div className="cf-info-text">302020</div>
              </div>

            </div>

            {/* Right Side: The Form */}
            <div className="cf-form-column">
              <form className="cf-form" onSubmit={(e) => e.preventDefault()}>
                
                <div className="cf-form-row">
                  <div className="cf-form-group">
                    <label>Full Name*</label>
                    <input type="text" placeholder="Enter Full Name" required />
                  </div>
                  <div className="cf-form-group">
                    <label>Company Name*</label>
                    <input type="text" placeholder="Enter Company Name" required />
                  </div>
                </div>

                <div className="cf-form-row">
                  <div className="cf-form-group">
                    <label>Email ID*</label>
                    <input type="email" placeholder="Enter Your Email Address" required />
                  </div>
                  <div className="cf-form-group">
                    <label>Mobile Number*</label>
                    <input type="tel" placeholder="Enter Mobile Number" required />
                  </div>
                </div>

                <div className="cf-form-group">
                  <label>Services*</label>
                  <input type="text" placeholder="Type Your Required Services" required />
                </div>

                <div className="cf-form-group">
                  <label>Message*</label>
                  <textarea rows="4" placeholder="Type Your Message" required></textarea>
                </div>

                <div className="cf-submit-wrapper">
                  <button type="submit" className="cf-submit-btn">Submit</button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
