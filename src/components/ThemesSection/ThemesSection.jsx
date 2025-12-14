"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  // sizing
  const expandedWidth = "34%";
  const collapsedWidth = "11%";
  const idleWidth = "14%";

  const anyActive = lockedIndex !== null || activeIndex !== null;
  const mobileCardHeight = "260px";

  // 🔽 dynamic spacing (THIS IS THE CHANGE YOU ASKED FOR)
  const desktopGap = anyActive ? "gap-2" : "gap-3";
  const gridGap = anyActive ? "gap-3" : "gap-4";
  const mobileGap = anyActive ? "gap-3" : "gap-4";

  return (
    <section
      id="themes"
      className="relative py-28 w-screen min-h-screen lg:min-h-[1000px] pt-[18vh] text-white overflow-hidden"
      style={
        isSmallScreen
          ? {}
          : {
              backgroundImage: 'url("/backgrounds/themes.png")',
              backgroundSize: "cover",
              backgroundPosition: "top center",
              backgroundRepeat: "no-repeat",
            }
      }
    >
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

      <div className="absolute inset-0 bg-black/10 z-0" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className={`${pressStart.className} text-[40px] sm:text-[56px] md:text-[64px] text-center font-bold`}
          style={{ textTransform: "uppercase", letterSpacing: "2px" }}
        >
          Themes
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, translateY: 30 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
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

              const forcedStyle =
                !isDesktop
                  ? {
                      width: "100%",
                      minWidth: "100%",
                      height: isSmallScreen ? mobileCardHeight : "460px",
                    }
                  : {};

              return (
                <motion.div
                  key={theme.id ?? idx}
                  initial={false}
                  animate={{ width: targetWidth }}
                  transition={{ duration: 0.32, ease: "easeInOut" }}
                  onMouseEnter={() => {
                    if (isDesktop && lockedIndex === null) {
                      setActiveIndex(idx);
                    }
                  }}
                  onMouseLeave={() => {
                    if (isDesktop && lockedIndex === null) {
                      setActiveIndex(null);
                    }
                  }}
                  onClick={() => {
                    setLockedIndex((prev) =>
                      prev === idx ? null : idx
                    );
                  }}
                  className="relative h-[460px] min-w-[80px] flex-shrink-0 rounded-3xl overflow-hidden border border-white/10 bg-black cursor-pointer"
                  style={forcedStyle}
                >
                  {/* Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={theme.img1}
                      alt={theme.heading}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Collapsed overlay */}
                  <AnimatePresence>
                    {!isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"
                      />
                    )}
                  </AnimatePresence>

                  {/* Text */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                    {!isActive ? (
                      <div className="w-full flex justify-center items-center">
                        <h3
                          className={`
                            ${orbitron.className}
                            ${
                              anyActive && isDesktop
                                ? "text-xs md:text-sm"
                                : "text-base md:text-lg"
                            }
                            font-semibold text-white/95 text-center
                          `}
                        >
                          {theme.heading}
                        </h3>
                      </div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.28 }}
                        className="absolute inset-x-0 bottom-0 rounded-b-3xl overflow-hidden"
                        style={{ maxHeight: "60%" }}
                      >
                        {/* BLUR + GRADIENT */}
                        <div
                          className="
                            absolute inset-0
                            backdrop-blur-2xl
                            bg-gradient-to-t
                            from-black/85
                            via-black/45
                            to-transparent
                          "
                        />

                        {/* CONTENT */}
                        <div className="relative z-10 p-5 overflow-auto">
                          <h3
                            className={`${orbitron.className} text-xl md:text-2xl font-bold text-center mb-2`}
                          >
                            {theme.heading}
                          </h3>

                          <p className="text-sm text-white/90 leading-relaxed">
                            {theme.content}
                          </p>

                          {theme.prize_amt && (
                            <p className="mt-3 text-sm text-white/80">
                              Prize: {theme.prize_amt}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )}
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