'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './EditorialQuote.module.css';

export default function EditorialQuote() {
  return (
    <section className={styles.quoteSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.quoteCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.flourishTop}>❖</div>
          <blockquote className={styles.quoteText}>
            “Every saree carries a story.<br />
            Every weave carries tradition.<br />
            Every woman deserves timeless elegance.”
          </blockquote>
          <div className={styles.divider}>
            <span className={styles.line} />
            <span className={styles.author}>SAKHI MANGALORE</span>
            <span className={styles.line} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
