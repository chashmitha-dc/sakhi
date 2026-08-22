'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import FoundersSection from '@/components/FoundersSection';
import EditorialQuote from '@/components/EditorialQuote';
import styles from './page.module.css';

export default function AboutPage() {
  const timelineEvents = [
    {
      year: 'Vision',
      title: 'A Shared Passion',
      text: 'Founded in Mangalore by three lifelong friends who envisioned a boutique devoted exclusively to authentic Indian handlooms, pure mulberry silks, and fine craftsmanship.'
    },
    {
      year: 'Purity',
      title: 'Silk Mark Certification',
      text: 'Every pure silk saree in Sakhi is certified for 100% fabric purity, guaranteeing tested gold zari and authentic weaving heritage.'
    },
    {
      year: 'Experience',
      title: 'Bespoke Trousseau Lounge',
      text: 'Curating private bridal trials, bespoke saree styling, and personalized drape consultations for brides and families in Mangalore.'
    },
    {
      year: 'Today',
      title: 'Coastal Karnataka Landmark',
      text: 'Welcoming saree lovers from across Karnataka, Middle East, USA, and Europe through our digital catalogue and Kodialbail boutique.'
    }
  ];

  return (
    <div>
      <SEO 
        title="About Us | Sakhi Mangalore Luxury Saree Boutique" 
        description="Learn the story of Sakhi Mangalore, founded by three passionate friends dedicated to timeless sarees, authentic craftsmanship, and warm boutique hospitality." 
      />

      {/* Hero Header */}
      <div className={styles.heroHeader}>
        <div className="container">
          <span className={styles.subtitle}>Three Friends • One Dream</span>
          <h1 className={styles.title}>The Sakhi Mangalore Narrative</h1>
          <p className={styles.lead}>
            Celebrating friendship, Indian textile artistry, and timeless elegance through personally curated silk, bridal, and festive sarees.
          </p>
        </div>
      </div>

      {/* Editorial Quote */}
      <EditorialQuote />

      {/* Main Founders & Story Section */}
      <FoundersSection />

      {/* Timeline Section */}
      <section className={styles.section}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A14A' }}>
              Our Journey
            </span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', color: '#38241e', marginTop: '0.3rem' }}>
              The Pillars of Sakhi
            </h2>
          </div>

          <div className={styles.timeline}>
            {timelineEvents.map((item, idx) => (
              <motion.div 
                key={idx} 
                className={styles.timelineItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className={styles.timelineDot} />
                <div className={styles.timelineYear}>{item.year}</div>
                <h3 className={styles.timelineTitle}>{item.title}</h3>
                <p className={styles.timelineText}>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
