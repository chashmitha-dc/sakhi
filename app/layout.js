'use client';

import React, { useState } from 'react';
import './globals.css';
import Navbar from '@/components/Navbar';
import BottomNav from '@/components/BottomNav';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import SEO from '@/components/SEO';

export default function RootLayout({ children }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>Sakhi Mangalore | Luxury Indian Saree Boutique</title>
        <meta name="description" content="Sakhi Mangalore - Digital catalogue of pure Kanchipuram silk, Banarasi brocades, bridal sarees, organza, and designer drape collections. Enquire on WhatsApp." />
        <meta name="keywords" content="Sakhi Mangalore, Saree Boutique, Kanchipuram Silk, Banarasi Sarees, Bridal Sarees, Silk Mark Certified, Mangalore Sarees" />
        <meta property="og:title" content="Sakhi Mangalore | Luxury Indian Saree Boutique" />
        <meta property="og:description" content="Handcrafted Mulberry Silk, Regal Banarasi Brocades & Temple Kanchipuram Weaves." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sakhimangalore.com" />
        <meta property="og:image" content="https://sakhimangalore.com/images/hero-banner.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://sakhimangalore.com" />
      </head>
      <body>
        <SEO />
        <Navbar 
          onOpenSearch={() => setSearchOpen(true)} 
          isMobileOpen={mobileMenuOpen}
          onOpenMenu={() => setMobileMenuOpen(true)}
          onCloseMenu={() => setMobileMenuOpen(false)}
        />
        <main>{children}</main>
        <Footer />
        <BottomNav 
          onOpenSearch={() => setSearchOpen(true)} 
          onOpenMenu={() => setMobileMenuOpen(true)}
        />
        <SearchBar isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      </body>
    </html>
  );
}
