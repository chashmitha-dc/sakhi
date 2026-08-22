'use client';

import React, { useState, useMemo, use } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import FilterSidebar from '@/components/FilterSidebar';
import ProductCard from '@/components/ProductCard';
import QuickViewModal from '@/components/QuickViewModal';
import { products } from '@/data/products';
import { categories, collections } from '@/data/categories';
import { ChevronRight, SlidersHorizontal, ArrowUpDown, X, Check } from 'lucide-react';
import styles from './page.module.css';

export default function CategoryPage({ params }) {
  const resolvedParams = use(params);
  const categorySlug = resolvedParams.category;

  const currentCategory = categories.find((c) => c.slug === categorySlug) || {
    name: categorySlug === 'all' ? 'All Saree Collections' : categorySlug.replace(/-/g, ' ').toUpperCase(),
    description: 'Explore our full luxury catalogue of authentic handloom and silk mark certified sarees.'
  };

  const currentCollection = collections.find((col) => col.slug === categorySlug);

  // Filter State
  const [filters, setFilters] = useState({
    maxPrice: 90000,
    colour: '',
    collection: currentCollection ? currentCollection.slug : '',
    materials: [],
    occasions: [],
    availability: ''
  });

  const [sortOption, setSortOption] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedQuickView, setSelectedQuickView] = useState(null);

  // Mobile Bottom Sheet States
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [mobileSortOpen, setMobileSortOpen] = useState(false);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleResetFilters = () => {
    setFilters({
      maxPrice: 90000,
      colour: '',
      collection: '',
      materials: [],
      occasions: [],
      availability: ''
    });
    setSearchQuery('');
    setSortOption('featured');
  };

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.maxPrice < 90000) count++;
    if (filters.colour) count++;
    if (filters.collection) count++;
    if (filters.materials.length > 0) count += filters.materials.length;
    if (filters.occasions.length > 0) count += filters.occasions.length;
    if (filters.availability) count++;
    return count;
  }, [filters]);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      // Category slug match (if not 'all')
      if (categorySlug !== 'all' && !currentCollection) {
        if (item.category.toLowerCase() !== categorySlug.toLowerCase()) {
          return false;
        }
      }

      // Max price slider
      if (item.price > filters.maxPrice) return false;

      // Colour swatch
      if (filters.colour && !item.colour.toLowerCase().includes(filters.colour.toLowerCase())) {
        return false;
      }

      // Collection selector
      if (filters.collection && item.collection.toLowerCase() !== filters.collection.toLowerCase()) {
        return false;
      }

      // Materials multiselect
      if (filters.materials.length > 0) {
        const matchesMat = filters.materials.some((m) =>
          item.material.toLowerCase().includes(m.toLowerCase()) ||
          item.fabric.toLowerCase().includes(m.toLowerCase())
        );
        if (!matchesMat) return false;
      }

      // Occasions multiselect
      if (filters.occasions.length > 0) {
        const matchesOcc = filters.occasions.some((o) =>
          item.occasion.toLowerCase().includes(o.toLowerCase())
        );
        if (!matchesOcc) return false;
      }

      // Availability status
      if (filters.availability && item.availability.toLowerCase() !== filters.availability.toLowerCase()) {
        return false;
      }

      // Instant text search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesQuery =
          item.name.toLowerCase().includes(q) ||
          item.fabric.toLowerCase().includes(q) ||
          item.collection.toLowerCase().includes(q) ||
          item.productCode.toLowerCase().includes(q);
        if (!matchesQuery) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortOption === 'low-to-high') return a.price - b.price;
      if (sortOption === 'high-to-low') return b.price - a.price;
      if (sortOption === 'newest') return (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0);
      if (sortOption === 'popular') return b.rating - a.rating;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0); // 'featured'
    });
  }, [categorySlug, currentCollection, filters, sortOption, searchQuery]);

  const sortOptionsList = [
    { label: 'Featured', value: 'featured' },
    { label: 'Newest Arrivals', value: 'newest' },
    { label: 'Most Popular', value: 'popular' },
    { label: 'Price: Low to High', value: 'low-to-high' },
    { label: 'Price: High to Low', value: 'high-to-low' },
  ];

  return (
    <div className={styles.pageContainer}>
      {/* Category Banner */}
      <div className={styles.categoryBanner}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/" className={styles.breadcrumbLink}>Home</Link>
            <ChevronRight size={14} />
            <Link href="/collections" className={styles.breadcrumbLink}>Collections</Link>
            <ChevronRight size={14} />
            <span>{currentCategory.name}</span>
          </div>

          <h1 className={styles.categoryTitle}>{currentCategory.name}</h1>
          <p className={styles.categoryDesc}>{currentCategory.description}</p>
        </div>
      </div>

      <div className="container">
        {/* Mobile Sticky FILTER / SORT Action Bar */}
        <div className={styles.mobileActionBar}>
          <button 
            onClick={() => setMobileFilterOpen(true)} 
            className={styles.mobileActionBtn}
          >
            <SlidersHorizontal size={16} />
            <span>FILTER</span>
            {activeFilterCount > 0 && (
              <span className={styles.filterBadgeCount}>{activeFilterCount}</span>
            )}
          </button>

          <div className={styles.actionDivider} />

          <button 
            onClick={() => setMobileSortOpen(true)} 
            className={styles.mobileActionBtn}
          >
            <ArrowUpDown size={16} />
            <span>SORT</span>
          </button>
        </div>

        <div className={styles.layoutGrid}>
          {/* Left Side: Desktop Filter Sidebar */}
          <div className={styles.desktopSidebarWrapper}>
            <FilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              onReset={handleResetFilters}
              categories={categories}
              collections={collections}
            />
          </div>

          {/* Right Side: Desktop Search, Sort Controls & Product Grid */}
          <div>
            {/* Top Bar Controls (Desktop) */}
            <div className={styles.topControls}>
              <span className={styles.countText}>
                Showing {filteredProducts.length} Luxury Sarees
              </span>

              <div className={styles.rightControls}>
                {/* Search Bar Input */}
                <input
                  type="text"
                  placeholder="Instant filter by fabric or name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    padding: '0.6rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border-gold)',
                    background: 'var(--color-cream-light)',
                    fontSize: '0.875rem',
                    outline: 'none'
                  }}
                />

                {/* Desktop Sort Dropdown */}
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className={styles.sortSelect}
                >
                  <option value="featured">Featured First</option>
                  <option value="low-to-high">Price: Low to High</option>
                  <option value="high-to-low">Price: High to Low</option>
                  <option value="newest">Newest Arrivals</option>
                  <option value="popular">Most Popular</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className={styles.productGrid}>
                {filteredProducts.map((product, idx) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={(p) => setSelectedQuickView(p)}
                    index={idx}
                  />
                ))}
              </div>
            ) : (
              <div className={styles.noProducts}>
                <h3 className={styles.noProductsTitle}>No Sarees Match Your Filter Criteria</h3>
                <p className={styles.noProductsDesc}>
                  Try adjusting your price range, colour selections, or material options.
                </p>
                <button onClick={handleResetFilters} className={styles.resetBtn}>
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile FILTER Bottom Sheet */}
      <AnimatePresence>
        {mobileFilterOpen && (
          <>
            <motion.div
              className={styles.bottomSheetBackdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileFilterOpen(false)}
            />
            <motion.div
              className={styles.bottomSheetModal}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            >
              <div className={styles.sheetHeader}>
                <div className={styles.sheetTitleGroup}>
                  <SlidersHorizontal size={18} color="#C89B3C" />
                  <h3 className={styles.sheetTitle}>Filter Catalogue</h3>
                </div>
                <button 
                  onClick={() => setMobileFilterOpen(false)}
                  className={styles.closeSheetBtn}
                >
                  <X size={20} />
                </button>
              </div>

              <div className={styles.sheetBody}>
                <FilterSidebar
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  onReset={handleResetFilters}
                  categories={categories}
                  collections={collections}
                />
              </div>

              <div className={styles.sheetFooter}>
                <button onClick={handleResetFilters} className={styles.sheetResetBtn}>
                  Reset
                </button>
                <button onClick={() => setMobileFilterOpen(false)} className={styles.sheetApplyBtn}>
                  Apply Filters ({filteredProducts.length})
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile SORT Bottom Sheet */}
      <AnimatePresence>
        {mobileSortOpen && (
          <>
            <motion.div
              className={styles.bottomSheetBackdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileSortOpen(false)}
            />
            <motion.div
              className={styles.bottomSheetModal}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            >
              <div className={styles.sheetHeader}>
                <div className={styles.sheetTitleGroup}>
                  <ArrowUpDown size={18} color="#C89B3C" />
                  <h3 className={styles.sheetTitle}>Sort Sarees By</h3>
                </div>
                <button 
                  onClick={() => setMobileSortOpen(false)}
                  className={styles.closeSheetBtn}
                >
                  <X size={20} />
                </button>
              </div>

              <div className={styles.sortOptionsList}>
                {sortOptionsList.map((opt) => {
                  const isSelected = sortOption === opt.value;
                  return (
                    <button
                      key={opt.value}
                      onClick={() => {
                        setSortOption(opt.value);
                        setMobileSortOpen(false);
                      }}
                      className={`${styles.sortOptionBtn} ${isSelected ? styles.selectedSortOption : ''}`}
                    >
                      <span>{opt.label}</span>
                      {isSelected && <Check size={18} color="#C89B3C" />}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Quick View Modal */}
      <QuickViewModal
        product={selectedQuickView}
        onClose={() => setSelectedQuickView(null)}
      />
    </div>
  );
}
