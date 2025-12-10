"use client";

import dynamic from "next/dynamic";
import FloatingNav from "@/components/FloatingNav";

import MainPage from "@/components/MainPage";
import Gallery from "@/components/Gallery";
const Themes = dynamic(
  () => import("@/components/ThemesSection/ThemesSection"),
  { ssr: false }
);

export default function Page() {
  return (
    <>
      <FloatingNav />
      <MainPage />
      <Themes />
      <Gallery />
    </>
  );
}

