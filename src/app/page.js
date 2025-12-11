import MainPage from "@/components/MainPage";
import MissionBriefing from "@/components/MissionBriefing";
import Themes from "@/components/ThemesSection/ThemesSection";
import Testimonials from "@/components/Testimonials/Testimonials";
import Timeline from "@/components/Timeline/timeline";
import GalleryPage from "@/components/gallery/gallery";
export default function Page() {
  return (
    <>
      <MainPage />
      <MissionBriefing />
      <Themes />
      <Timeline /> 
      <GalleryPage />       
      <Testimonials />
    </>
  );
}


