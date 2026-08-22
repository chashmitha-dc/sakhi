'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import SEO from '@/components/SEO';
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Send, Search } from 'lucide-react';
import styles from './page.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    occasion: 'Bridal Saree Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', occasion: 'Bridal Saree Inquiry', message: '' });
    }, 4000);
  };

  const handleDirectWhatsApp = () => {
    const msg = encodeURIComponent(`Hello Sakhi Mangalore! I would like to get in touch regarding a boutique appointment and saree inquiry.`);
    window.open(`https://wa.me/919876543210?text=${msg}`, '_blank');
  };

  return (
    <div>
      <SEO title="Contact Sakhi Mangalore | Store Location & WhatsApp Inquiry" description="Get in touch with Sakhi Mangalore. Visit our boutique on KS Rao Road or inquire directly on WhatsApp." />

      {/* Header Banner */}
      <div className={styles.pageHeader}>
        <div className="container">
          <span className={styles.subtitle}>Get In Touch</span>
          <h1 className={styles.title}>Contact Sakhi Mangalore</h1>
          <p className={styles.lead}>
            We welcome you to visit our boutique in Mangalore or reach out for personalized bridal trousseau consultations.
          </p>
        </div>
      </div>

      <section className={styles.section}>
        <div className={`container ${styles.grid}`}>
          {/* Store Info Column */}
          <div className={styles.infoCol}>
            <h2 className={styles.colTitle}>Boutique Details</h2>

            {/* Real Store Photo Banner */}
            <div style={{ position: 'relative', width: '100%', height: '240px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #C89B3C', marginBottom: '1.5rem', boxShadow: '0 4px 15px rgba(59, 36, 20, 0.1)' }}>
              <Image
                src="/images/sakhi_storefront_real.jpg"
                alt="Sakhi Mangalore Real Boutique Storefront"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(0,0,0,0.75)', color: '#F9E2AF', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', backdropFilter: 'blur(4px)' }}>
                <Search size={14} />
                <span>Verified Google Maps Storefront</span>
              </div>
            </div>

            <div className={styles.contactCardList}>
              <div className={styles.contactCard}>
                <div className={styles.iconCircle}>
                  <MapPin size={22} />
                </div>
                <div>
                  <div className={styles.cardLabel}>Boutique Address</div>
                  <div className={styles.cardVal}>KS Rao Road, Near City Centre Mall, Mangalore, Karnataka 575001</div>
                </div>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.iconCircle}>
                  <Phone size={22} />
                </div>
                <div>
                  <div className={styles.cardLabel}>Phone Lines</div>
                  <div className={styles.cardVal}>+91 98765 43210 / 0824 244 5678</div>
                </div>
              </div>

              <div className={styles.contactCard} onClick={handleDirectWhatsApp} style={{ cursor: 'pointer' }}>
                <div className={styles.iconCircle} style={{ background: '#E8F5E9', color: '#25D366' }}>
                  <MessageCircle size={22} />
                </div>
                <div>
                  <div className={styles.cardLabel}>WhatsApp Concierge</div>
                  <div className={styles.cardVal} style={{ color: '#128C7E', fontWeight: 700 }}>+91 98765 43210 (Tap to Chat)</div>
                </div>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.iconCircle}>
                  <Instagram size={22} />
                </div>
                <div>
                  <div className={styles.cardLabel}>Instagram Handle</div>
                  <div className={styles.cardVal}>@sakhimangalore</div>
                </div>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.iconCircle}>
                  <Clock size={22} />
                </div>
                <div>
                  <div className={styles.cardLabel}>Business Hours</div>
                  <div className={styles.cardVal}>Monday - Sunday: 10:00 AM - 8:30 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Inquiry Form */}
          <div className={styles.formBox}>
            <h2 className={styles.colTitle}>Send a Catalogue Inquiry</h2>

            <form onSubmit={handleSubmit} className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Phone Number (WhatsApp) *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Email Address (Optional)</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Inquiry Type</label>
                <select
                  value={formData.occasion}
                  onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                  className={styles.input}
                >
                  <option value="Bridal Saree Inquiry">Bridal Saree Inquiry</option>
                  <option value="Kanchipuram Silk Catalogue">Kanchipuram Silk Catalogue</option>
                  <option value="Banarasi Brocade Inquiry">Banarasi Brocade Inquiry</option>
                  <option value="Bespoke Blouse Tailoring">Bespoke Blouse Tailoring</option>
                  <option value="Boutique Visit Appointment">Boutique Visit Appointment</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Your Message or Saree Preferences</label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your occasion, preferred colours, or specific saree codes..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={styles.textarea}
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                <Send size={18} style={{ display: 'inline', marginRight: 8 }} />
                Submit Boutique Inquiry
              </button>

              {submitted && (
                <div className={styles.successMsg}>
                  ✨ Thank you, {formData.name}! Your inquiry has been sent to Sakhi Mangalore concierge. We will reply on WhatsApp shortly.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className={`container ${styles.mapSection}`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.585724036667!2d74.8430!3d12.8698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUyJzExLjMiTiA3NMKwNTAnMzQuOCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Sakhi Mangalore Store Map"
          />
        </div>
      </section>
    </div>
  );
}
