import React from 'react';
import '../../css/HowWeWork.css';

const HowWeWork = () => {
  const steps = [
    {
      id: 1,
      image: '/5.png',
      title: 'Understand',
      subtitle: 'Business Requirements',
    },
    {
      id: 2,
      image: '/5 (3).png',
      title: 'Plan',
      subtitle: 'Customized Solutions',
    },
    {
      id: 3,
      image: '/5 (4).png',
      title: 'Implement & Integrate',
      subtitle: 'Services',
    },
    {
      id: 4,
      image: '/5 (5).png',
      title: 'Provide Ongoing',
      subtitle: 'Support & Maintenance',
    },
  ];

  return (
    <section className="hww-section" aria-label="How We Work">
      <div className="hww-container">
        
        {/* Header */}
        <div className="hww-header">
          <h2>How <span className="hww-highlight">We Work</span></h2>
          <div className="hww-underline"></div>
        </div>

        {/* Steps Grid */}
        <div className="hww-grid">
          {steps.map((step) => (
            <div key={step.id} className="hww-card-container">
              <div className="hww-card">
                <img src={step.image} alt={step.title} className="hww-image" />
              </div>
              <div className="hww-text">
                <p className="hww-title">{step.title}</p>
                <p className="hww-subtitle">{step.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowWeWork;
