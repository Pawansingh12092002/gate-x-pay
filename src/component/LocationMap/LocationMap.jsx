import React from 'react';
import styles from '../../css/LocationMap.module.css';

const LocationMap = () => {
  return (
    <section className={styles.mapSection}>
      <div className={styles.mapContainer}>
        <img 
          className={styles.mapImage}
          src="/map.png" 
          alt="GateXPay Location Map"
        />
      </div>
    </section>
  );
};

export default LocationMap;
