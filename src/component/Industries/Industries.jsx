import React from 'react';
import '../../css/Industries.css';

const Industries = () => {
  // Mapping the 12 exported Frame images from the public folder
  const industryCards = [
    { id: 1, src: '/Frame 10.png', alt: 'Fintech Industry' },
    { id: 2, src: '/Frame 11.png', alt: 'IT & Software' },
    { id: 3, src: '/Frame 12.png', alt: 'Banking' },
    { id: 4, src: '/Frame 13.png', alt: 'Retail' },
    { id: 5, src: '/Frame 14.png', alt: 'E-Commerce' },
    { id: 6, src: '/Frame 15.png', alt: 'Telecom' },
    { id: 7, src: '/Frame 17.png', alt: 'Insurance' },
    { id: 8, src: '/Frame 18.png', alt: 'Education' },
    { id: 9, src: '/Frame 19.png', alt: 'Startups & SMEs' },
    { id: 10, src: '/Frame 20.png', alt: 'Travel & Tourism' },
    { id: 11, src: '/Frame 21.png', alt: 'Real Estate' },
    { id: 12, src: '/Frame 22.png', alt: 'Healthcare' },
  ];

  return (
    <section className="industries-section" aria-label="Industries We Serve">
      <div className="industries-container">
        
        {/* Header Section */}
        <div className="industries-header">
          <h2>Tailored Solutions for <span className="industries-highlight">Every Industry</span></h2>
          <p className="industries-subtitle">
            Delivering Customized CSP & TSP Solutions Designed To Meet The Unique Needs Of Every Business Sector
          </p>
        </div>

        {/* 3x4 Grid of Cards */}
        <div className="industries-grid">
          {industryCards.map((card) => (
            <div key={card.id} className="industry-card">
              <img src={card.src} alt={card.alt} className="industry-img" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Industries;
