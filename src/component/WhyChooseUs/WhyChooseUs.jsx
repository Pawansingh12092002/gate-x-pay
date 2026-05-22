import React from 'react';
import '../../css/WhyChooseUs.css';

// SVG Icons for the cards
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="wcu-icon">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
  </svg>
);

const FlowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="wcu-icon">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
  </svg>
);

const TrustIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="wcu-icon">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
);

const SpeedIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="wcu-icon">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);

const IntegrationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="wcu-icon">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a1.5 1.5 0 01-1.5 1.5H6a1.5 1.5 0 00-1.5 1.5v0c.355 0 .676.186.959.401.29.221.634.349 1.003.349 1.036 0 1.875-1.007 1.875-2.25s-.84-2.25-1.875-2.25c-.369 0-.713.128-1.003.349-.283.215-.604.401-.959.401v0a1.5 1.5 0 01-1.5-1.5H1.5M20.25 15.75c0 .355-.186.676-.401.959-.221.29-.349.634-.349 1.003 0 1.036 1.007 1.875 2.25 1.875s2.25-.84 2.25-1.875c0-.369-.128-.713-.349-1.003-.215-.283-.401-.604-.401-.959v0a1.5 1.5 0 011.5-1.5h3.75a1.5 1.5 0 001.5-1.5v0c-.355 0-.676-.186-.959-.401-.29-.221-.634-.349-1.003-.349-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0a1.5 1.5 0 011.5 1.5v3.75z" />
  </svg>
);

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="wcu-icon">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const WhyChooseUs = () => {
  return (
    <section className="wcu-section" aria-label="Why Choose Us">
      <div className="wcu-container">
        
        {/* Header Section */}
        <div className="wcu-header">
          <h2>Why Industry <span className="wcu-highlight">Leaders Choose Us</span></h2>
          <div className="wcu-line"></div>
          <p>
            At GateXPay, we understand that modern payment ecosystems require more than just technology—they require trust, performance, and seamless operations. That's why businesses choose us as their strategic partner for secure payment infrastructure and customer-focused service solutions.
          </p>
          <p>
            Our expertise across TSP (Technology Service Provider) and CSP (Customer Service Provider) enables organizations to streamline operations, protect transactions, and deliver exceptional customer experiences at scale.
          </p>
        </div>

        {/* Features Grid */}
        <div className="wcu-grid">
          
          {/* Card 1 */}
          <div className="wcu-card">
            <div className="wcu-icon-wrapper">
              <ShieldIcon />
            </div>
            <h3 className="wcu-card-title">Enterprise-Grade Security</h3>
            <p className="wcu-card-desc">
              We help businesses safeguard sensitive payment and customer data through advanced security frameworks, tokenization, encryption, and compliance-driven systems.
            </p>
            <h4 className="wcu-card-subtitle">What You Get:</h4>
            <ul className="wcu-list">
              <li>Secure transaction infrastructure</li>
              <li>Token-based payment protection</li>
              <li>Fraud risk reduction</li>
              <li>Compliance-ready architectures</li>
              <li>Real-time monitoring & protection</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="wcu-card">
            <div className="wcu-icon-wrapper">
              <FlowIcon />
            </div>
            <h3 className="wcu-card-title">End-to-End TSP & CSP Solutions</h3>
            <p className="wcu-card-desc">
              From payment security to customer operations, GateXPay delivers complete solutions under one ecosystem—eliminating complexity and improving operational efficiency.
            </p>
            
            <h4 className="wcu-card-subtitle">TSP Solutions</h4>
            <p className="wcu-card-subdesc">Secure payment tokenization, lifecycle management, fraud prevention, and transaction security.</p>
            
            <h4 className="wcu-card-subtitle">CSP Solutions</h4>
            <p className="wcu-card-subdesc">Merchant onboarding, customer support operations, payment processing, settlement management, and workflow automation.</p>
          </div>

          {/* Card 3 */}
          <div className="wcu-card">
            <div className="wcu-icon-wrapper">
              <TrustIcon />
            </div>
            <h3 className="wcu-card-title">Trusted by Modern Businesses</h3>
            <p className="wcu-card-desc">
              Whether you are a fintech startup, enterprise, bank, or digital commerce platform, GateXPay is built to support your growth with secure and future-ready infrastructure.
            </p>
            <h4 className="wcu-card-subtitle">Industries We Support:</h4>
            <ul className="wcu-list">
              <li>FinTech Platforms</li>
              <li>Banking & Financial Services</li>
              <li>E-Commerce Businesses</li>
              <li>Digital Wallet Providers</li>
              <li>Enterprise Payment Platforms</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="wcu-card">
            <div className="wcu-icon-wrapper">
              <SpeedIcon />
            </div>
            <h3 className="wcu-card-title">High-Performance Infrastructure</h3>
            <p className="wcu-card-desc">
              Our cloud-powered infrastructure is designed to support high transaction volumes with speed, reliability, and uninterrupted performance.
            </p>
            <h4 className="wcu-card-subtitle">Key Benefits:</h4>
            <ul className="wcu-list">
              <li>Fast payment processing</li>
              <li>Scalable cloud architecture</li>
              <li>99.99% uptime reliability</li>
              <li>Low-latency transaction handling</li>
              <li>Optimized performance during peak traffic</li>
            </ul>
          </div>

          {/* Card 5 */}
          <div className="wcu-card">
            <div className="wcu-icon-wrapper">
              <IntegrationIcon />
            </div>
            <h3 className="wcu-card-title">Seamless Integration & Flexibility</h3>
            <p className="wcu-card-desc">
              Our API-first approach allows businesses to integrate quickly with existing platforms, applications, and financial systems.
            </p>
            <h4 className="wcu-card-subtitle">Integration Advantages:</h4>
            <ul className="wcu-list">
              <li>Developer-friendly APIs</li>
              <li>Faster deployment cycles</li>
              <li>Easy third-party integrations</li>
              <li>Flexible customization options</li>
              <li>Scalable for future growth</li>
            </ul>
          </div>

          {/* Card 6 */}
          <div className="wcu-card">
            <div className="wcu-icon-wrapper">
              <EyeIcon />
            </div>
            <h3 className="wcu-card-title">Real-Time Visibility & Insights</h3>
            <p className="wcu-card-desc">
              Make informed business decisions with intelligent dashboards, live reporting, and actionable analytics.
            </p>
            <h4 className="wcu-card-subtitle">Features Include:</h4>
            <ul className="wcu-list">
              <li>Transaction tracking</li>
              <li>Settlement reports</li>
              <li>Merchant activity monitoring</li>
              <li>Customer service analytics</li>
              <li>Operational performance insights</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
