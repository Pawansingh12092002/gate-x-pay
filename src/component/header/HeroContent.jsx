// HeroContent.jsx — Left-side headline, description & CTA buttons

import { HERO_CONTENT } from './heroData';
import styles from '../../css/Hero.module.css';

const HeroContent = () => {
  const { headline, description, buttons } = HERO_CONTENT;

  return (
    <div className={styles.heroLeft}>

      {/* Headline */}
      <h1 className={styles.headline}>
        <span className={styles.headlineLine1}>{headline.line1}</span>
        <span className={styles.headlineLine2}>{headline.line2}</span>
      </h1>

      {/* Description */}
      <p className={styles.description}>{description}</p>

      {/* CTA Buttons */}
      <div className={styles.ctaGroup}>
        <a href={buttons.primary.href} className={styles.btnPrimary}>
          {buttons.primary.label}
        </a>
        <a href={buttons.secondary.href} className={styles.btnSecondary}>
          {buttons.secondary.label}
          <span className={styles.arrowIcon}>→</span>
        </a>
      </div>

    </div>
  );
};

export default HeroContent;
