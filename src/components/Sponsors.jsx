"use client";

import Image from 'next/image';
import './Timeline/timeline.css'; 
import styles from './Sponsors.module.css';
import TargetCursor from './TargetCursor';

// --- LOGOS ---
import devfolioLogo from '@/assets/images/Devfolio_Logo-White.png';
import ethLogo from '@/assets/images/ethindia-light.png';
import balsamiqLogo from '@/assets/images/balsamiq.png'; 
import insforgeLogo from '@/assets/images/insforge.svg';
import interviewcakeLogo from '@/assets/images/interviewcake.png';

const sponsorsList = [
  { 
    name: 'Devfolio', 
    logo: devfolioLogo, 
    url: 'https://devfolio.co', 
    alt: 'Devfolio Logo',
    scale: 0.9
  },
  { 
    name: 'EthIndia', 
    logo: ethLogo, 
    url: 'https://ethindia.co', 
    alt: 'EthIndia Logo',
    scale: 1 ,
  },
  {
    name: 'Balsamiq', 
    logo: balsamiqLogo, 
    url: 'https://balsamiq.com', 
    alt: 'Balsamiq Logo',
    scale: 1.12,
    invert: true 
  },
  { 
    name: 'InsForge', 
    logo: insforgeLogo, 
    url: 'https://insforge.dev', 
    alt: 'InsForge Logo',
    scale: 1.9  
  },
  { 
    name: 'Interview Cake', 
    logo: interviewcakeLogo, 
    url: 'https://interviewcake.com', 
    alt: 'Interview Cake Logo',
    scale: 1.3 
  },
];

export default function Sponsors() {
  return (
    <div id="sponsors" className="timeline-container">
      <TargetCursor targetSelector=".cursor-target" />

      <div
        className="header-section flex flex-col items-center justify-center"
        style={{ position: "relative", paddingTop: 90 }}
      >
        <h1 className="modern-title text-center">
          OUR SPONSORS
        </h1>
      </div>

      <div className="game-layout" style={{ padding: '3rem 1rem 4rem' }}>
        <div className={styles.sponsorGrid}>
          {sponsorsList.map((s, i) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`cursor-target holo-card ${styles.tile}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className={styles.tileLogo}>
                <Image 
                  src={s.logo} 
                  alt={s.alt} 
                  width={300} 
                  height={150} 
                  className={styles.tileImage}
                  style={{ 
                    transform: `scale(${s.scale || 1})`,
                    // Your existing fix for the Balsamiq logo color
                    filter: s.invert ? 'brightness(0) invert(1)' : 'none'
                  }}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}