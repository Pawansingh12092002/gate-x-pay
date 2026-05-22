// MobileMenu.jsx — Slide-down mobile nav panel

import { NAV_LINKS, NAV_CTA } from './navData';
import styles from '../../css/Navbar.module.css';

const MobileMenu = ({ isOpen, activePath = '/', onClose }) => (
  <nav
    className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}
    aria-label="Mobile navigation"
    aria-hidden={!isOpen}
  >
    {NAV_LINKS.map((link) => (
      <div key={link.id}>
        <a
          href={link.href}
          className={`${styles.mobileLink} ${activePath === link.href ? styles.active : ''}`}
          onClick={onClose}
        >
          {link.iconSrc && (
            <img src={link.iconSrc} alt="" className={styles.navLinkIcon} />
          )}
          {link.label}
          {link.hasDropdown && ' ›'}
        </a>

        {/* Mobile sub-items */}
        {link.hasDropdown && link.dropdown.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={styles.mobileLink}
            style={{ paddingLeft: 32, fontSize: 13 }}
            onClick={onClose}
          >
            <span aria-hidden="true">{item.icon}</span>
            {item.label}
          </a>
        ))}
      </div>
    ))}

    <div className={styles.mobileDivider} />

    <a href={NAV_CTA.href} className={styles.mobileCta} onClick={onClose}>
      📞 {NAV_CTA.label}
    </a>
  </nav>
);

export default MobileMenu;
