'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Play, Heart, MessageCircle, Eye, CheckCircle2, Film, Image as ImageIcon, Music, X, Share2, Sparkles } from 'lucide-react';
import styles from './InstagramSection.module.css';

const instagramPosts = [
  {
    id: 'post-1',
    type: 'post',
    image: '/images/insta_post_1.png',
    caption: 'Bridal Muhurtham Kanchipuram Pure Silk Saree in Crimson Red with 24K tested Gold Zari border.',
    likes: '2,480',
    comments: '142',
    link: 'https://www.instagram.com/sakhimangalore'
  },
  {
    id: 'post-2',
    type: 'post',
    image: '/images/insta_post_2.png',
    caption: 'Royal Blue Varanasi Heritage Brocade Saree. Crafted by master looms of Banaras.',
    likes: '1,890',
    comments: '98',
    link: 'https://www.instagram.com/sakhimangalore'
  },
  {
    id: 'post-3',
    type: 'post',
    image: '/images/insta_post_3.png',
    caption: 'Emerald Green Kanchipuram Silk with traditional Mayil (Peacock) temple motif pallu.',
    likes: '3,120',
    comments: '215',
    link: 'https://www.instagram.com/sakhimangalore'
  },
  {
    id: 'post-4',
    type: 'post',
    image: '/images/insta_post_4.png',
    caption: 'Hand-embroidered Pastel Organza Silk Saree with silver thread flora for summer receptions.',
    likes: '1,640',
    comments: '76',
    link: 'https://www.instagram.com/sakhimangalore'
  },
  {
    id: 'post-5',
    type: 'post',
    image: '/images/insta_post_5.png',
    caption: 'Deep Violet Silk Saree with silver gold dual zari pallu. A timeless Sakhi signature.',
    likes: '2,890',
    comments: '184',
    link: 'https://www.instagram.com/sakhimangalore'
  },
  {
    id: 'post-6',
    type: 'post',
    image: '/images/insta_post_6.png',
    caption: 'Crimson Velvet & Silk Zardosi Bridal Saree. Pure luxury for Mangalore brides.',
    likes: '4,210',
    comments: '310',
    link: 'https://www.instagram.com/sakhimangalore'
  }
];

const instagramReels = [
  {
    id: 'reel-1',
    type: 'reel',
    image: '/images/insta_post_1.png',
    title: 'Bridal Kanchipuram Drape Walkthrough',
    caption: '4K Drape Reel: Inspecting the fluid sheen and heavy pallu fall of our Bridal Kanchipuram Silk.',
    views: '48.5K',
    likes: '5,820',
    audio: 'Original Audio - Sakhi Mangalore Heritage',
    link: 'https://www.instagram.com/sakhimangalore'
  },
  {
    id: 'reel-2',
    type: 'reel',
    image: '/images/insta_post_2.png',
    title: 'Banarasi Weave Craftsmanship',
    caption: 'Banarasi Brocade Weave Texture close-up. Pure silk certified for wedding trousseaus.',
    views: '32.1K',
    likes: '3,940',
    audio: 'Shehnai Wedding Melodies - Sakhi Mix',
    link: 'https://www.instagram.com/sakhimangalore'
  },
  {
    id: 'reel-3',
    type: 'reel',
    image: '/images/insta_post_3.png',
    title: 'Boutique Interior Shopping Experience',
    caption: 'Private Bridal Lounge Trial at Kodialbail Boutique. Book your personal styling session today!',
    views: '64.2K',
    likes: '8,150',
    audio: 'South Indian Classical Veena - Sakhi Lounge',
    link: 'https://www.instagram.com/sakhimangalore'
  }
];

