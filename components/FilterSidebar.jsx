'use client';

import React from 'react';
import { SlidersHorizontal, RotateCcw, Check } from 'lucide-react';
import styles from './FilterSidebar.module.css';

export default function FilterSidebar({
  filters,
  onFilterChange,
  onReset,
  categories = [],
  collections = []
}) {
  const colours = [
    { name: 'Red', hex: '#800020' },
    { name: 'Blue', hex: '#002B49' },
    { name: 'Green', hex: '#094D2E' },
    { name: 'Yellow', hex: '#CC8800' },
    { name: 'Pink', hex: '#E8C5C8' },
    { name: 'Purple', hex: '#4B0082' },
    { name: 'Ivory', hex: '#F8F5F0' },
    { name: 'Gold', hex: '#C89B3C' }
  ];

  const materials = [
    'Mulberry Silk',
    'Kanchipuram Silk',
    'Banarasi Silk',
    'Chanderi Silk Cotton',
    'Organza Silk',
    'Pure Linen',
    'Raw Silk',
    'Tussar Silk'
  ];

  const occasions = [
    'Bridal / Wedding Muhurtham',
    'Wedding / Reception',
    'Haldi / Sangeet',
    'Puja / Temple Ceremonies',
    'Festive / Engagement',
    'Cocktail / Evening Party',
    'Summer Festive'
  ];

  const toggleMaterial = (mat) => {
    const current = filters.materials || [];
    const updated = current.includes(mat)
      ? current.filter((m) => m !== mat)
      : [...current, mat];
    onFilterChange('materials', updated);
  };

  const toggleOccasion = (occ) => {
    const current = filters.occasions || [];
    const updated = current.includes(occ)
      ? current.filter((o) => o !== occ)
      : [...current, occ];
    onFilterChange('occasions', updated);
  };

  return (
    <aside className={styles.sidebar}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          <SlidersHorizontal size={18} />
          <span>Filters</span>
        </h2>
        <button onClick={onReset} className={styles.resetBtn}>
          Reset All
        </button>
      </div>

      {/* Price Slider */}
      <div className={styles.filterGroup}>
        <label className={styles.groupLabel}>Price Range</label>
        <input
          type="range"
          min="5000"
          max="90000"
          step="1000"
          value={filters.maxPrice || 90000}
          onChange={(e) => onFilterChange('maxPrice', Number(e.target.value))}
          className={styles.priceSlider}
        />
        <div className={styles.priceLabels}>
          <span>Min: ₹5,000</span>
          <span>Max: ₹{(filters.maxPrice || 90000).toLocaleString('en-IN')}</span>
        </div>
      </div>

      {/* Colour Filter */}
      <div className={styles.filterGroup}>
        <label className={styles.groupLabel}>Colour Swatches</label>
        <div className={styles.colourGrid}>
          {colours.map((c) => {
            const selected = filters.colour === c.name;
            return (
              <button
                key={c.name}
                onClick={() => onFilterChange('colour', selected ? '' : c.name)}
                className={`${styles.colourSwatch} ${selected ? styles.selectedSwatch : ''}`}
                style={{ backgroundColor: c.hex }}
                title={c.name}
                aria-label={`Filter by ${c.name}`}
              >
                {selected && <Check size={14} color="#FFF" style={{ margin: 'auto' }} />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Collection Filter */}
      <div className={styles.filterGroup}>
        <label className={styles.groupLabel}>Collection</label>
        <select
          value={filters.collection || ''}
          onChange={(e) => onFilterChange('collection', e.target.value)}
          className={styles.selectInput}
        >
          <option value="">All Collections</option>
          {collections.map((col) => (
            <option key={col.id} value={col.slug}>
              {col.name}
            </option>
          ))}
        </select>
      </div>

      {/* Material Filter Checkboxes */}
      <div className={styles.filterGroup}>
        <label className={styles.groupLabel}>Material & Weave</label>
        <div className={styles.checkboxList}>
          {materials.map((mat) => {
            const isChecked = (filters.materials || []).includes(mat);
            return (
              <div
                key={mat}
                onClick={() => toggleMaterial(mat)}
                className={styles.checkboxItem}
              >
                <div className={`${styles.customCheckbox} ${isChecked ? styles.checkedCheckbox : ''}`}>
                  {isChecked && <Check size={12} />}
                </div>
                <span>{mat}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Occasion Filter */}
      <div className={styles.filterGroup}>
        <label className={styles.groupLabel}>Occasion</label>
        <div className={styles.checkboxList}>
          {occasions.map((occ) => {
            const isChecked = (filters.occasions || []).includes(occ);
            return (
              <div
                key={occ}
                onClick={() => toggleOccasion(occ)}
                className={styles.checkboxItem}
              >
                <div className={`${styles.customCheckbox} ${isChecked ? styles.checkedCheckbox : ''}`}>
                  {isChecked && <Check size={12} />}
                </div>
                <span>{occ}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Availability Filter */}
      <div className={styles.filterGroup}>
        <label className={styles.groupLabel}>Availability</label>
        <select
          value={filters.availability || ''}
          onChange={(e) => onFilterChange('availability', e.target.value)}
          className={styles.selectInput}
        >
          <option value="">All Statuses</option>
          <option value="In Stock">Ready to Ship (In Stock)</option>
          <option value="Limited Edition">Limited Edition</option>
          <option value="Made to Order">Made to Order</option>
        </select>
      </div>
    </aside>
  );
}
