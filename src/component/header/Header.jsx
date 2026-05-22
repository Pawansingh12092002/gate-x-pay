"use client";
// Header.jsx — Fully responsive sticky navbar

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import '../../css/Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState('home');

  const hoverTimeoutRef = React.useRef(null);

  useEffect(() => {
    if (pathname.startsWith('/blog')) {
      setActiveLink('blog');
    } else if (pathname.startsWith('/contact')) {
      setActiveLink('contact');
    } else {
      setActiveLink('home');
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  // Click-away listener to close Mega Menu when clicking outside (fallback)
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isMegaMenuOpen && !e.target.closest('.gxp-nav-item') && !e.target.closest('.gxp-mega-menu')) {
        setIsMegaMenuOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isMegaMenuOpen]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleMouseEnterServices = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeaveServices = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 150); // Snappy 150ms buffer time (reduced from 350ms)
  };

  const handleMouseEnterMenu = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeaveMenu = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 150);
  };

  const handleLinkClick = (id, href, e) => {
    if (id === 'services') {
      e.preventDefault();
      // Keep click toggle as a fallback on desktop, or do nothing
      setIsMegaMenuOpen(prev => !prev);
    } else {
      setIsMegaMenuOpen(false);
      setActiveLink(id);
      closeMobileMenu();
    }
  };

  return (
    <>
      <header className={`gxp-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="gxp-header-container">

          {/* Logo — normal flex item, no absolute positioning */}
          <a href="/" className="gxp-logo" onClick={closeMobileMenu} aria-label="Gate X Pay home">
            <img src="/logo.png" alt="Gate X Pay Technologies" className="gxp-logo-img" />
          </a>

          {/* Desktop Navigation */}
          <nav className="gxp-nav" aria-label="Main navigation">
            <ul className="gxp-nav-list">
              {[
                { id: 'home',     label: 'Home',     href: pathname === '/' ? '#home' : '/#home' },
                { id: 'services', label: 'Services',  href: pathname === '/' ? '#services' : '/#services', hasDropdown: true },
                { id: 'about',    label: 'About Us', href: pathname === '/' ? '#about' : '/#about' },
                { id: 'blog',     label: 'Blog',     href: '/blog' },
              ].map(({ id, label, href, hasDropdown }) => (
                <li 
                  key={id} 
                  className="gxp-nav-item"
                  onMouseEnter={id === 'services' ? handleMouseEnterServices : undefined}
                  onMouseLeave={id === 'services' ? handleMouseLeaveServices : undefined}
                >
                  <a
                    href={href}
                    className={`${(activeLink === id || (id === 'services' && isMegaMenuOpen)) ? 'active' : ''} ${hasDropdown ? 'gxp-has-dropdown' : ''}`}
                    onClick={(e) => handleLinkClick(id, href, e)}
                  >
                    {label}
                    {hasDropdown && (
                      <span className={`gxp-nav-arrow ${isMegaMenuOpen ? 'open' : ''}`}>
                        <svg className="gxp-caret-icon" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <a href="/contact" className="gxp-contact-btn" onClick={() => { setIsMegaMenuOpen(false); closeMobileMenu(); }}>
              <svg className="gxp-phone-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Contact Us
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className={`gxp-mobile-toggle ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
          >
            <span className="gxp-bar" />
            <span className="gxp-bar" />
            <span className="gxp-bar" />
          </button>

        </div>

        {/* Mega Menu Dropdown — Rendered inside header so position: absolute top: 100% targets the header bottom */}
        {isMegaMenuOpen && (
          <div 
            className="gxp-mega-menu"
            onMouseEnter={handleMouseEnterMenu}
            onMouseLeave={handleMouseLeaveMenu}
          >
            <div className="gxp-mega-container">
              
              {/* Section 1: CSP Services */}
              <div className="gxp-mega-section">
                <div className="gxp-mega-badge-wrapper">
                  <div className="gxp-mega-badge csp-badge">
                    <svg className="gxp-mega-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>CSP Services</span>
                    <span className="arrow-right">&gt;</span>
                  </div>
                </div>
                <div className="gxp-mega-columns">
                  <ul className="mega-col">
                    <li>PAN Card Services</li>
                    <li>Travel Services</li>
                    <li>Digital & IT Services</li>
                    <li>AEPS Services</li>
                    <li>E-Commerce Services</li>
                    <li>Investment Services</li>
                  </ul>
                  <ul className="mega-col">
                    <li>Micro ATM Services</li>
                    <li>E-Governance Services</li>
                    <li>Aadhaar Services</li>
                    <li>Money Transfer Services</li>
                    <li>Insurance Services</li>
                    <li>Core Banking Services</li>
                  </ul>
                  <ul className="mega-col">
                    <li>Loan & Credit Services</li>
                    <li>Recharge Services</li>
                    <li>Other Value-Added Services</li>
                    <li>Bill Payment Services</li>
                    <li>Pension & Government Schemes</li>
                  </ul>
                </div>
              </div>

              <div className="mega-divider"></div>

              {/* Section 2: TSP Services */}
              <div className="gxp-mega-section">
                <div className="gxp-mega-badge-wrapper">
                  <div className="gxp-mega-badge tsp-badge">
                    <svg className="gxp-mega-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.286L13 21l-2.286-6.857L5 12l5.714-2.286L13 3z" />
                    </svg>
                    <span>TSP Services</span>
                    <span className="arrow-right">&gt;</span>
                  </div>
                </div>
                <div className="gxp-mega-columns">
                  <ul className="mega-col">
                    <li>Web & App Development</li>
                    <li>IT & Cloud Services</li>
                    <li>Business Automation</li>
                    <li>Fintech & Financial Integration</li>
                  </ul>
                  <ul className="mega-col">
                    <li>E-Commerce Solutions</li>
                    <li>Digital Marketing Services</li>
                    <li>Banking Tie-Up Services</li>
                    <li>Insurance & Investment Integration</li>
                  </ul>
                  <ul className="mega-col">
                    <li>Payment Gateway Integration</li>
                    <li>Shipping & Logistics Integration</li>
                    <li>Connected Banking Services</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        )}
      </header>

      {/* Mobile overlay backdrop */}
      <div
        className={`gxp-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile slide-down menu */}
      <nav
        id="mobile-nav"
        className={`gxp-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!isMobileMenuOpen}
      >
        {[
          { id: 'home',     label: 'Home',     href: pathname === '/' ? '#home' : '/#home' },
          { id: 'services', label: 'Services', href: pathname === '/' ? '#services' : '/#services' },
          { id: 'about',    label: 'About Us', href: pathname === '/' ? '#about' : '/#about' },
          { id: 'blog',     label: 'Blog',     href: '/blog' },
        ].map(({ id, label, href }) => (
          <a
            key={id}
            href={href}
            className={`gxp-mobile-link ${activeLink === id ? 'active' : ''}`}
            onClick={(e) => handleLinkClick(id, href, e)}
          >
            {label}
          </a>
        ))}
        <div className="gxp-mobile-divider" />
        <a href="/contact" className="gxp-mobile-cta" onClick={() => { setIsMegaMenuOpen(false); closeMobileMenu(); }}>
          <svg className="gxp-phone-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          Contact Us
        </a>
      </nav>
    </>
  );
};

export default Header;
