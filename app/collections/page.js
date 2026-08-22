'use client';

import React from 'react';
import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/data/categories';
import styles from './page.module.css';

export default function CollectionsPage() {
  return (
    <div>
      {/* Header Banner */}
      <div className={styles.pageHeader}>
        <div className={styles.bgPattern} />
        <div className={`container ${styles.headerContent}`}>
          <span className={styles.subtitle}>Curated Digital Catalogue</span>
          <h1 className={styles.title}>Saree Collections</h1>
          <p className={styles.desc}>
            Explore Sakhi Mangalore's signature collections woven for grand weddings, festive rituals, and timeless everyday elegance.
          </p>
          <span className={styles.swipeHint}>Swipe to Explore →</span>
        </div>
      </div>

      {/* Signature Collections Horizontal Swipe Carousel on Mobile */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionSubHeader}>
            <span className={styles.sectionTag}>Signature Weaves & Fabrics</span>
            <h2 className={styles.sectionHeading}>Browse All Collections</h2>
          </div>

          <div className={styles.collectionsGrid}>
            {categories.map((cat, idx) => (
              <CategoryCard key={cat.id} category={cat} index={idx} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
