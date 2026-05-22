// useNavbar.js — Custom hook for navbar scroll + mobile menu state

import { useState, useEffect, useCallback } from 'react';

const useNavbar = () => {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [isMobileOpen, setIsMobileOpen]   = useState(false);
  const [activePath, setActivePath]       = useState('/');

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set active path from window.location
  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) setIsMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMobileOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const toggleMobile   = useCallback(() => setIsMobileOpen((prev) => !prev), []);
  const closeMobile    = useCallback(() => setIsMobileOpen(false), []);

  return { isScrolled, isMobileOpen, activePath, toggleMobile, closeMobile };
};

export default useNavbar;
