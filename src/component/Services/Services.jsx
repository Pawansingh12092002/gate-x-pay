// Services.jsx — Horizontal Service Cards Section

import React, { useState } from 'react';
import '../../css/Services.css';

// Generic placeholder image SVG based on the screenshot
const PlaceholderGraphic = () => (
  <svg viewBox="0 0 100 100" className="gxp-placeholder-svg" xmlns="http://www.w3.org/2000/svg">
    <polygon points="40,30 60,70 20,70" fill="#757575" opacity="0.8" />
    <circle cx="60" cy="60" r="15" fill="#505050" opacity="0.5" />
  </svg>
);

const Services = () => {
  const [activeTab, setActiveTab] = useState('csp');

  return (
    <section id="services" className="gxp-services-wrapper" aria-label="Our Services">
      <div className="gxp-services-container">
        
        {/* Toggle Buttons */}
        <div className="gxp-services-toggle-wrapper">
          <button 
            className={`gxp-toggle-btn ${activeTab === 'csp' ? 'active' : ''}`}
            onClick={() => setActiveTab('csp')}
          >
            CSP Services
          </button>
          <button 
            className={`gxp-toggle-btn ${activeTab === 'tsp' ? 'active' : ''}`}
            onClick={() => setActiveTab('tsp')}
          >
            TSP Services
          </button>
        </div>

        {/* Card 1: CSP Services */}
        {activeTab === 'csp' && (
          <article className="gxp-service-h-card">
            <div className="gxp-card-image-wrapper">
              {/* Replace this with an actual <img> tag if you have the asset */}
              <div className="gxp-placeholder-bg">
                <PlaceholderGraphic />
              </div>
            </div>
            
            <div className="gxp-card-content">
              <h3 className="gxp-card-heading">Power Your Business with Smart CSP Services</h3>
              <p className="gxp-card-text">
                GateXPay provides a complete CSP solution for banking, digital payment, and financial services. 
                Businesses can offer AEPS, money transfer, bill payments, mobile recharge, Micro-ATM, Aadhaar services, 
                PAN card services, insurance, loans, investments, e-commerce, travel booking, and e-governance 
                solutions through one secure and scalable platform.
              </p>
              <a href="#explore-csp" className="gxp-explore-btn">
                Explore Services <span>↗</span>
              </a>
            </div>
          </article>
        )}

        {/* Card 2: TSP Solutions */}
        {activeTab === 'tsp' && (
          <article className="gxp-service-h-card">
            <div className="gxp-card-image-wrapper">
              <div className="gxp-placeholder-bg">
                <PlaceholderGraphic />
              </div>
            </div>
            
            <div className="gxp-card-content">
              <h3 className="gxp-card-heading">End-to-End TSP Solutions for Financial Services</h3>
              <p className="gxp-card-text">
                GateXPay provides a complete TSP solution for banking, digital payments, and financial services. 
                Businesses can secure card transactions through advanced tokenization, digital wallet support, 
                recurring payment protection, real-time fraud monitoring, and PCI-compliant payment security 
                infrastructure. Our scalable and secure platform helps organizations protect sensitive payment data, 
                reduce fraud risks, and deliver trusted digital payment experiences.
              </p>
              <a href="#explore-tsp" className="gxp-explore-btn">
                Explore Services <span>↗</span>
              </a>
            </div>
          </article>
        )}

      </div>
    </section>
  );
};

export default Services;

