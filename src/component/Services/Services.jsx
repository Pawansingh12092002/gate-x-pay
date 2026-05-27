// Services.jsx — Horizontal Service Cards Section

import React, { useState } from 'react';
import '../../css/Services.css';

const Services = () => {
  const [activeTab, setActiveTab] = useState('csp');
  const [cspExpanded, setCspExpanded] = useState(false);
  const [tspExpanded, setTspExpanded] = useState(false);

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
                <img
                  src="csp.webp"
                  className="gxp-service-image"
                />
              </div>

              <div className="gxp-card-content">
                <h3 className="gxp-card-heading" onClick={() => setCspExpanded(prev => !prev)} style={{cursor: 'pointer'}}>
                  Power Your Business with Smart CSP Services
                  <span className={`gxp-mobile-arrow ${cspExpanded ? 'open' : ''}`} style={{marginLeft: '8px'}}>▼</span>
                </h3>
                <p className="gxp-card-text">
                  GateXPay provides a complete CSP solution for banking, digital payment, and financial services. 
                  Businesses can offer AEPS, money transfer, bill payments, mobile recharge, Micro-ATM, Aadhaar services, 
                  PAN card services, insurance, loans, investments, e-commerce, travel booking, and e-governance 
                  solutions through one secure and scalable platform.
                </p>
                <a href="#explore-csp" className="gxp-explore-btn">
                  Explore Services <span>↗</span>
                </a>
                {cspExpanded && (
                  <ul className="gxp-service-sublist">
                    <li>AEPS Services</li>
                    <li>E-Commerce Services</li>
                    <li>Investment Services</li>
                    <li>Micro ATM Services</li>
                    <li>E-Governance Services</li>
                    <li>Aadhaar Services</li>
                    <li>Money Transfer Services</li>
                    <li>Insurance Services</li>
                    <li>Core Banking Services</li>
                    <li>Loan & Credit Services</li>
                    <li>Recharge Services</li>
                    <li>Other Value-Added Services</li>
                    <li>Bill Payment Services</li>
                    <li>Pension & Government Schemes</li>
                  </ul>
                )}
              </div>
            </article>
          )}

          {/* Card 2: TSP Solutions */}
          {activeTab === 'tsp' && (
            <article className="gxp-service-h-card">
              <div className="gxp-card-image-wrapper">
                <img
                  src="/TSP.png"
                  alt="TSP Services"
                  className="gxp-service-image"
                />
              </div>

              <div className="gxp-card-content">
                <h3 className="gxp-card-heading" onClick={() => setTspExpanded(prev => !prev)} style={{cursor: 'pointer'}}>
                  End-to-End TSP Solutions for Financial Services
                  <span className={`gxp-mobile-arrow ${tspExpanded ? 'open' : ''}`} style={{marginLeft: '8px'}}>▼</span>
                </h3>
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
                {tspExpanded && (
                  <ul className="gxp-service-sublist">
                    <li>Web & App Development</li>
                    <li>IT & Cloud Services</li>
                    <li>Business Automation</li>
                    <li>Fintech & Financial Integration</li>
                    <li>E-Commerce Solutions</li>
                    <li>Digital Marketing Services</li>
                    <li>Banking Tie-Up Services</li>
                    <li>Insurance & Investment Integration</li>
                    <li>Payment Gateway Integration</li>
                    <li>Shipping & Logistics Integration</li>
                    <li>Connected Banking Services</li>
                  </ul>
                )}
              </div>
            </article>
          )}

      </div>
    </section>
  );
};

export default Services;
