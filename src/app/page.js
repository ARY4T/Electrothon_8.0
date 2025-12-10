import Image from "next/image";
import styles from "../styles/hero.module.css";
import missionStyles from "../styles/mission.module.css"; 
import FloatingNav from "@/components/FloatingNav";
import specLogo from "@/assets/images/spec-logo.png";
import MissionBriefing from "@/components/MissionBriefing";

export default function Home() {
  return (
    <>
      {/* 🚀 HERO SECTION ONLY */}
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
          <FloatingNav />
        </nav>

        <div className={styles.centerText}>
          <h1 className={styles.title}>ELECTROTHON 8.0</h1>
          <h2 className={styles.subtitle}>LABYRINTH OF ETERNUM</h2>

          <button className={styles.ctaButton}>Register Here</button>
        </div>
      </div>

      <section
  id="mission-briefing"
  style={{
    backgroundImage: 'url("/sections/mission-briefing-bg.png")',
    backgroundSize: "cover",
    backgroundPosition: "top center",
    backgroundRepeat: "no-repeat",
  }}
  className={styles.missionSection}
>

        <div className={missionStyles.missionOverlay}>

          <div className={missionStyles.missionContent}>
            <MissionBriefing />
          </div>
        </div>
      </section>
    </>
  );
}
