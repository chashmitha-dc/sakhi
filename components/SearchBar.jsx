'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { products } from '@/data/products';
import { categories } from '@/data/categories';
import styles from './SearchBar.module.css';

export default function SearchBar({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const popularSearches = [
    'Bridal Silk',
    'Kanchipuram',
    'Banarasi',
    'Festive Wear'
  ];

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase().trim();

    // Filter products
    const matchedProducts = products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.fabric.toLowerCase().includes(q) ||
        p.material.toLowerCase().includes(q) ||
        p.collection.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.productCode.toLowerCase().includes(q)
    );

    // Filter categories
    const matchedCategories = categories.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.slug.toLowerCase().includes(q)
    );

    setResults({
      categories: matchedCategories,
      products: matchedProducts
    });
  }, [query]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className={styles.backdrop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={styles.modalContainer}
          initial={{ scale: 0.95, y: -20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: -20 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Input Header */}
          <div className={styles.searchHeader}>
            <Search size={20} color="#C89B3C" className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search for sarees..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
              className={styles.searchInput}
            />
            <button onClick={onClose} className={styles.closeBtn} aria-label="Close search">
              <X size={22} />
            </button>
          </div>

          <div className={styles.modalBody}>
            {/* Popular Searches when query is empty */}
            {!query.trim() && (
              <div className={styles.popularSection}>
                <div className={styles.popularHeader}>
                  <Sparkles size={14} color="#C89B3C" />
                  <span>Popular Searches</span>
                </div>
                <div className={styles.tagsGroup}>
                  {popularSearches.map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className={styles.tagBtn}
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Search Results */}
            {query.trim() && (
              <div className={styles.resultsContainer}>
                <h4 className={styles.resultsTitle}>Results</h4>

                {results.categories?.length === 0 && results.products?.length === 0 && (
                  <div className={styles.noResults}>
                    No sarees found matching "{query}". Try searching for "Bridal", "Banarasi", or "Silk".
                  </div>
                )}

                {/* Matching Collections / Categories */}
                {results.categories?.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/collections/${cat.slug}`}
                    onClick={onClose}
                    className={styles.resultItem}
                  >
                    <div className={styles.thumb}>
                      <Image src={cat.image} alt={cat.name} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className={styles.info}>
                      <h4 className={styles.name}>{cat.name}</h4>
                      <p className={styles.meta}>Collection • {cat.productCount} Sarees</p>
                    </div>
                    <ArrowRight size={16} color="#C89B3C" />
                  </Link>
                ))}

                {/* Matching Products */}
                {results.products?.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.id}`}
                    onClick={onClose}
                    className={styles.resultItem}
                  >
                    <div className={styles.thumb}>
                      <Image src={product.images[0]} alt={product.name} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className={styles.info}>
                      <h4 className={styles.name}>{product.name}</h4>
                      <p className={styles.meta}>{product.fabric} • {product.category}</p>
                    </div>
                    <span className={styles.price}>₹{product.price.toLocaleString('en-IN')}</span>
                    <ArrowRight size={16} color="#8C827A" />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
