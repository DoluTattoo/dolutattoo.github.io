import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export function HeroButtons({ primaryTo, primaryLabel, downloadHref, downloadLabel = 'Download' }) {
  return (
    <div className={styles.actions}>
      {primaryTo && (
        <Link className={styles.primaryBtn} to={primaryTo}>
          {primaryLabel}
          <svg className={styles.btnIcon} viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path fill="currentColor" d="M13.5 4.5 21 12l-7.5 7.5-1.4-1.4 5-5.1H3v-2h14.1l-5-5.1 1.4-1.4Z" />
          </svg>
        </Link>
      )}
      {downloadHref && (
        <Link className={styles.secondaryBtn} href={downloadHref}>
          <svg className={styles.btnIcon} viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path fill="currentColor" d="M12 16 7 11l1.4-1.4 2.6 2.6V3h2v9.2l2.6-2.6L17 11l-5 5Zm-7 4v-5h2v3h10v-3h2v5H5Z" />
          </svg>
          {downloadLabel}
        </Link>
      )}
    </div>
  );
}

export default function PageHero({ title, tagline, children }) {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>{title}</h1>
      {tagline && <p className={styles.tagline}>{tagline}</p>}
      {children}
    </div>
  );
}
