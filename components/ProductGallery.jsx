'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
import styles from './ProductGallery.module.css';

export default function ProductGallery({ images = [], video = null, alt = 'Saree' }) {
  const [activeType, setActiveType] = useState('image'); // 'image' or 'video'
  const [activeImageIndex, setActiveImageIndex] = useState(0);
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

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className={styles.galleryContainer}>
      {/* Main View Display */}
      <div className={styles.mainViewer}>
        {activeType === 'image' ? (
          <Image
            src={images[activeImageIndex] || images[0]}
            alt={alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.mainImage}
          />
        ) : (
          <div style={{ position: 'absolute', inset: 0 }}>
            <video
              ref={videoRef}
              src={video}
              autoPlay
              muted={isMuted}
              loop
              playsInline
              className={styles.videoPlayer}
            />
            <div className={styles.videoControlsOverlay}>
              <button onClick={togglePlay} className={styles.controlBtn} title={isPlaying ? 'Pause' : 'Play'}>
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>
              <button onClick={toggleMute} className={styles.controlBtn} title={isMuted ? 'Unmute' : 'Mute'}>
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
              <button onClick={toggleFullscreen} className={styles.controlBtn} title="Fullscreen">
                <Maximize size={18} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Thumbnail Selector */}
      <div className={styles.thumbnailGrid}>
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => {
              setActiveType('image');
              setActiveImageIndex(idx);
            }}
            className={`${styles.thumbBtn} ${activeType === 'image' && activeImageIndex === idx ? styles.activeThumb : ''}`}
          >
            <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className={styles.thumbImage} />
          </button>
        ))}

        {video && (
          <button
            onClick={() => setActiveType('video')}
            className={`${styles.thumbBtn} ${activeType === 'video' ? styles.activeThumb : ''}`}
          >
            <Image src={images[0]} alt="Video Thumbnail" fill className={styles.thumbImage} />
            <div className={styles.videoThumbBadge}>
              <Play size={20} fill="currentColor" />
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
