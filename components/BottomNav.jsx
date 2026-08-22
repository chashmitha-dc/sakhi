'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Layers, Search, PhoneCall, Menu } from 'lucide-react';
import styles from './BottomNav.module.css';

export default function BottomNav({ onOpenSearch, onOpenMenu }) {
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Collections', path: '/collections', icon: Layers },
    { 
      label: 'Search', 
      isAction: true, 
      action: onOpenSearch, 
      icon: Search 
    },
    { label: 'Contact', path: '/contact', icon: PhoneCall },
    { 
      label: 'Menu', 
      isAction: true, 
      action: onOpenMenu, 
      icon: Menu 
    },
  ];

  return (
    <nav className={styles.bottomNavContainer} aria-label="Mobile Bottom Navigation">
      <div className={styles.bottomNavGrid}>
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = !item.isAction && (
            item.path === '/' 
              ? pathname === '/' 
              : pathname.startsWith(item.path)
          );

          if (item.isAction) {
            return (
              <button
                key={item.label}
                onClick={item.action}
                className={styles.navItemBtn}
                aria-label={item.label}
              >
                <IconComponent size={20} className={styles.icon} />
                <span className={styles.label}>{item.label}</span>
              </button>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.path}
              className={`${styles.navItemLink} ${isActive ? styles.activeNavItem : ''}`}
            >
              <IconComponent size={20} className={styles.icon} />
              <span className={styles.label}>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
