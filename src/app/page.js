"use client";

import { useState, useEffect } from "react";
import MainPage from "../components/MainPage/MainPage";
import MissionBriefing from "@/components/MissionBriefing";
import GalleryPage from "@/components/gallery/gallery";
import Themes from "@/components/ThemesSection/ThemesSection";
import ComingSoon from "@/components/ComingSoon";
import Sponsors from "@/components/Sponsors";
import Timeline from "@/components/Timeline/timeline";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQList from "@/components/FAQList";
import Footer from "@/components/Footer";
import AboutUsAchievementWith3D from "@/components/MissionBriefing/AboutUsAchievementWith3D";

export default function Page() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <MainPage />
      {isMobile ? (
        <MissionBriefing />
      ) : (
        <div
          style={{
            minHeight: "100vh",
            background: "url('/sections/mission-briefing-bg.png') center / cover no-repeat",
          }}
        >
          <AboutUsAchievementWith3D />
        </div>
      )}
      <GalleryPage />
      <Themes />
      <ComingSoon />
      <Sponsors />
      <Timeline />
      <Testimonials />
      <FAQList />
      <Footer />
    </>
  );
}