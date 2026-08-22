'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import styles from './ProductVideoCard.module.css';

export default function ProductVideoCard({ product }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className={styles.videoCard}>
      <video
        ref={videoRef}
        src={product.video}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        className={styles.videoElement}
      />

      <div className={styles.overlay}>
        <div className={styles.topRow}>
          <div className={styles.videoBadge}>
            <Play size={12} fill="currentColor" />
            <span>4K Drape Video</span>
          </div>

          <button onClick={toggleMute} className={styles.audioBtn} aria-label="Toggle Audio">
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        </div>

        <div className={styles.bottomContent}>
          <h3 className={styles.title}>{product.name}</h3>

          <div className={styles.actions}>
            <Link href={`/product/${product.id}`} className={styles.viewBtn}>
              View Saree Specs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
