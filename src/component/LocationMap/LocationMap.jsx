import React, { useState, useEffect } from 'react';
import styles from '../../css/LocationMap.module.css';

const LocationMap = () => {
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        () => setError('Location access denied')
      );
    } else {
      setError('Geolocation not supported');
    }
  }, []);

  const mapSrc = coords
    ? `https://www.google.com/maps?q=${coords.lat},${coords.lng}&output=embed`
    : '/map.png';

  return (
    <section className={styles.mapSection}>
      <div className={styles.mapContainer}>
        {error && <p className={styles.error}>{error}</p>}
        <iframe
          className={styles.mapIframe}
          src={mapSrc}
          title="Live Location Map"
          loading="lazy"
          style={{ border: 0 }}
          allowFullScreen
        />
      </div>
    </section>
  );
};

export default LocationMap;
