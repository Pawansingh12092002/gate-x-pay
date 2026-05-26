"use client";
// Header.jsx — Fully responsive sticky navbar

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import '../../css/Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isPoliciesOpen, setIsPoliciesOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [mobilePoliciesExpanded, setMobilePoliciesExpanded] = useState(false);
  const [mobileCspExpanded, setMobileCspExpanded] = useState(false);
  const [mobileTspExpanded, setMobileTspExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState('home');

  const hoverTimeoutRef = React.useRef(null);

  useEffect(() => {
    if (pathname.startsWith('/blog')) {
      setActiveLink('blog');
    } else if (pathname.startsWith('/contact')) {
      setActiveLink('contact');
    } else if (
      pathname.startsWith('/privacy-policy') ||
      pathname.startsWith('/terms-and-conditions') ||
      pathname.startsWith('/refund-policy') ||
      pathname.startsWith('/cookies-policy') ||
      pathname.startsWith('/disclaimer-policy') ||
      pathname.startsWith('/security-policy') ||
      pathname.startsWith('/grievance-redressal') ||
      pathname.startsWith('/vendor-disclaimer') ||
      pathname.startsWith('/prohibited-activities') ||
      pathname.startsWith('/merchant-onboarding') ||
      pathname.startsWith('/data-protection') ||
      pathname.startsWith('/aml-kyc-policy')
    ) {
      setActiveLink('policies');
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

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isMegaMenuOpen && !e.target.closest('.gxp-nav-item') && !e.target.closest('.gxp-mega-menu')) {
        setIsMegaMenuOpen(false);
      }
      if (isPoliciesOpen && !e.target.closest('.gxp-nav-item') && !e.target.closest('.gxp-mega-menu')) {
        setIsPoliciesOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isMegaMenuOpen, isPoliciesOpen]);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileServicesExpanded(false);
    setMobilePoliciesExpanded(false);
  };

  const handleMouseEnterServices = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsMegaMenuOpen(true);
    setIsPoliciesOpen(false);
  };

  const handleMouseLeaveServices = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 150);
  };

  const handleMouseEnterPolicies = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsPoliciesOpen(true);
    setIsMegaMenuOpen(false);
  };

  const handleMouseLeavePolicies = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsPoliciesOpen(false);
    }, 150);
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

  const handleMouseEnterPoliciesMenu = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsPoliciesOpen(true);
  };

  const handleMouseLeavePoliciesMenu = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsPoliciesOpen(false);
    }, 150);
  };

  const handleLinkClick = (id, href, e) => {
    if (id === 'services') {
      e.preventDefault();
      setIsMegaMenuOpen(prev => !prev);
      setIsPoliciesOpen(false);
    } else if (id === 'policies') {
      e.preventDefault();
      setIsPoliciesOpen(prev => !prev);
      setIsMegaMenuOpen(false);
    } else {
      setIsMegaMenuOpen(false);
      setIsPoliciesOpen(false);
      setActiveLink(id);
      closeMobileMenu();
    }
  };

  return (
    <>
      <header className={`gxp-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="gxp-header-container">

          {/* Logo */}
          <a href="/" className="gxp-logo" onClick={closeMobileMenu} aria-label="Gate X Pay home">
            <img src="/logo.png" alt="Gate X Pay Technologies" className="gxp-logo-img" />
          </a>

          {/* Desktop Navigation */}
          <nav className="gxp-nav" aria-label="Main navigation">
            <ul className="gxp-nav-list">
              {[
                { id: 'home',     label: 'Home',     href: pathname === '/' ? '#home' : '/#home' },
                { id: 'services', label: 'Services',  href: pathname === '/' ? '#services' : '/#services', hasDropdown: true },
                { id: 'policies', label: 'Policies',  href: '#policies', hasDropdown: true },
                { id: 'about',    label: 'About Us', href: pathname === '/' ? '#about' : '/#about' },
                { id: 'blog',     label: 'Blog',     href: '/blog' },
              ].map(({ id, label, href, hasDropdown }) => (
                <li
                  key={id}
                  className="gxp-nav-item"
                  onMouseEnter={
                    id === 'services' ? handleMouseEnterServices :
                    id === 'policies' ? handleMouseEnterPolicies : undefined
                  }
                  onMouseLeave={
                    id === 'services' ? handleMouseLeaveServices :
                    id === 'policies' ? handleMouseLeavePolicies : undefined
                  }
                >
                  <a
                    href={href}
                    className={`${(activeLink === id || (id === 'services' && isMegaMenuOpen) || (id === 'policies' && isPoliciesOpen)) ? 'active' : ''} ${hasDropdown ? 'gxp-has-dropdown' : ''}`}
                    onClick={(e) => handleLinkClick(id, href, e)}
                  >
                    {label}
                    {hasDropdown && (
                      <span className={`gxp-nav-arrow ${(id === 'services' && isMegaMenuOpen) || (id === 'policies' && isPoliciesOpen) ? 'open' : ''}`}>
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
            <a href="/contact" className="gxp-contact-btn" onClick={() => { setIsMegaMenuOpen(false); setIsPoliciesOpen(false); closeMobileMenu(); }}>
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

        {/* Desktop Mega Menu for Services */}
        {isMegaMenuOpen && (
          <div
            className="gxp-mega-menu"
            onMouseEnter={handleMouseEnterMenu}
            onMouseLeave={handleMouseLeaveMenu}
          >
            <div className="gxp-mega-container">
              {/* CSP Services Section */}
              <div className="gxp-mega-section">
                <div className="gxp-mega-badge-wrapper">
                  <div className="gxp-mega-badge">
                    <svg className="gxp-mega-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    CSP Services
                    <span className="arrow-right">→</span>
                  </div>
                </div>
                <div className="gxp-mega-columns">
                  <ul className="mega-col">
                    <li>PAN Card Services</li>
                    <li>Travel Services</li>
                    <li>Digital &amp; IT Services</li>
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
                    <li>Loan &amp; Credit Services</li>
                    <li>Recharge Services</li>
                    <li>Other Value-Added Services</li>
                    <li>Bill Payment Services</li>
                    <li>Pension &amp; Government Schemes</li>
                  </ul>
                </div>
              </div>

              <div className="mega-divider" />

              {/* TSP Services Section */}
              <div className="gxp-mega-section">
                <div className="gxp-mega-badge-wrapper">
                  <div className="gxp-mega-badge">
                    <svg className="gxp-mega-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    TSP Services
                    <span className="arrow-right">→</span>
                  </div>
                </div>
                <div className="gxp-mega-columns">
                  <ul className="mega-col">
                    <li>Web &amp; App Development</li>
                    <li>IT &amp; Cloud Services</li>
                    <li>Business Automation</li>
                    <li>Fintech &amp; Financial Integration</li>
                  </ul>
                  <ul className="mega-col">
                    <li>E-Commerce Solutions</li>
                    <li>Digital Marketing Services</li>
                    <li>Banking Tie-Up Services</li>
                    <li>Insurance &amp; Investment Integration</li>
                  </ul>
                  <ul className="mega-col">
                    <li>Payment Gateway Integration</li>
                    <li>Shipping &amp; Logistics Integration</li>
                    <li>Connected Banking Services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Mega Menu for Policies */}
        {isPoliciesOpen && (
          <div
            className="gxp-mega-menu"
            onMouseEnter={handleMouseEnterPoliciesMenu}
            onMouseLeave={handleMouseLeavePoliciesMenu}
          >
            <div className="gxp-mega-container">
              <div className="gxp-mega-section">
                <div className="gxp-mega-badge-wrapper">
                  <div className="gxp-mega-badge">
                    <svg className="gxp-mega-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Legal Policies
                    <span className="arrow-right">&gt;</span>
                  </div>
                </div>
                <div className="gxp-mega-columns two-cols">
                  <ul className="mega-col">
                    <li><a href="/privacy-policy" style={{ color: 'inherit', textDecoration: 'none' }} onClick={() => setIsPoliciesOpen(false)}>Privacy Policy</a></li>
                    <li><a href="/terms-and-conditions" style={{ color: 'inherit', textDecoration: 'none' }} onClick={() => setIsPoliciesOpen(false)}>Terms &amp; Conditions</a></li>
                    <li><a href="/refund-policy" style={{ color: 'inherit', textDecoration: 'none' }} onClick={() => setIsPoliciesOpen(false)}>Refund Policy</a></li>
                    <li><a href="/cookies-policy" style={{ color: 'inherit', textDecoration: 'none' }} onClick={() => setIsPoliciesOpen(false)}>Cookies Policy</a></li>
                    <li><a href="/disclaimer-policy" style={{ color: 'inherit', textDecoration: 'none' }} onClick={() => setIsPoliciesOpen(false)}>Disclaimer Policy</a></li>
                    <li><a href="/security-policy" style={{ color: 'inherit', textDecoration: 'none' }} onClick={() => setIsPoliciesOpen(false)}>Security Policy</a></li>
                  </ul>
                  <ul className="mega-col">
                    <li><a href="/grievance-redressal" style={{ color: 'inherit', textDecoration: 'none' }} onClick={() => setIsPoliciesOpen(false)}>Grievance Redressal</a></li>
                    <li><a href="/vendor-disclaimer" style={{ color: 'inherit', textDecoration: 'none' }} onClick={() => setIsPoliciesOpen(false)}>Vendor &amp; Third-Party Disclaimer</a></li>
                    <li><a href="/prohibited-activities" style={{ color: 'inherit', textDecoration: 'none' }} onClick={() => setIsPoliciesOpen(false)}>Prohibited Activities</a></li>
                    <li><a href="/merchant-onboarding" style={{ color: 'inherit', textDecoration: 'none' }} onClick={() => setIsPoliciesOpen(false)}>Merchant Onboarding</a></li>
                    <li><a href="/data-protection" style={{ color: 'inherit', textDecoration: 'none' }} onClick={() => setIsPoliciesOpen(false)}>Data Protection Policy</a></li>
                    <li><a href="/aml-kyc-policy" style={{ color: 'inherit', textDecoration: 'none' }} onClick={() => setIsPoliciesOpen(false)}>AML/KYC Policy</a></li>
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
          { id: 'policies', label: 'Policies', href: '#policies' },
          { id: 'about',    label: 'About Us', href: pathname === '/' ? '#about' : '/#about' },
          { id: 'blog',     label: 'Blog',     href: '/blog' },
        ].map(({ id, label, href }) => (
          <React.Fragment key={id}>
            <a
              href={href}
              className={`gxp-mobile-link ${activeLink === id ? 'active' : ''}`}
              onClick={(e) => {
                if (id === 'services') {
                  e.preventDefault();
                  setMobileServicesExpanded(prev => !prev);
                  setMobilePoliciesExpanded(false);
                } else if (id === 'policies') {
                  e.preventDefault();
                  setMobilePoliciesExpanded(prev => !prev);
                  setMobileServicesExpanded(false);
                } else {
                  handleLinkClick(id, href, e);
                }
              }}
            >
              {label}
              {(id === 'services' || id === 'policies') && (
                <span className={`gxp-mobile-arrow ${(id === 'services' ? mobileServicesExpanded : mobilePoliciesExpanded) ? 'open' : ''}`}>
                  <svg className="gxp-caret-icon" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              )}
            </a>

            {id === 'services' && mobileServicesExpanded && (
              <div className="gxp-mobile-services-dropdown open">
                <div className="gxp-mobile-services-accordion">

                  {/* CSP Services */}
                  <div className="gxp-mobile-service-group">
                    <div
                      className="gxp-mobile-service-group-title"
                      onClick={() => setMobileCspExpanded(prev => !prev)}
                    >
                      CSP Services
                      <span className={`gxp-mobile-arrow ${mobileCspExpanded ? 'open' : ''}`}>
                        <svg className="gxp-caret-icon" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </div>
                    {mobileCspExpanded && (
                      <ul className="gxp-mobile-service-list">
                        <li>PAN Card Services</li>
                        <li>Travel Services</li>
                        <li>Digital &amp; IT Services</li>
                        <li>AEPS Services</li>
                        <li>E-Commerce Services</li>
                        <li>Investment Services</li>
                        <li>Micro ATM Services</li>
                        <li>E-Governance Services</li>
                        <li>Aadhaar Services</li>
                        <li>Money Transfer Services</li>
                        <li>Insurance Services</li>
                        <li>Core Banking Services</li>
                        <li>Loan &amp; Credit Services</li>
                        <li>Recharge Services</li>
                        <li>Other Value-Added Services</li>
                        <li>Bill Payment Services</li>
                        <li>Pension &amp; Government Schemes</li>
                      </ul>
                    )}
                  </div>

                  {/* TSP Services */}
                  <div className="gxp-mobile-service-group">
                    <div
                      className="gxp-mobile-service-group-title"
                      onClick={() => setMobileTspExpanded(prev => !prev)}
                    >
                      TSP Services
                      <span className={`gxp-mobile-arrow ${mobileTspExpanded ? 'open' : ''}`}>
                        <svg className="gxp-caret-icon" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </div>
                    {mobileTspExpanded && (
                      <ul className="gxp-mobile-service-list">
                        <li>Web &amp; App Development</li>
                        <li>IT &amp; Cloud Services</li>
                        <li>Business Automation</li>
                        <li>Fintech &amp; Financial Integration</li>
                        <li>E-Commerce Solutions</li>
                        <li>Digital Marketing Services</li>
                        <li>Banking Tie-Up Services</li>
                        <li>Insurance &amp; Investment Integration</li>
                        <li>Payment Gateway Integration</li>
                        <li>Shipping &amp; Logistics Integration</li>
                        <li>Connected Banking Services</li>
                      </ul>
                    )}
                  </div>

                </div>
              </div>
            )}

            {id === 'policies' && mobilePoliciesExpanded && (
              <div className="gxp-mobile-services-dropdown open">
                <ul className="gxp-mobile-service-list" style={{ gridTemplateColumns: '1fr' }}>
                  <li><a href="/privacy-policy" style={{ color: 'inherit', textDecoration: 'none', display: 'block' }} onClick={closeMobileMenu}>Privacy Policy</a></li>
                  <li><a href="/terms-and-conditions" style={{ color: 'inherit', textDecoration: 'none', display: 'block' }} onClick={closeMobileMenu}>Terms &amp; Conditions</a></li>
                  <li><a href="/refund-policy" style={{ color: 'inherit', textDecoration: 'none', display: 'block' }} onClick={closeMobileMenu}>Refund Policy</a></li>
                  <li><a href="/cookies-policy" style={{ color: 'inherit', textDecoration: 'none', display: 'block' }} onClick={closeMobileMenu}>Cookies Policy</a></li>
                  <li><a href="/disclaimer-policy" style={{ color: 'inherit', textDecoration: 'none', display: 'block' }} onClick={closeMobileMenu}>Disclaimer Policy</a></li>
                  <li><a href="/security-policy" style={{ color: 'inherit', textDecoration: 'none', display: 'block' }} onClick={closeMobileMenu}>Security Policy</a></li>
                  <li><a href="/grievance-redressal" style={{ color: 'inherit', textDecoration: 'none', display: 'block' }} onClick={closeMobileMenu}>Grievance Redressal</a></li>
                  <li><a href="/vendor-disclaimer" style={{ color: 'inherit', textDecoration: 'none', display: 'block' }} onClick={closeMobileMenu}>Vendor &amp; Third-Party Disclaimer</a></li>
                  <li><a href="/prohibited-activities" style={{ color: 'inherit', textDecoration: 'none', display: 'block' }} onClick={closeMobileMenu}>Prohibited Activities</a></li>
                  <li><a href="/merchant-onboarding" style={{ color: 'inherit', textDecoration: 'none', display: 'block' }} onClick={closeMobileMenu}>Merchant Onboarding</a></li>
                  <li><a href="/data-protection" style={{ color: 'inherit', textDecoration: 'none', display: 'block' }} onClick={closeMobileMenu}>Data Protection Policy</a></li>
                  <li><a href="/aml-kyc-policy" style={{ color: 'inherit', textDecoration: 'none', display: 'block' }} onClick={closeMobileMenu}>AML/KYC Policy</a></li>
                </ul>
              </div>
            )}
          </React.Fragment>
        ))}

        <div className="gxp-mobile-divider" />
        <a href="/contact" className="gxp-mobile-cta" onClick={() => { setIsMegaMenuOpen(false); setIsPoliciesOpen(false); closeMobileMenu(); }}>
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

