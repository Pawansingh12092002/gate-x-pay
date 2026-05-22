// src/component/ClickOverlay/ClickOverlay.jsx
import React, { useState, useEffect } from 'react';
import styles from '../../css/ClickOverlay.module.css';

const ClickOverlay = () => {
  const [visible, setVisible] = useState(false);

  // Listen for anchor clicks and show overlay before navigation
  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || href.startsWith('http')) return;
      e.preventDefault();
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
        // Change hash for navigation
        window.location.hash = href;
      }, 1000);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return <div className={`${styles.overlay} ${visible ? styles.visible : ''}`} />;
};

export default ClickOverlay;
