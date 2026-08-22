'use client';

import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import ProductGallery from '@/components/ProductGallery';
import ProductCard from '@/components/ProductCard';
import QuickViewModal from '@/components/QuickViewModal';
import SEO from '@/components/SEO';
import { getProductById, products } from '@/data/products';
import { ChevronRight, MessageCircle, Share2, Instagram, CheckCircle2, Copy } from 'lucide-react';
import styles from './page.module.css';

export default function ProductDetailPage({ params }) {
  const resolvedParams = use(params);
  const productId = resolvedParams.id;
  const product = getProductById(productId) || products[0];

  const [copied, setCopied] = useState(false);
  const [selectedQuickView, setSelectedQuickView] = useState(null);
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  // Recently Viewed localStorage tracking
  useEffect(() => {
    if (!product) return;
    try {
      const stored = JSON.parse(localStorage.getItem('sakhi_recently_viewed') || '[]');
      const updated = [product.id, ...stored.filter((id) => id !== product.id)].slice(0, 4);
      localStorage.setItem('sakhi_recently_viewed', JSON.stringify(updated));

      const items = updated.map((id) => getProductById(id)).filter(Boolean);
      setRecentlyViewed(items);
    } catch (e) {}
  }, [product]);

  const handleWhatsAppEnquiry = () => {
    const msg = encodeURIComponent(
      `Hello Sakhi Mangalore!\n\nI want to inquire about the following saree from your digital catalogue:\n\n*${product.name}*\n*Product Code:* ${product.productCode}\n*Price:* ₹${product.price.toLocaleString('en-IN')}\n*Fabric:* ${product.fabric}\n*Colour:* ${product.colour}\n\nPlease let me know the current availability and order process.`
    );
    window.open(`https://wa.me/919876543210?text=${msg}`, '_blank');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out ${product.name} at Sakhi Mangalore!`,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.fabric === product.fabric))
    .slice(0, 4);

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": product.images.map((img) => `https://sakhimangalore.com${img}`),
    "description": product.description,
    "sku": product.productCode,
    "brand": {
      "@type": "Brand",
      "name": "Sakhi Mangalore"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://sakhimangalore.com/product/${product.id}`,
      "priceCurrency": "INR",
      "price": product.price,
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className={styles.pageContainer}>
      <SEO title={`${product.name} | Sakhi Mangalore`} description={product.description} productSchema={productSchema} />

      <div className="container">
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/" className={styles.breadcrumbLink}>Home</Link>
          <ChevronRight size={14} />
          <Link href="/collections" className={styles.breadcrumbLink}>Collections</Link>
          <ChevronRight size={14} />
          <Link href={`/collections/${product.category}`} className={styles.breadcrumbLink}>{product.category}</Link>
          <ChevronRight size={14} />
          <span>{product.name}</span>
        </div>

        {/* Main Product Layout */}
        <div className={styles.mainGrid}>
          {/* Left: Product Gallery */}
          <div>
            <ProductGallery images={product.images} video={product.video} alt={product.name} />
          </div>

          {/* Right: Product Specification & Actions */}
          <div>
            <div className={styles.productCode}>Product Code: {product.productCode}</div>
            <h1 className={styles.title}>{product.name}</h1>

            {/* Price Block */}
            <div className={styles.priceBlock}>
              <span className={styles.currentPrice}>₹{product.price.toLocaleString('en-IN')}</span>
              {product.oldPrice && (
                <span className={styles.oldPrice}>₹{product.oldPrice.toLocaleString('en-IN')}</span>
              )}
              {product.discount > 0 && (
                <span className={styles.discountBadge}>{product.discount}% OFF</span>
              )}
            </div>

            <p className={styles.desc}>{product.description}</p>

            {/* Specifications Table */}
            <div className={styles.specsTable}>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Fabric & Weave</span>
                <span className={styles.specValue}>{product.fabric}</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Material</span>
                <span className={styles.specValue}>{product.material}</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Colour Palette</span>
                <span className={styles.specValue}>{product.colour}</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Occasion</span>
                <span className={styles.specValue}>{product.occasion}</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Border Motif</span>
                <span className={styles.specValue}>{product.border}</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Blouse Included</span>
                <span className={styles.specValue}>{product.blouseIncluded}</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Saree Length</span>
                <span className={styles.specValue}>{product.length}</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Wash & Care</span>
                <span className={styles.specValue}>{product.washCare}</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Availability</span>
                <span className={styles.specValue} style={{ color: '#094D2E', fontWeight: 700 }}>
                  <CheckCircle2 size={16} style={{ display: 'inline', marginRight: 4 }} />
                  {product.availability}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className={styles.ctaBox}>
              <button onClick={handleWhatsAppEnquiry} className={styles.whatsappCta}>
                <MessageCircle size={22} />
                <span>Enquire via WhatsApp</span>
              </button>

              <div className={styles.actionRow}>
                <button onClick={handleShare} className={styles.secondaryAction}>
                  {copied ? <CheckCircle2 size={18} color="#094D2E" /> : <Share2 size={18} />}
                  <span>{copied ? 'Link Copied!' : 'Share Saree'}</span>
                </button>

                <a
                  href="https://instagram.com/sakhimangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryAction}
                >
                  <Instagram size={18} />
                  <span>View on Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className={styles.relatedSection}>
            <h2 className={styles.sectionTitle}>You May Also Admire</h2>
            <div className={styles.productGrid}>
              {relatedProducts.map((p, idx) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onQuickView={(prod) => setSelectedQuickView(prod)}
                  index={idx}
                />
              ))}
            </div>
          </section>
        )}

        {/* Recently Viewed Products */}
        {recentlyViewed.length > 1 && (
          <section className={styles.relatedSection} style={{ marginTop: '4rem' }}>
            <h2 className={styles.sectionTitle}>Recently Viewed Drapes</h2>
            <div className={styles.productGrid}>
              {recentlyViewed
                .filter((p) => p.id !== product.id)
                .map((p, idx) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    onQuickView={(prod) => setSelectedQuickView(prod)}
                    index={idx}
                  />
                ))}
            </div>
          </section>
        )}
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={selectedQuickView}
        onClose={() => setSelectedQuickView(null)}
      />
    </div>
  );
}
