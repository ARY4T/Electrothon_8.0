// src/app/page.js
"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "../styles/hero.module.css";
import FloatingNav from "@/components/FloatingNav";
import specLogo from "@/assets/images/spec-logo.png";

const THEMES = dynamic(
  () => import("@/components/ThemesSection/ThemesSection.js"),
  { 
    ssr: false,
    loading: () => (
      <div className="min-h-[300px] bg-black bg-opacity-50 animate-pulse" />
    ),
  }
);

export default function Home() {
  return (
    <>
      {/* Your existing hero exactly as it is */}
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
  {/* <div className={styles.centerNav}> */}
    <FloatingNav />
  {/* </div> */}
</nav>


        <div className={styles.centerText}>
          <h1 className={styles.title}>ELECTROTHON 8.0</h1>
          <h2 className={styles.subtitle}>LABYRINTH OF ETERNUM</h2>

          <button className={styles.ctaButton}>
            Register Here
          </button>
        </div>
      </div>

      {/* ✅ Themes section appears below hero */}
      <THEMES />
    </>
  );
}