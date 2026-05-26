import React from 'react';
import '../../css/Footer.css';

// SVG Icons for Contact Info
const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="ft-icon">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="ft-icon">
    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="ft-icon">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

// SVG Icons for Socials (Minimalist brand vectors for white circle wrappers)
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="ft-social-icon">
    <path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.88.72-1 1-1h2V2h-3C10.5 2 9 3.5 9 5.5V8z"/>
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="ft-social-icon">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="ft-social-icon">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="ft-social-icon">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);


const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* TOP SECTION: 4 Columns */}
        <div className="footer-top">
          
          {/* Column 1: Logo & About */}
          <div className="ft-col ft-col-about">
            <img src="/logo.png" alt="Gate X Pay" className="ft-logo" />
            <p className="ft-about-text">
              GateXPay helps businesses secure, process, and scale digital payments with advanced tokenization and unified payment infrastructure.
            </p>
          </div>

          {/* Column 2: Company Links */}
          <div className="ft-col">
            <h4 className="ft-heading">Company</h4>
            <ul className="ft-links">
              <li><a href="/#about">About Us</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Services Links */}
          <div className="ft-col">
            <h4 className="ft-heading">Services</h4>
            <ul className="ft-links">
              <li><a href="/#services">CSP</a></li>
              <li><a href="/#services">TSP</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="ft-col ft-col-contact">
            <h4 className="ft-heading">Contact Information</h4>
            <ul className="ft-contact-list">
              <li>
                <MapPinIcon />
                <span>412, Sumer Nagar, Mansarovar,<br/>Jaipur, 302020</span>
              </li>
              <li>
                <PhoneIcon />
                <span>+91 8502888838</span>
              </li>
              <li>
                <MailIcon />
                <span>info@gatecode.in</span>
              </li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="footer-divider"></div>

        {/* BOTTOM SECTION: Legal Links & Socials */}
        <div className="footer-bottom">
          <ul className="ft-legal-links">
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-and-conditions">Terms &amp; Conditions</a></li>
            <li><a href="/refund-policy">Refund Policy</a></li>
            <li><a href="/cookies-policy">Cookies Policy</a></li>
            <li><a href="/disclaimer-policy">Disclaimer Policy</a></li>
            <li><a href="/security-policy">Security Policy</a></li>
          </ul>

          <div className="ft-socials">
            <a href="#facebook" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#x" aria-label="X (Twitter)"><XIcon /></a>
            <a href="#linkedin" aria-label="LinkedIn"><LinkedInIcon /></a>
            <a href="#instagram" aria-label="Instagram"><InstagramIcon /></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
