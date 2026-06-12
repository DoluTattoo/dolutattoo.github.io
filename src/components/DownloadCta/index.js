import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function DownloadCta({ showInstallLink = true }) {
  return (
    <div className={styles.cta}>
      <div className={styles.ctaText}>
        <strong>Get Dolu Tool</strong>
        <span>Free and open source, ready in minutes.</span>
      </div>
      <div className={styles.ctaActions}>
        <Link
          className={styles.primaryBtn}
          href="https://github.com/dolutattoo/dolu_tool/releases/latest"
        >
          <svg className={styles.btnIcon} viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path fill="currentColor" d="M12 16 7 11l1.4-1.4 2.6 2.6V3h2v9.2l2.6-2.6L17 11l-5 5Zm-7 4v-5h2v3h10v-3h2v5H5Z" />
          </svg>
          Download latest release
        </Link>
        {showInstallLink && (
          <Link className={styles.secondaryBtn} to="/docs/dolu_tool/installation">
            Installation guide
            <svg className={styles.btnIcon} viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path fill="currentColor" d="M13.5 4.5 21 12l-7.5 7.5-1.4-1.4 5-5.1H3v-2h14.1l-5-5.1 1.4-1.4Z" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}
