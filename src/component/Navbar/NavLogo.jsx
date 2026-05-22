// NavLogo.jsx — Brand logo with SVG mark + wordmark

import { BRAND } from './navData';
import styles from '../../css/Navbar.module.css';

const NavLogo = () => (
  <a href="/" className={styles.logo} aria-label="GateXPay home">

    {/* SVG Logo Mark — matches the G/X payment icon from the screenshot */}
    <svg
      className={styles.logoMark}
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="26" cy="26" r="26" fill="#0a1628" />
      <circle cx="26" cy="26" r="25" stroke="rgba(34,170,255,0.2)" strokeWidth="1" />

      {/* G arc */}
      <path
        d="M26 10 A16 16 0 1 0 42 26 L34 26"
        stroke="url(#logoGrad1)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* X cross */}
      <path d="M20 20 L32 32 M32 20 L20 32" stroke="url(#logoGrad2)" strokeWidth="2.5" strokeLinecap="round" />

      {/* chip dots bottom-right */}
      <circle cx="38" cy="34" r="1.5" fill="#22d3ee" opacity="0.8" />
      <circle cx="42" cy="34" r="1.5" fill="#22d3ee" opacity="0.5" />
      <circle cx="38" cy="38" r="1.5" fill="#22d3ee" opacity="0.5" />

      <defs>
        <linearGradient id="logoGrad1" x1="10" y1="10" x2="42" y2="26" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#22aaff" />
          <stop offset="100%" stopColor="#00d4ff" />
        </linearGradient>
        <linearGradient id="logoGrad2" x1="20" y1="20" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.7" />
        </linearGradient>
      </defs>
    </svg>

    {/* Wordmark */}
    <div className={styles.logoCopy}>
      <span className={styles.logoName}>
        gate <span>X</span> pay
      </span>
      <span className={styles.logoTagline}>{BRAND.tagline}</span>
    </div>
  </a>
);

export default NavLogo;
