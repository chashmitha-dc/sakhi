'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import styles from './CategoryCard.module.css';

export default function CategoryCard({ category, index = 0 }) {
  return (
    <motion.div
      className={styles.cardWrapper}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link href={`/collections/${category.slug}`} className={styles.cardLink}>
        <div className={styles.cardContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src={category.image}
              alt={category.name}
              fill
              className={styles.cardImage}
            />
            <div className={styles.imageOverlay} />
          </div>

          <div className={styles.content}>
            <span className={styles.countBadge}>{category.productCount} Sarees</span>
            <h3 className={styles.categoryName}>{category.name}</h3>
            <p className={styles.description}>{category.description}</p>
            
            <div className={styles.actionRow}>
              <span className={styles.exploreText}>Explore Collection</span>
              <div className={styles.iconCircle}>
                <ArrowUpRight size={18} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
