'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  MessageCircle, 
  Menu, 
  X, 
  Home, 
  Layers, 
  Info, 
  PhoneCall, 
  Instagram, 
  MapPin 
} from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar({ onOpenSearch, isMobileOpen, onOpenMenu, onCloseMenu }) {
  const [scrolled, setScrolled] = useState(false);
  const [internalMobileOpen, setInternalMobileOpen] = useState(false);
  const pathname = usePathname();

  const drawerOpen = isMobileOpen !== undefined ? isMobileOpen : internalMobileOpen;
  const setDrawerOpen = (val) => {
    if (val) {
      if (onOpenMenu) onOpenMenu();
      else setInternalMobileOpen(true);
    } else {
      if (onCloseMenu) onCloseMenu();
      else setInternalMobileOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Collections', path: '/collections' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const drawerItems = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Collections', path: '/collections', icon: Layers },
    { label: 'About', path: '/about', icon: Info },
    { label: 'Contact', path: '/contact', icon: PhoneCall },
    { label: 'Instagram', path: 'https://www.instagram.com/sakhimangalore', external: true, icon: Instagram },
    { label: 'WhatsApp', path: 'https://wa.me/919480168999?text=Hello%20Sakhi%20Mangalore!%20I%20would%20like%20to%20inquire%20about%20your%20saree%20collections.', external: true, icon: MessageCircle },
    { label: 'Store Location', path: 'https://maps.app.goo.gl/CGWejDU5BuJXF7Xx9?g_st=ipc', external: true, icon: MapPin },
  ];

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hello Sakhi Mangalore! I would like to inquire about your saree collections.');
    window.open(`https://wa.me/919480168999?text=${message}`, '_blank');
  };

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.navContainer}`}>
          {/* Mobile Left Hamburger Menu Button */}
          <button 
            onClick={() => setDrawerOpen(true)} 
            className={styles.mobileHamburgerBtn}
            aria-label="Open navigation drawer"
            title="Open Menu"
          >
            <Menu size={22} />
          </button>

          {/* Brand Logo with Official Gold Emblem */}
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logoEmblemWrapper}>
              <Image
                src="/images/sakhi_logo_emblem.png"
                alt="Sakhi Mangalore Gold Emblem Logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <div className={styles.logoTextGroup}>
              <span className={styles.logoTitle}>SAKHI</span>
              <span className={styles.logoTagline}>MANGALORE</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className={styles.desktopNav}>
            <ul className={styles.navMenu}>
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link 
                      href={item.path} 
                      className={`${styles.navLink} ${isActive ? styles.activeNavLink : ''}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Action Controls */}
          <div className={styles.navActions}>
            <button 
              onClick={onOpenSearch} 
              className={styles.iconBtn}
              title="Search Catalogue"
              aria-label="Search Catalogue"
            >
              <Search size={18} />
            </button>

            <a
              href="https://www.instagram.com/sakhimangalore"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconBtn}
              title="Instagram @sakhimangalore"
              aria-label="Instagram Profile"
            >
              <Instagram size={18} color="#E1306C" />
            </a>

            <a
              href="https://maps.app.goo.gl/CGWejDU5BuJXF7Xx9?g_st=ipc"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconBtn}
              title="Visit Boutique on Google Maps"
              aria-label="Store Location"
            >
              <MapPin size={18} color="#C9A14A" />
            </a>

            <button 
              onClick={handleWhatsApp} 
              className={`${styles.iconBtn} ${styles.mobileWhatsAppIcon}`}
              title="Enquire on WhatsApp"
              aria-label="Enquire on WhatsApp"
            >
              <MessageCircle size={18} color="#25D366" />
            </button>

            <button 
              onClick={handleWhatsApp} 
              className={styles.whatsappCta}
              title="Enquire on WhatsApp"
            >
              <MessageCircle size={18} />
              <span className={styles.whatsappText}>WhatsApp Enquiry</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Left Slide Menu Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div 
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
            />
            <motion.div 
              className={styles.mobileDrawerLeft}
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            >
              <div className={styles.drawerHeader}>
                <div className={styles.drawerLogoWrapper}>
                  <div className={styles.drawerLogoImage}>
                    <Image src="/images/sakhi_logo_emblem.png" alt="Sakhi Emblem" fill style={{ objectFit: 'contain' }} />
                  </div>
                  <div>
                    <span className={styles.logoTitle} style={{ fontSize: '1.25rem' }}>SAKHI</span>
                    <span className={styles.logoTagline} style={{ display: 'block', fontSize: '0.55rem' }}>MANGALORE</span>
                  </div>
                </div>
                <button 
                  onClick={() => setDrawerOpen(false)}
                  className={styles.closeDrawerBtn}
                  aria-label="Close drawer"
                >
                  <X size={24} />
                </button>
              </div>

              <div className={styles.drawerBody}>
                <ul className={styles.mobileNavList}>
                  {drawerItems.map((item) => {
                    const IconComp = item.icon;
                    const isActive = !item.external && pathname === item.path;

                    if (item.external) {
                      return (
                        <li key={item.label}>
                          <a 
                            href={item.path} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={styles.mobileNavLink}
                            onClick={() => setDrawerOpen(false)}
                          >
                            <span className={styles.navIconBox}><IconComp size={18} /></span>
                            <span>{item.label}</span>
                          </a>
                        </li>
                      );
                    }

                    return (
                      <li key={item.label}>
                        <Link 
                          href={item.path} 
                          className={`${styles.mobileNavLink} ${isActive ? styles.activeMobileLink : ''}`}
                          onClick={() => setDrawerOpen(false)}
                        >
                          <span className={styles.navIconBox}><IconComp size={18} /></span>
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className={styles.drawerFooter}>
                <button 
                  onClick={() => {
                    setDrawerOpen(false);
                    handleWhatsApp();
                  }} 
                  className={styles.drawerWhatsAppBtn}
                >
                  <MessageCircle size={18} />
                  <span>Enquire on WhatsApp</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
