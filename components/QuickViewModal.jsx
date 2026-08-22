'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, ArrowRight } from 'lucide-react';
import ProductGallery from './ProductGallery';
import styles from './QuickViewModal.module.css';

export default function QuickViewModal({ product, onClose }) {
  if (!product) return null;

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(`Hello Sakhi Mangalore! I would like to enquire about "${product.name}" (Code: ${product.productCode}) priced at ₹${product.price.toLocaleString('en-IN')}. Please let me know the availability.`);
    window.open(`https://wa.me/919876543210?text=${msg}`, '_blank');
  };

  return (
    <AnimatePresence>
      <motion.div
        className={styles.backdrop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={styles.modal}
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={onClose} className={styles.closeBtn} aria-label="Close modal">
            <X size={20} />
          </button>

          <div className={styles.grid}>
            {/* Gallery Column */}
            <div>
              <ProductGallery images={product.images} video={product.video} alt={product.name} />
            </div>

            {/* Details Column */}
            <div className={styles.detailsCol}>
              <span className={styles.codeTag}>Code: {product.productCode}</span>
              <h2 className={styles.title}>{product.name}</h2>

              <div className={styles.priceRow}>
                <span className={styles.price}>₹{product.price.toLocaleString('en-IN')}</span>
                {product.oldPrice && (
                  <span className={styles.oldPrice}>₹{product.oldPrice.toLocaleString('en-IN')}</span>
                )}
              </div>

              <p className={styles.desc}>{product.description}</p>

              <div className={styles.specsList}>
                <div className={styles.specRow}>
                  <span className={styles.specLabel}>Fabric:</span>
                  <span className={styles.specVal}>{product.fabric}</span>
                </div>
                <div className={styles.specRow}>
                  <span className={styles.specLabel}>Occasion:</span>
                  <span className={styles.specVal}>{product.occasion}</span>
                </div>
                <div className={styles.specRow}>
                  <span className={styles.specLabel}>Border:</span>
                  <span className={styles.specVal}>{product.border}</span>
                </div>
                <div className={styles.specRow}>
                  <span className={styles.specLabel}>Availability:</span>
                  <span className={styles.specVal} style={{ color: '#094D2E' }}>{product.availability}</span>
                </div>
              </div>

              <div className={styles.actionStack}>
                <button onClick={handleWhatsApp} className={styles.whatsappBtn}>
                  <MessageCircle size={20} />
                  <span>Enquire on WhatsApp</span>
                </button>

                <Link
                  href={`/product/${product.id}`}
                  onClick={onClose}
                  className={styles.fullPageBtn}
                >
                  <span>View Full Product Page</span>
                  <ArrowRight size={16} style={{ display: 'inline', marginLeft: 8 }} />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
