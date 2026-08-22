'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Sparkles, ChevronDown } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      {/* Full-Width Background Photography with Slow Parallax Zoom */}
      <div className={styles.bgImageWrapper}>
        <motion.div
          className={styles.bgImageZoom}
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: 'easeOut' }}
        >
          <Image
            src="/images/sakhi_founders.png"
            alt="Sakhi Mangalore Full-Width Luxury Saree Boutique Editorial Hero"
            fill
            priority
            className={styles.heroImg}
          />
        </motion.div>
        {/* Dark Editorial Overlay */}
        <div className={styles.darkOverlay} />
      </div>

      {/* Floating Centered Magazine Composition */}
      <div className={styles.heroContentContainer}>
        <div className={styles.centeredStack}>
          {/* Floating Luxury Badge */}
          <motion.div 
            className={styles.floatingBadge}
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Sparkles size={13} color="#D4AF37" />
            <span>ESTABLISHED IN MANGALORE</span>
          </motion.div>

          {/* Centered Luxury Editorial Headline */}
          <motion.h1 
            className={styles.heading}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <span className={styles.lightLine}>Timeless Sarees.</span>
            <span className={styles.goldItalicLine}>Curated For</span>
            <span className={styles.lightLine}>Every Celebration.</span>
          </motion.h1>

          {/* Minimal Subtitle */}
          <motion.p 
            className={styles.paragraph}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
          >
            Handcrafted silk, bridal and festive sarees, carefully curated to celebrate India's timeless heritage.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            className={styles.ctaGroup}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
          >
            <Link href="/collections" className={styles.primaryBtn}>
              <span>Explore Collections</span>
              <ArrowRight size={16} />
            </Link>

            <Link href="#boutique" className={styles.secondaryBtn}>
              <MapPin size={16} />
              <span>Visit Our Boutique</span>
            </Link>
          </motion.div>
        </div>

        {/* Animated Scroll Indicator */}
        <motion.div 
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a href="#collections" className={styles.scrollLink}>
            <span className={styles.scrollText}>Scroll to Explore</span>
            <ChevronDown size={15} className={styles.scrollIcon} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
