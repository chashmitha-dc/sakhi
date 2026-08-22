'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Phone, Clock, Navigation, Car, Sparkles, Search, MessageCircle } from 'lucide-react';
import styles from './Location.module.css';

const storePhotos = [
  {
    id: 'front',
    title: 'Boutique Storefront',
    src: '/images/sakhi_storefront_real.jpg'
  },
  {
    id: 'side',
    title: 'Boutique Exterior View',
    src: '/images/sakhi_store_exterior_side.jpg'
  },
  {
    id: 'interior',
    title: 'Boutique Interior Lounge',
    src: '/images/sakhi_store_interior.jpg'
  }
];

export default function Location() {
  const [selectedPhoto, setSelectedPhoto] = useState(storePhotos[0]);
  const whatsappUrl = "https://wa.me/919480168999?text=Hello%20Sakhi%20Mangalore,%20I%20would%20like%20to%20visit%20your%20boutique%20or%20enquire%20about%20your%20sarees.";

  return (
    <section className={styles.section} id="boutique">
      <div className={`container ${styles.grid}`}>
        {/* Left / Below: Details */}
        <div className={styles.detailsContainer}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' }}>
            <div style={{ position: 'relative', width: '32px', height: '32px', borderRadius: '50%', overflow: 'hidden', border: '1px solid #C9A14A', background: '#FFF' }}>
              <Image src="/images/sakhi_logo.png" alt="Sakhi Emblem Logo" fill style={{ objectFit: 'contain' }} />
            </div>
            <span className={styles.subtitle}>Physical Boutique Experience</span>
          </div>

          <h2 className={styles.title}>Visit Our Boutique</h2>
          <p className={styles.desc}>
            Step into our warm and elegant boutique in Upper Bendoor, Mangalore. Experience the tactile luxury of hand-woven Kanchipuram mulberry silk, trial bridal muhurtham drapes in person, and enjoy dedicated styling assistance from our experts.
          </p>

          <div className={styles.infoCards}>
            <div className={styles.infoItem}>
              <MapPin size={22} className={styles.infoIcon} />
              <div>
                <h4 className={styles.infoTitle}>Address</h4>
                <p className={styles.infoVal}>Saraswathi Complex, Upper Bendoor, Balmatta Rd, Mangaluru, Karnataka 575002</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <Phone size={22} className={styles.infoIcon} />
              <div>
                <h4 className={styles.infoTitle}>Phone & WhatsApp Enquiry</h4>
                <p className={styles.infoVal}>+91 94801 68999 / 0824 244 5678</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <Clock size={22} className={styles.infoIcon} />
              <div>
                <h4 className={styles.infoTitle}>Opening Hours</h4>
                <p className={styles.infoVal}>Mon - Sat: 10:00 AM - 8:30 PM | Sun: 11:00 AM - 7:00 PM</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <Car size={22} className={styles.infoIcon} />
              <div>
                <h4 className={styles.infoTitle}>Customer Parking</h4>
                <p className={styles.infoVal}>Ample dedicated customer parking available directly in front of the boutique.</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <Sparkles size={22} className={styles.infoIcon} />
              <div>
                <h4 className={styles.infoTitle}>Personal Styling Assistance</h4>
                <p className={styles.infoVal}>Dedicated bridal & festive drape stylists to guide your trousseau selection.</p>
              </div>
            </div>
          </div>

          <div className={styles.btnGroup}>
            <a
              href="https://maps.app.goo.gl/CGWejDU5BuJXF7Xx9?g_st=ipc"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.directionBtn}
            >
              <Navigation size={18} />
              <span>Get Directions to Boutique</span>
            </a>
          </div>
        </div>

        {/* Store Photo Gallery & Map (On top for mobile) */}
        <div className={styles.photoContainer}>
          <div className={styles.mainPhotoWrapper}>
            <Image
              src={selectedPhoto.src}
              alt="Sakhi Mangalore Real Boutique Storefront"
              fill
              priority
              className={styles.mainPhoto}
            />

            <div className={styles.googleBadge}>
              <Search size={14} />
              <span>Verified Boutique • Mangalore</span>
            </div>
          </div>

          {/* Thumbnails */}
          <div className={styles.thumbRow}>
            {storePhotos.map((photo) => (
              <button
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className={`${styles.thumbBtn} ${selectedPhoto.id === photo.id ? styles.activeThumb : ''}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </button>
            ))}
          </div>

          {/* Embedded Google Map */}
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.585724036667!2d74.8430!3d12.8698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUyJzExLjMiTiA3NMKwNTAnMzQuOCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              className={styles.mapIframe}
              allowFullScreen=""
              loading="lazy"
              title="Sakhi Mangalore Google Maps Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
