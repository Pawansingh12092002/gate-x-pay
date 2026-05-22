import React from 'react';
import '../../css/CTA.css';

const CTA = () => {
  return (
    <section className="cta-section" aria-label="Contact Call to Action">
      <div className="cta-container">
        
        {/* Left Content Area */}
        <div className="cta-content">
          <h2 className="cta-heading">Looking for a Customized Solution?</h2>
          <p className="cta-text">
            Our CSP & TSP Services Are Designed To Adapt To Your Unique Business Needs.
          </p>
          <p className="cta-text">
            Connect With Our Experts To Create The Right Solution For Your Organization.
          </p>
          <a href="#contact" className="cta-btn">
            Contact Our Experts
          </a>
        </div>

        {/* Right Image Area */}
        <div className="cta-image-wrapper">
          {/* Using Rectangle 279.png from public folder based on recent uploads */}
          <img src="/Rectangle 279.png" alt="Customer Support Expert" className="cta-image" />
        </div>
        
      </div>
    </section>
  );
};

export default CTA;
