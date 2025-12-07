import Image from "next/image";
import styles from "../styles/hero.module.css";

import specLogo from "@/assets/images/spec-logo.png";

export default function Home() {
  return (
    <div className={styles.heroWrapper}>

      <video
  className={styles.backgroundVideo}
  src="/videos/bg.mp4"
  autoPlay
  loop
  muted
  playsInline
/>

<div className={styles.overlay}></div>


      <div className={styles.logoWrapper}>
        <Image src={specLogo} alt="SPEC Logo" width={150} height={150} />
      </div>

      <nav className={styles.navbar}>
        <ul className={styles.centerNav}>
          <li>SCHEDULE</li>
          <li>SPONSORS</li>
          <li>THEMES</li>
          <li>PRIZES</li>
          <li>FAQS</li>
          <li>CONTACT US</li>
        </ul>
      </nav>

      <div className={styles.centerText}>
        <h1 className={styles.title}>ELECTROTHON 8.0</h1>
        <h2 className={styles.subtitle}>LABYRINTH OF ETERNUM</h2>

        <button className={styles.ctaButton}>
          Register Here
        </button>
      </div>

    </div>
  );
}
