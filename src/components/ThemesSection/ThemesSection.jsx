"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Press_Start_2P } from "next/font/google";
import { Orbitron } from "next/font/google";

import { tabData } from "./data";

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function ThemeSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [lockedIndex, setLockedIndex] = useState(null);

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      setIsSmallScreen(w <= 640);
      setIsMediumScreen(w > 640 && w <= 1100);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const isDesktop = !isSmallScreen && !isMediumScreen;

  const expandedWidth = "34%";
  const collapsedWidth = "11%";
  const idleWidth = "14%";

  const anyActive = lockedIndex !== null || activeIndex !== null;
  const mobileCardHeight = "260px";

  const desktopGap = anyActive ? "gap-2" : "gap-3";
  const gridGap = anyActive ? "gap-3" : "gap-4";
  const mobileGap = anyActive ? "gap-3" : "gap-4";

  return (
    <section
      id="themes"
      className="relative py-28 w-screen min-h-screen lg:min-h-[1000px] pt-[18vh] text-white overflow-hidden bg-cover bg-top"
      style={{
        backgroundImage: 'url("/backgrounds/themes.png")',
      }}
    >
      {/* ========= SMALL SCREEN OVERRIDE GRADIENT (COVERS IMAGE) ========= */}
      {isSmallScreen && (
        <div
          aria-hidden
          className="absolute inset-0 z-[0]"
          style={{
            background: `
              radial-gradient(circle at 20% 15%, rgba(180,0,255,0.28), transparent 42%),
              radial-gradient(circle at 80% 25%, rgba(0,255,255,0.2), transparent 48%),
              radial-gradient(circle at 50% 60%, rgba(255,0,180,0.16), transparent 55%),
              linear-gradient(
                to bottom,
                #2a0045 0%,
                #1a0030 35%,
                #0b0018 65%,
                #020004 100%
              )
            `,
          }}
        />
      )}

      {/* HEADER GLOW */}
      <div
        aria-hidden
        className="absolute top-0 left-0 w-full h-[22vh] z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(180,80,255,0.45), rgba(120,40,200,0.18), rgba(0,0,0,0))",
        }}
      />

      {/* BOTTOM FADE */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 w-full h-[22vh] z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0))",
        }}
      />

      {/* BASE OVERLAY */}
      <div
        className={`absolute inset-0 z-[0] ${
          isSmallScreen ? "bg-black/5" : "bg-black/10"
        }`}
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className={`${pressStart.className} text-[40px] sm:text-[56px] md:text-[64px] text-center font-bold`}
          style={{ letterSpacing: "2px" }}
        >
          THEMES
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, translateY: 30 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12 w-full"
        >
          <div
            className={
              isSmallScreen
                ? `flex flex-col ${mobileGap}`
                : isMediumScreen
                ? `grid grid-cols-3 ${gridGap} place-items-center`
                : `flex ${desktopGap} items-stretch justify-center`
            }
          >
            {tabData.map((theme, idx) => {
              const isActive = lockedIndex === idx || activeIndex === idx;

              const targetWidth = isDesktop
                ? anyActive
                  ? isActive
                    ? expandedWidth
                    : collapsedWidth
                  : idleWidth
                : "100%";

              const forcedStyle = !isDesktop
                ? {
                    width: "100%",
                    minWidth: "100%",
                    height: isSmallScreen ? mobileCardHeight : "460px",
                  }
                : {};

              return (
                <motion.div
                  key={theme.id}
                  animate={{ width: targetWidth }}
                  transition={{ duration: 0.32, ease: "easeInOut" }}
                  onMouseEnter={() =>
                    isDesktop && lockedIndex === null && setActiveIndex(idx)
                  }
                  onMouseLeave={() =>
                    isDesktop && lockedIndex === null && setActiveIndex(null)
                  }
                  onClick={() =>
                    setLockedIndex((prev) => (prev === idx ? null : idx))
                  }
                  className="relative h-[460px] rounded-3xl overflow-hidden border border-white/10 bg-black cursor-pointer"
                  style={forcedStyle}
                >
                  <Image
                    src={theme.img1}
                    alt={theme.heading}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 flex items-end p-6 z-10">
                    <h3
                      className={`${orbitron.className} text-base md:text-lg font-semibold text-white/95 text-center w-full`}
                    >
                      {theme.heading}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}