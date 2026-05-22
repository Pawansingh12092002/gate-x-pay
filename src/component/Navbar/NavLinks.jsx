// NavLinks.jsx — Desktop nav links with dropdown support

import { NAV_LINKS } from './navData';
import styles from '../../css/Navbar.module.css';

const ChevronIcon = () => (
  <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const NavLinks = ({ activePath = '/' }) => (
  <ul className={styles.navLinks} role="menubar">
    {NAV_LINKS.map((link) => (
      <li key={link.id} className={styles.navItem} role="none">

        {link.hasDropdown ? (
          <>
            <button
              className={`${styles.navLink} ${activePath === link.href ? styles.active : ''}`}
              aria-haspopup="true"
              aria-expanded="false"
              role="menuitem"
            >
              {link.iconSrc && (
                <img src={link.iconSrc} alt="" className={styles.navLinkIcon} />
              )}
              {link.label}
              <ChevronIcon />
            </button>

            {/* Dropdown panel */}
            <div className={styles.dropdown} role="menu" aria-label={`${link.label} submenu`}>
              {link.dropdown.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={styles.dropdownItem}
                  role="menuitem"
                >
                  <span className={styles.dropdownIcon} aria-hidden="true">{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </div>
          </>
        ) : (
          <a
            href={link.href}
            className={`${styles.navLink} ${activePath === link.href ? styles.active : ''}`}
            role="menuitem"
          >
            {link.iconSrc && (
              <img src={link.iconSrc} alt="" className={styles.navLinkIcon} />
            )}
            {link.label}
          </a>
        )}

      </li>
    ))}
  </ul>
);

export default NavLinks;
