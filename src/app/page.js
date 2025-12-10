"use client";

import dynamic from "next/dynamic";
import MainPage from "@/components/MainPage";

import Gallery from "@/components/Gallery";
import MissionBriefing from "@/components/MissionBriefing";

const Themes = dynamic(
  () => import("@/components/ThemesSection/ThemesSection"),
  { ssr: false }
);

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

