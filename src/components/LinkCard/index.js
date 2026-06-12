import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export function LinkCard({ to, href, icon, title, description, badge, badgeVariant = 'primary' }) {
  return (
    <Link to={to} href={href} className={styles.linkCard}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.text}>
        <span className={styles.title}>
          {title}
          {badge && (
            <span className={`${styles.badge} ${styles[`badge--${badgeVariant}`]}`}>{badge}</span>
          )}
        </span>
        <span className={styles.description}>{description}</span>
      </span>
      <span className={styles.arrow}>›</span>
    </Link>
  );
}

export function LinkCardGrid({ children }) {
  return <div className={styles.grid}>{children}</div>;
}