export default function InstagramSection() {
  const [activeTab, setActiveTab] = useState('posts');
  const [activeReelModal, setActiveReelModal] = useState(null);

  const items = activeTab === 'posts' ? instagramPosts : instagramReels;

  const handleCardClick = (item, e) => {
    if (item.type === 'reel') {
      e.preventDefault();
      setActiveReelModal(item);
    }
  };

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Profile Card Header */}
        <div className={styles.profileCard}>
          <div className={styles.profileLeft}>
            <div className={styles.avatarRing}>
              <div className={styles.avatarInner} style={{ position: 'relative', overflow: 'hidden' }}>
                <Image
                  src="/images/sakhi_logo.png"
                  alt="Sakhi Mangalore Avatar Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>

            <div>
              <div className={styles.profileHandleRow}>
                <h3 className={styles.handle}>sakhimangalore</h3>
                <CheckCircle2 size={20} className={styles.verifiedBadge} />
              </div>

              <div className={styles.statsRow}>
                <span><strong className={styles.statNum}>811</strong> followers</span>
                <span><strong className={styles.statNum}>3</strong> following</span>
              </div>

              <p className={styles.bio}>
                <strong>Sakhi Mangalore</strong><br />
                📍 Saraswathi Complex, Upper Bendoor, Balmatta Rd, Mangaluru, Karnataka 575002
              </p>
            </div>
          </div>

          <a
            href="https://www.instagram.com/sakhimangalore"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.followBtn}
          >
            <Instagram size={20} />
            <span>Follow @sakhimangalore</span>
          </a>
        </div>

        {/* Tab Row */}
        <div className={styles.tabRow}>
          <button
            onClick={() => setActiveTab('posts')}
            className={`${styles.tabBtn} ${activeTab === 'posts' ? styles.activeTab : ''}`}
          >
            <ImageIcon size={18} />
            <span>Instagram Posts</span>
          </button>

          <button
            onClick={() => setActiveTab('reels')}
            className={`${styles.tabBtn} ${activeTab === 'reels' ? styles.activeTab : ''}`}
          >
            <Film size={18} />
            <span>Featured Reels</span>
          </button>
        </div>

        {/* Media Grid */}
        <div className={styles.grid}>
          {items.map((item, idx) => (
            <motion.a
              key={item.id}
              href={item.link}
              target={item.type === 'reel' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              onClick={(e) => handleCardClick(item, e)}
              className={styles.postCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt="Sakhi Mangalore Instagram Content"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.postImage}
                />

                {/* Hover Overlay */}
                <div className={styles.overlay}>
                  <div className={styles.topBadgeRow}>
                    <span className={styles.typeBadge}>
                      {item.type === 'reel' ? <Play size={12} fill="currentColor" /> : <Instagram size={12} />}
                      <span>{item.type === 'reel' ? 'WATCH REEL' : 'POST'}</span>
                    </span>
                  </div>

                  <div className={styles.bottomContent}>
                    <p className={styles.caption}>{item.caption}</p>

                    <div className={styles.statsMeta}>
                      {item.type === 'reel' ? (
                        <>
                          <span className={styles.statItem}><Eye size={14} /> {item.views}</span>
                          <span className={styles.statItem}><Heart size={14} fill="currentColor" /> {item.likes}</span>
                        </>
                      ) : (
                        <>
                          <span className={styles.statItem}><Heart size={14} fill="currentColor" /> {item.likes}</span>
                          <span className={styles.statItem}><MessageCircle size={14} /> {item.comments}</span>
                        </>
                      )}
                    </div>

                    {item.audio && (
                      <div className={styles.musicTrack}>
                        <Music size={12} />
                        <span>{item.audio}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Modern Modal Player for Reels */}
      <AnimatePresence>
        {activeReelModal && (
          <motion.div 
            className={styles.modalBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveReelModal(null)}
          >
            <motion.div 
              className={styles.modalContent}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className={styles.closeBtn} 
                onClick={() => setActiveReelModal(null)}
                aria-label="Close video player"
              >
                <X size={20} />
              </button>

              <div className={styles.modalGrid}>
                {/* Visual Media Card */}
                <div className={styles.modalMediaWrapper}>
                  <Image 
                    src={activeReelModal.image}
                    alt={activeReelModal.title || 'Sakhi Reel'}
                    fill
                    className={styles.modalImage}
                  />
                  <div className={styles.playIconOverlay}>
                    <Play size={48} fill="#FFF" color="#FFF" />
                  </div>
                </div>

                {/* Info Panel */}
                <div className={styles.modalInfoPanel}>
                  <div className={styles.modalHeader}>
                    <span className={styles.modalTag}>
                      <Sparkles size={12} color="#C9A14A" />
                      Instagram Reel Feature
                    </span>
                    <h3 className={styles.modalTitle}>{activeReelModal.title || 'Sakhi Saree Preview'}</h3>
                  </div>

                  <p className={styles.modalCaption}>{activeReelModal.caption}</p>

                  <div className={styles.modalMetaRow}>
                    <div className={styles.metaBadge}>
                      <Eye size={14} />
                      <span>{activeReelModal.views} Views</span>
                    </div>
                    <div className={styles.metaBadge}>
                      <Heart size={14} color="#e63946" fill="#e63946" />
                      <span>{activeReelModal.likes} Likes</span>
                    </div>
                  </div>

                  <div className={styles.audioRow}>
                    <Music size={14} color="#C9A14A" />
                    <span>{activeReelModal.audio}</span>
                  </div>

                  <div className={styles.modalActions}>
                    <a 
                      href="https://wa.me/919480168999?text=Hello%20Sakhi%20Mangalore,%20I%20saw%20this%20Reel%20and%20would%20like%20to%20enquire%20about%20the%20saree!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.modalWaBtn}
                    >
                      <MessageCircle size={18} />
                      <span>Enquire on WhatsApp</span>
                    </a>

                    <a 
                      href="https://www.instagram.com/sakhimangalore"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.modalInstaBtn}
                    >
                      <Instagram size={18} />
                      <span>View on Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
