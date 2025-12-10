import MainPage from "@/components/MainPage";

import Gallery from "@/components/Gallery";
import MissionBriefing from "@/components/MissionBriefing";

import Themes from "@/components/ThemesSection/ThemesSection";

import Testimonials from "@/components/Testimonials/Testimonials";
export default function Page() {
  return (
    <>
      <MainPage />
      <MissionBriefing />
      <Gallery />
      <Themes />
      
      <Testimonials />
    </>
  );
}

