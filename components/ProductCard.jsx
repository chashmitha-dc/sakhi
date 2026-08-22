'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play, Heart, Eye, MessageCircle } from 'lucide-react';
import styles from './ProductCard.module.css';

export default function ProductCard({ product, onQuickView, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && product.video) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleWhatsAppEnquiry = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const msg = encodeURIComponent(`Hello Sakhi Mangalore! I am interested in inquiring about "${product.name}" (Code: ${product.productCode}). Please share availability.`);
    window.open(`https://wa.me/919480168999?text=${msg}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.35, delay: (index % 4) * 0.05 }}
      className={styles.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3:4 Ratio Media Wrapper */}
      <div className={styles.mediaWrapper}>
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className={styles.image}
        />

        {/* Video Preview (Hover on Desktop) */}
        {product.video && isHovered && (
          <video
            ref={videoRef}
            src={product.video}
            muted
            loop
            playsInline
            preload="none"
            className={styles.videoPreview}
          />
        )}

        {/* Badges Stack */}
        <div className={styles.badgeStack}>
          {product.video && (
            <span className={styles.videoBadge}>
              <Play size={10} fill="currentColor" />
              <span>Video</span>
            </span>
          )}
        </div>

        {/* Wishlist Toggle Button (UI Only) */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsWishlisted(!isWishlisted);
          }}
          className={`${styles.wishlistBtn} ${isWishlisted ? styles.wishlisted : ''}`}
          title={isWishlisted ? 'Saved to Wishlist' : 'Add to Wishlist'}
          aria-label="Wishlist"
        >
          <Heart size={15} fill={isWishlisted ? 'currentColor' : 'none'} />
        </button>

        {/* Quick View Overlay (Desktop Only) */}
        <div className={styles.quickViewOverlay}>
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onQuickView?.(product);
            }} 
            className={styles.quickViewBtn}
          >
            <Eye size={16} />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className={styles.content}>
        <span className={styles.categoryTag}>{product.category}</span>
        <Link href={`/product/${product.id}`}>
          <h3 className={styles.productName}>{product.name}</h3>
        </Link>

        {/* Action Buttons */}
        <div className={styles.actionRow}>
          <Link href={`/product/${product.id}`} className={styles.detailsBtn}>
            View Details
          </Link>

          <button 
            onClick={handleWhatsAppEnquiry}
            className={styles.enquireBtn}
            title="Enquire on WhatsApp"
            aria-label="WhatsApp Enquiry"
          >
            <MessageCircle size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
