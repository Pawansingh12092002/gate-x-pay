import React from 'react';
import Header from '../header/Header';
import ContactForm from '../ContactForm/ContactForm';
import FAQ from '../FAQ/FAQ';
import LocationMap from '../LocationMap/LocationMap';
import styles from '../../css/ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.contactPage}>
      <Header />
      
      <main className={styles.contactHero}>
        {/* Left Text Content */}
        <div className={styles.contactLeft}>
          <h1 className={styles.headline}>
            Get in Touch with
            <span className={styles.cyanText}>GateXPay</span>
          </h1>
          
          <p className={styles.subtitle}>
            Let's Build Secure Payment Solutions Together
          </p>
          
          <p className={styles.description}>
            Whether you're looking for secure tokenization services, scalable payment infrastructure, merchant onboarding, or fintech integrations, our team is here to help you find the right solution for your business.
          </p>
          
          <button className={styles.ctaBtn}>
            Talk to Our Experts
          </button>
        </div>

        {/* Right Images */}
        <div className={styles.contactRight}>
          <img 
            src="/Rectangle 56.png" 
            alt="Professional on phone" 
            className={styles.imgPrimary} 
          />
          <img 
            src="/66.png" 
            alt="Vintage telephone" 
            className={styles.imgSecondary} 
          />
        </div>
      </main>

      {/* Contact Form Section */}
      <ContactForm />

      {/* FAQ Section */}
      <FAQ />

      {/* Location Map Section */}
      <LocationMap />
      
    
    </div>
  );
};

export default ContactPage;
