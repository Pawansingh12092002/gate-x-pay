// HamburgerButton.jsx — Animated ☰ / ✕ toggle for mobile

import styles from '../../css/Navbar.module.css';

const HamburgerButton = ({ isOpen, onToggle }) => (
  <button
    className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
    onClick={onToggle}
    aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
    aria-expanded={isOpen}
    aria-controls="mobile-nav"
  >
    <span className={styles.bar} />
    <span className={styles.bar} />
    <span className={styles.bar} />
  </button>
);

export default HamburgerButton;
