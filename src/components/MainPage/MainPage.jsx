"use client";

import Image from "next/image";
import styles from "@/styles/hero.module.css";
import PillNav from "@/components/MainPage/Navbar";
import TargetCursor from "@/components/TargetCursor";
import specLogo from "@/assets/images/spec-logo.png";
import Devfolio_Button from "./DevfolioButton";

export default function MainPage() {
  return (
    <>
      <TargetCursor targetSelector=".cursor-target" />

      <div className={styles.heroWrapper}>
        <video
          className={styles.backgroundVideo}
          src="/videos/bg.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className={styles.overlay} />

        <div className={styles.logoWrapper}>
          <Image src={specLogo} alt="SPEC Logo" width={150} height={150} />
        </div>

        <PillNav />

        <div className={styles.centerText}>
          <h1 className={styles.title}>
            <span className="whitespace-nowrap">
              ELECTROTHON
            </span> <span className={styles.version}>8.0</span>
          </h1>
          <h2 className={styles.subtitle}>LABYRINTH OF ETERNUM</h2>
          <Devfolio_Button />
        </div>
      </div>
    </>
  );
}