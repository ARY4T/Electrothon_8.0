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

export default function Page() {
  return (
    <>
      <MainPage />
      <MissionBriefing />
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