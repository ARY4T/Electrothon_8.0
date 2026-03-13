"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Press_Start_2P, Orbitron } from "next/font/google";

// Dynamic import to avoid SSR issues
const JudgesGallery = dynamic(() => import("./JudgesGallery"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-cyan-400 animate-pulse">Loading...</div>
    </div>
  ),
});

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  weight: ["400", "700"],
  subsets: ["latin"],
});

// Judges data - Add your images to /public/judges/ folder
// Then update the paths below (e.g., "/judges/judge1.png")
const judgesData = [
  {
    image: "/judges/gojo.png",
    title: "Judge 1",
    caption: "CEO, Tech Corp",
  },
  {
    image: "/judges/sukuna.webp",
    title: "Judge 2",
    caption: "CTO, Startup Inc",
  },
  {
    image: "/judges/gojo.png",
    title: "Judge 3",
    caption: "Founder, Innovation Labs",
  },
  {
    image: "/judges/sukuna.webp",
    title: "Judge 4",
    caption: "Director, AI Research",
  },
  {
    image: "/judges/gojo.png",
    title: "Judge 5",
    caption: "VP Engineering, DevCo",
  },
];

export default function JudgesSection() {
  return (
    <section className="judges-section relative w-full py-16 text-white">
      {/* Content */}
      <div className="relative z-10">
        {/* Title */}
        <div className="text-center mb-8 px-4">
          <h2
            className={`${pressStart.className} text-[clamp(1.6rem,5vw,3.75rem)] text-white tracking-wider`}
            style={{
              textShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
            }}
          >
            JUDGES
          </h2>
        </div>

        {/* Judges Gallery Container */}
        <div className="relative w-full px-4">
          <JudgesGallery judges={judgesData} />
        </div>
      </div>
    </section>
  );
}
