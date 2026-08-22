import React from 'react';
import styles from './Loading.module.css';

export default function Loading() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.spinner} />
      <span className={styles.brandText}>SAKHI MANGALORE</span>
    </div>
  );
}
