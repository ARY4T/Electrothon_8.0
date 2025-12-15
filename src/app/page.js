import Image from "next/image";
import styles from "@/styles/hero.module.css";
import Navbar from "@/components/Navbar";
import FAQList from "@/components/FAQList";
import Footer from "@/components/Footer";
import specLogo from "@/assets/images/spec-logo.png";
import TargetCursor from '@/components/TargetCursor';
import MissionBriefing from "@/components/MissionBriefing";
import Themes from "@/components/ThemesSection/ThemesSection";
import Testimonials from "@/components/Testimonials/Testimonials";
import Timeline from "@/components/Timeline/timeline";
import GalleryPage from "@/components/gallery/gallery";
import Devfolio_Button from "../components/Main Page/DevfolioButton";
import Sponsors from "@/components/Sponsors";

export default function Page() {
  return (
    <>
      <TargetCursor />
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

        {/* NEW NAVBAR */}
        <Navbar />

        <div className={styles.centerText}>
          <h1 className={styles.title}>ELECTROTHON 8.0</h1>
          <h2 className={styles.subtitle}>LABYRINTH OF ETERNUM</h2>

          <button>
            <Devfolio_Button />
          </button>
        </div>
      </div>

      <MissionBriefing />
      <GalleryPage />
      <Themes />
      <Sponsors />
      <Timeline />
      <Testimonials />
      <FAQList />
      <Footer />
    </>
  );
}

