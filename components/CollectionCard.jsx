'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Layers } from 'lucide-react';
import styles from './CollectionCard.module.css';

export default function CollectionCard({ collection, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/collections/${collection.slug}`} className={styles.cardLink}>
        <div className={styles.cardContainer}>
          <div className={styles.imageBox}>
            <Image 
              src={collection.image}
              alt={collection.name}
              fill
              className={styles.image}
            />
            <div className={styles.overlay} />
            <span className={styles.tag}>{collection.tag || 'Exclusive'}</span>
          </div>

          <div className={styles.infoBox}>
            <div className={styles.headerRow}>
              <span className={styles.metaText}>
                <Layers size={14} color="#C89B3C" />
                <span>{collection.productCount} Signature Sarees</span>
              </span>
            </div>

            <h3 className={styles.title}>{collection.name}</h3>
            <p className={styles.description}>{collection.description}</p>

            <div className={styles.btnRow}>
              <span className={styles.btnText}>Explore Collection</span>
              <ArrowRight size={16} className={styles.arrowIcon} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
