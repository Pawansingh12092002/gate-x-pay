// Navbar.jsx — Main navbar composer

import styles from '../../css/Navbar.module.css';
import NavLogo          from './NavLogo';
import NavLinks         from './NavLinks';
import NavCTA           from './NavCTA';
import HamburgerButton  from './HamburgerButton';
import MobileMenu       from './MobileMenu';
import useNavbar        from './useNavbar';

const Navbar = () => {
  const { isScrolled, isMobileOpen, activePath, toggleMobile, closeMobile } = useNavbar();

  return (
    <>
      <header
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
        role="banner"
      >
        <div className={styles.navInner}>

          {/* Brand logo */}
          <NavLogo />

          {/* Desktop links */}
          <NavLinks activePath={activePath} />

          {/* Desktop CTA */}
          <NavCTA />

          {/* Mobile hamburger */}
          <HamburgerButton isOpen={isMobileOpen} onToggle={toggleMobile} />

        </div>
      </header>

      {/* Mobile slide-down menu (outside header for stacking context) */}
      <MobileMenu
        id="mobile-nav"
        isOpen={isMobileOpen}
        activePath={activePath}
        onClose={closeMobile}
      />
    </>
  );
};

export default Navbar;
