'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle, Navigation } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* DESKTOP FOOTER (100% Unchanged) */}
      <div className={`${styles.desktopOnly} container`}>
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
              <div style={{ position: 'relative', width: '56px', height: '56px', borderRadius: '50%', overflow: 'hidden', background: '#FFF', padding: '4px', border: '1px solid #C9A14A', boxShadow: '0 2px 10px rgba(201, 161, 74, 0.25)', flexShrink: 0 }}>
                <Image src="/images/sakhi_logo_emblem.png" alt="Sakhi Mangalore Gold Emblem Logo" fill style={{ objectFit: 'contain' }} />
              </div>
              <div>
                <span className={styles.logoTitle}>SAKHI</span>
                <div className={styles.logoTagline}>MANGALORE</div>
              </div>
            </div>
            <p className={styles.desc}>
              Founded by three friends with a passion for timeless elegance. Mangalore’s premier luxury saree boutique for handcrafted silk, bridal, and festive drapes.
            </p>
            <div className={styles.socialRow}>
              <a href="https://www.instagram.com/sakhimangalore" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://wa.me/919480168999" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="WhatsApp">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              <li><Link href="/" className={styles.link}>Home</Link></li>
              <li><Link href="/collections" className={styles.link}>Saree Collections</Link></li>
              <li><Link href="/about" className={styles.link}>Our Story</Link></li>
              <li><Link href="/contact" className={styles.link}>Visit Boutique</Link></li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className={styles.colTitle}>Collections</h3>
            <ul className={styles.linkList}>
              <li><Link href="/collections/bridal" className={styles.link}>Bridal Sarees</Link></li>
              <li><Link href="/collections/silk" className={styles.link}>Pure Silk</Link></li>
              <li><Link href="/collections/kanchipuram" className={styles.link}>Kanchipuram Silk</Link></li>
              <li><Link href="/collections/banarasi" className={styles.link}>Banarasi Brocade</Link></li>
              <li><Link href="/collections/cotton" className={styles.link}>Pure Cotton & Chanderi</Link></li>
              <li><Link href="/collections/party-wear" className={styles.link}>Festive Wear</Link></li>
            </ul>
          </div>

          {/* Store Location Info */}
          <div>
            <h3 className={styles.colTitle}>Visit Sakhi Mangalore</h3>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <MapPin size={18} color="#C9A14A" style={{ flexShrink: 0, marginTop: 3 }} />
                <span>Saraswathi Complex, Upper Bendoor, Balmatta Rd, Mangaluru, Karnataka 575002</span>
              </div>
              <div className={styles.contactItem}>
                <Phone size={18} color="#C9A14A" style={{ flexShrink: 0 }} />
                <span>+91 94801 68999 / 0824 244 5678</span>
              </div>
              <div className={styles.contactItem}>
                <Mail size={18} color="#C9A14A" style={{ flexShrink: 0 }} />
                <span>contact@sakhimangalore.com</span>
              </div>
              <div className={styles.contactItem}>
                <Clock size={18} color="#C9A14A" style={{ flexShrink: 0 }} />
                <span>Mon - Sat: 10:00 AM - 8:30 PM | Sun: 11:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>© {new Date().getFullYear()} Sakhi Mangalore. All Rights Reserved. Built with friendship & passion.</p>
          <p>Where Every Saree Tells a Story.</p>
        </div>
      </div>

      {/* ULTRA-COMPACT LUXURY MOBILE FOOTER (ONLY 4 ELEMENTS) */}
      <div className={`${styles.mobileOnly} container`}>
        {/* 1. Small Centered Logo */}
        <div className={styles.mobileLogoContainer}>
          <div className={styles.mobileLogoCircle}>
            <Image src="/images/sakhi_logo_emblem.png" alt="Sakhi Mangalore Emblem Logo" fill style={{ objectFit: 'contain' }} />
          </div>
          <span className={styles.mobileLogoTitle}>SAKHI</span>
          <span className={styles.mobileLogoTag}>MANGALORE</span>
        </div>

        {/* 2. Instagram & WhatsApp Social Icons */}
        <div className={styles.mobileSocialRow}>
          <a href="https://www.instagram.com/sakhimangalore" target="_blank" rel="noopener noreferrer" className={styles.mobileSocialLink} aria-label="Instagram">
            <Instagram size={16} />
          </a>
          <a href="https://wa.me/919480168999" target="_blank" rel="noopener noreferrer" className={styles.mobileSocialLink} aria-label="WhatsApp">
            <MessageCircle size={16} />
          </a>
        </div>

        {/* 3. One Button: Visit Boutique */}
        <Link href="/contact" className={styles.mobileVisitBtn}>
          <Navigation size={14} />
          <span>Visit Boutique</span>
        </Link>

        {/* 4. Copyright */}
        <p className={styles.mobileCopyright}>© {new Date().getFullYear()} Sakhi Mangalore</p>
      </div>
    </footer>
  );
}
