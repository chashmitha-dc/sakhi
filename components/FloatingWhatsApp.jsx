'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import styles from './FloatingWhatsApp.module.css';

export default function FloatingWhatsApp() {
  const handleClick = () => {
    const msg = encodeURIComponent('Hello Sakhi Mangalore! I would like to inquire about your saree collections.');
    window.open(`https://wa.me/919876543210?text=${msg}`, '_blank');
  };

  return (
    <div className={styles.floatingWrapper}>
      <div className={styles.tooltip}>
        <span>Need Saree Assistance? Chat with Us!</span>
      </div>

      <button
        onClick={handleClick}
        className={styles.whatsappBtn}
        aria-label="Direct WhatsApp Inquiry"
        title="Direct WhatsApp Inquiry"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
}
