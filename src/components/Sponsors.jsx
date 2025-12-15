"use client";

import Image from 'next/image';
import './Timeline/timeline.css';
import styles from './Sponsors.module.css';
import devfolioLogo from '@/assets/images/Devfolio_Logo-White.png';
import ethLogo from '@/assets/images/ethindia-light.png';

const sponsorsList = [
  { name: 'Devfolio', logo: devfolioLogo, url: 'https://devfolio.co', alt: 'DEVFOLIO LOGO' },
  { name: 'EthIndia', logo: ethLogo, url: 'https://ethindia.co', alt: 'ETHINDIA LOGO' },
];

export default function Sponsors() {
  return (
    <div id="sponsors" className="timeline-container">
      <div className="header-section" style={{ position: 'relative', paddingTop: 90 }}>
        <h1 className="modern-title">OUR SPONSORS</h1>
      </div>

      <div className="game-layout" style={{ padding: '3rem 1rem 4rem' }}>
        <div className={styles.sponsorGrid}>
          {sponsorsList.map((s, i) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`holo-card ${styles.tile}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className={styles.tileLogo}>
                <Image src={s.logo} alt={s.alt} width={260} height={120} className={styles.tileImage} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}