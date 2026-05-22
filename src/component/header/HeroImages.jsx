// HeroImages.jsx — Right-side image cards with floating tags

import { HERO_IMAGES } from './heroData';
import styles from '../../css/Hero.module.css';

const HeroImages = () => {
  return (
    <div className={styles.heroRight}>

      {/* Primary (larger) image */}
      <div className={styles.imageCard + ' ' + styles.imageCardPrimary}>
        <div className={styles.floatingTag}>
          <span className={styles.tagChip}>DMS</span>
          <span className={styles.tagChip}>DMS</span>
        </div>
        <img
          src={HERO_IMAGES.primary.src}
          alt={HERO_IMAGES.primary.alt}
          loading="eager"
        />
      </div>

      {/* Secondary (smaller) image */}
      <div className={styles.imageCard + ' ' + styles.imageCardSecondary}>
        <img
          src={HERO_IMAGES.secondary.src}
          alt={HERO_IMAGES.secondary.alt}
          loading="eager"
        />
      </div>

    </div>
  );
};

export default HeroImages;
