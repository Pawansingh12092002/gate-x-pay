// Hero.jsx — Main hero section component

import styles from '../../css/Hero.module.css';
import HeroContent from './HeroContent';
import HeroImages from './HeroImages';
import TrustBar from './TrustBar';

const Hero = () => {
  return (
    <section className={styles.hero} aria-label="Hero Section">

      {/* Main two-column row */}
      <div className={styles.heroMain}>
        <HeroContent />
        <HeroImages />
      </div>

      {/* Trust badges bar */}
      <TrustBar />

    </section>
  );
};

export default Hero;
