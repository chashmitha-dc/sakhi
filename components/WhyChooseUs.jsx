'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Sparkles, HeartHandshake, ShieldCheck, Gem, Tag } from 'lucide-react';
import styles from './WhyChooseUs.module.css';

const pillars = [
  {
    icon: <Crown size={28} color="#C9A14A" />,
    title: 'Premium Collections',
    description: 'Exclusively handpicked bridal, silk, and festive sarees curated from top weaver heritage centers across India.'
  },
  {
    icon: <Sparkles size={28} color="#C9A14A" />,
    title: 'Authentic Fabrics',
    description: '100% genuine mulberry silk, real tested zari, and Silk Mark certified pure handloom weaves.'
  },
  {
    icon: <HeartHandshake size={28} color="#C9A14A" />,
    title: 'Personal Shopping Experience',
    description: 'Warm boutique hospitality with private styling consultations and customized drape assistance.'
  },
  {
    icon: <ShieldCheck size={28} color="#C9A14A" />,
    title: 'Trusted Boutique',
    description: 'Mangalore’s beloved landmark for discerning saree enthusiasts, brides, and families.'
  },
  {
    icon: <Gem size={28} color="#C9A14A" />,
    title: 'Traditional Elegance',
    description: 'Honoring centuries of temple weave artistry, royal zari motifs, and timeless Indian silhouettes.'
  },
  {
    icon: <Tag size={28} color="#C9A14A" />,
    title: 'Affordable Luxury',
    description: 'Direct weaver-to-boutique curation offering regal heirloom craftsmanship at fair, transparent pricing.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.subtitle}>The Sakhi Distinction</span>
          <h2 className={styles.title}>Why Choose Sakhi Mangalore</h2>
          <div className={styles.line} />
        </div>

        <div className={styles.grid}>
          {pillars.map((item, idx) => (
            <motion.div
              key={idx}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className={styles.iconCircle}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
