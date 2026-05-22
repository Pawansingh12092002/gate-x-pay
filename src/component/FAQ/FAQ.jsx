import React, { useState } from 'react';
import styles from '../../css/FAQ.module.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Q1. What services does GateXPay provide?",
      answer: "GateXPay provides secure tokenization services, scalable payment infrastructure, merchant onboarding, and advanced fintech integrations tailored to your business needs."
    },
    {
      question: "Q2. How quickly can integrations be completed?",
      answer: "Our API and SDKs are designed for rapid deployment. Most standard integrations can be completed within a few days, depending on your system architecture."
    },
    {
      question: "Q3. Does GateXPay support enterprise businesses?",
      answer: "Yes, our scalable payment infrastructure is built to handle high transaction volumes securely, making it ideal for enterprise-level businesses."
    },
    {
      question: "Q4. Are GateXPay solutions secure and compliant?",
      answer: "Absolutely. We adhere to the highest industry security standards, including PCI-DSS compliance, to ensure all transactions and data are fully protected."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.faqContainer}>
        <div className={styles.faqHeader}>
          <h2 className={styles.title}>
            Frequently <span className={styles.orangeText}>Asked Questions</span>
          </h2>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
            >
              <div 
                className={styles.faqQuestion} 
                onClick={() => toggleFAQ(index)}
              >
                <p className={styles.questionText}>{faq.question}</p>
                <div className={styles.iconWrapper}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </div>
              </div>
              <div className={styles.faqAnswer}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
