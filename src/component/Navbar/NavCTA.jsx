// NavCTA.jsx — "Contact Us" call-to-action button

import { NAV_CTA } from './navData';
import styles from '../../css/Navbar.module.css';

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2z" />
  </svg>
);

const NavCTA = () => (
  <a href={NAV_CTA.href} className={styles.ctaButton} aria-label={NAV_CTA.label}>
    <span className={styles.ctaIcon}>
      <PhoneIcon />
    </span>
    {NAV_CTA.label}
  </a>
);

export default NavCTA;
