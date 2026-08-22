'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './FoundersSection.module.css';

export default function FoundersSection() {
  return (
    <section className={styles.section} id="story">
      <div className={styles.container}>
        
        {/* OUR STORY: Editorial Magazine Layout */}
        <div className={styles.storyBlock}>
          <div className={styles.storyHeader}>
            <span className={styles.sectionTag}>Heritage & Tradition</span>
            <h2 className={styles.sectionTitle}>Our Story</h2>
            <div className={styles.goldLine} />
          </div>

          <div className={styles.storyGrid}>
            {/* Founders Image (Fade Up animation) */}
            <motion.div 
              className={styles.storyImageWrapper}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className={styles.imageBorderFrame}>
                <Image 
                  src="/images/sakhi_founders.png" 
                  alt="Sakhi Mangalore Founders Story" 
                  width={650} 
                  height={480}
                  className={styles.storyImg}
                />
              </div>
            </motion.div>

            {/* Story Text Content (Fade Up with small delay) */}
            <motion.div 
              className={styles.storyTextContent}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className={styles.leadParagraph}>
                Sakhi Mangalore celebrates timeless Indian craftsmanship through thoughtfully curated saree collections for every special occasion.
              </p>

              <p className={styles.bodyParagraph}>
                What started as a passion for authentic handlooms has grown into a trusted luxury boutique. Every drape is handpicked to honor India’s rich weaving traditions while offering contemporary grace.
              </p>

              <p className={styles.bodyParagraph}>
                From regal bridal silk sarees to effortless festive drapes, we welcome every woman with personal styling assistance and warm Mangalorean hospitality.
              </p>

              <div className={styles.readMoreWrapper}>
                <Link href="/about" className={styles.readMoreBtn}>
                  <span>Read More</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
