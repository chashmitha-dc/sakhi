'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    name: 'Ananya Rao',
    location: 'Mangalore',
    quote: 'Sakhi Mangalore provided the most magical experience for my bridal muhurtham saree selection. The Kanchipuram silk drape and real gold zari border were praised by everyone at the wedding!',
    rating: 5
  },
  {
    id: 2,
    name: 'Dr. Priya Shenoy',
    location: 'Bangalore',
    quote: 'I ordered three Banarasi brocade sarees via WhatsApp. The team sent live video demonstrations and close-up fabric texture clips. Flawless quality and royal packaging!',
    rating: 5
  },
  {
    id: 3,
    name: 'Radhika Kamath',
    location: 'Udupi',
    quote: 'Their handloom organza and pure linen collection is unbeatable in Coastal Karnataka. Sakhi is truly a treasure trove for saree connoisseurs who value heritage craftsmanship.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.subtitle}>Client Accolades</span>
          <h2 className={styles.title}>Cherished Words from Our Patrons</h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div>
                <Quote size={32} className={styles.quoteIcon} />
                <p className={styles.quoteText}>"{item.quote}"</p>
              </div>

              <div className={styles.authorRow}>
                <div>
                  <h4 className={styles.authorName}>{item.name}</h4>
                  <span className={styles.authorLocation}>{item.location}</span>
                </div>
                <div className={styles.stars}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
