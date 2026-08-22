'use client';

import React from 'react';
import Hero from '@/components/Hero';
import CategoryCard from '@/components/CategoryCard';
import FoundersSection from '@/components/FoundersSection';
import Location from '@/components/Location';
import { categories } from '@/data/categories';
import styles from './page.module.css';

export default function HomePage() {
  const featuredCats = categories.filter((c) => c.featured);

  return (
    <div>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Featured Saree Collections */}
      <section className={styles.section} id="collections">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionSubtitle}>CURATED DIGITAL CATALOGUE</span>
            <h2 className={styles.sectionTitle}>Saree Collections</h2>
            <p className={styles.sectionDesc}>
              Explore our handpicked luxury drapes curated for weddings, festivities, and special occasions.
            </p>
            <span className={styles.swipeHint}>Swipe to Explore →</span>
          </div>

          <div className={styles.categoryGrid}>
            {featuredCats.map((cat, idx) => (
              <CategoryCard key={cat.id} category={cat} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Story */}
      <FoundersSection />

      {/* 4. Visit Our Boutique */}
      <Location />
    </div>
  );
}
