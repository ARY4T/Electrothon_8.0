"use client";

import styles from "@/styles/comingsoon.module.css";
import heroStyles from "@/styles/hero.module.css";

export default function ComingSoon() {
  return (
    <section className={styles.comingSoon} id="coming-soon">
      <div className={styles.container}>
  <h2 className={`${styles.title} ${heroStyles.title}`}>COMING SOON</h2>

        <p className={styles.description}>
          We're making this iteration much better and bigger than last year — new
          challenges, bigger prizes, and more surprises are on the way. Stay tuned
          with us for updates, dates, and registration details. Follow our social
          channels or check back here soon so you don't miss the launch!
        </p>

        {/* CTA removed per request */}
      </div>
    </section>
  );
}
