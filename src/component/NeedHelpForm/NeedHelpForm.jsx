import React from 'react';
import styles from '../../css/NeedHelpForm.module.css';

const NeedHelpForm = () => {
  return (
    <section className={styles.needHelpSection}>
      <div className={styles.container}>
        
        {/* Left Side: Illustration */}
        <div className={styles.imageWrapper}>
          {/* Using a placeholder or best guess for the illustration image */}
          <img src="/Rectangle 327.png" alt="Need Help Illustration" />
        </div>

        {/* Right Side: Form */}
        <div className={styles.formWrapper}>
          <div className={styles.formHeader}>
            <h2>Need Help?</h2>
            <p>Fill the Form Below</p>
          </div>

          <form className={styles.helpForm} onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Enter Your Name" 
              className={styles.inputField} 
              required
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              className={styles.inputField} 
              required
            />
            <input 
              type="tel" 
              placeholder="Phone Number" 
              className={styles.inputField} 
              required
            />
            <input 
              type="text" 
              placeholder="Your Location" 
              className={styles.inputField} 
              required
            />
            
            <button type="submit" className={styles.submitBtn}>
              Request A Call Back
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default NeedHelpForm;
