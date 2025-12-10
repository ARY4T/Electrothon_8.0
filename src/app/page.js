"use client";

import dynamic from "next/dynamic";
import MainPage from "@/components/MainPage";
import MissionBriefing from "@/components/MissionBriefing";

const Themes = dynamic(
  () => import("@/components/ThemesSection/ThemesSection"),
  { ssr: false }
);

export default function Page() {
  return (
    <>
      <MainPage />
      <MissionBriefing />
      <Themes />
    </>
  );
}

