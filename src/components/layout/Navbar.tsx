import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, PhoneCall, Globe } from 'lucide-react';
import { Button } from '../ui/Button';

// Logo import
import logoImg from '../../../../Leading Auto Parts Manufacturer in China _ Transmitek_files/cropped-LOGO-2025-03.png';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Hide top bar and move nav to top-0 after 48px (roughly the top bar height)
      setIsScrolled(window.scrollY > 48);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    const cleanPathname = location.pathname.replace(/\/$/, '');
    const cleanLinkPath = path.replace(/\/$/, '');
    return cleanPathname === cleanLinkPath;
  };

  return (
    // Outer wrapper: fixed to viewport, full width, stacked z-layer
    <div className="fixed top-0 left-0 right-0 z-50 w-full">

      {/* ── Top Info Bar ── slides up out of view on scroll */}
      <motion.div
        initial={false}
        animate={{ height: isScrolled ? 0 : 'auto', opacity: isScrolled ? 0 : 1 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="overflow-hidden bg-brand-dark w-full"
      >
        <div className="text-[11px] text-brand-footer-text py-2 px-6 flex justify-between items-center w-full border-b border-brand-border-dark">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <PhoneCall size={12} className="text-brand-red" />
              +86-577-65166299
            </span>
            <span className="hidden sm:inline">Building 2, Dongxin Science &amp; Technology Park, Ruian, China</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Globe size={12} className="text-brand-blue" />
              EN
            </span>
            <span className="text-brand-border-dark">|</span>
            <span>IATF 16949 / ISO/IEC 17025 Certified</span>
          </div>
        </div>
      </motion.div>

      <header
        className={`w-full transition-all duration-300 ${
          isOpen || isScrolled
            ? 'bg-brand-dark border-b border-brand-border-dark py-3 shadow-lg shadow-black/30'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={logoImg}
              alt="Transmitek Logo"
              className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold transition-all duration-200 relative py-2 ${
                  isActive(link.path)
                    ? 'text-brand-red'
                    : 'text-white hover:text-brand-red'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-red"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/contact">
              <Button variant="primary" size="sm" className="uppercase tracking-wider text-xs">
                Inquire Now
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white active:text-brand-red focus:outline-none transition-colors cursor-pointer"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden bg-brand-dark border-b border-brand-border-dark absolute top-full left-0 right-0 overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-lg font-bold transition-colors py-2 border-b border-white/5 ${
                      isActive(link.path)
                        ? 'text-brand-red'
                        : 'text-white active:text-brand-red'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 flex flex-col gap-4">
                  <span className="text-xs text-brand-footer-text">
                    For technical inquiries: <br />
                    <span className="text-white font-bold">+86-577-65166299</span>
                  </span>
                  <Link to="/contact" className="w-full">
                    <Button variant="primary" size="md" className="w-full uppercase tracking-wider">
                      Request a Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};
