"use client";

import Cards from "./Cards";
import Data from "@/assets/testimonials_data/testimonials_data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Testimonials() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const headingY = useTransform(scrollYProgress, [0, 0.08], ["0vh", "4vh"]);

  const headingOpacity = useTransform(scrollYProgress, [0.6, 1], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="
        relative w-screen
        min-h-[260vh] sm:min-h-[280vh] md:min-h-[300vh]
        pt-[14vh] sm:pt-[16vh] md:pt-[18vh]
      "
      style={{
        backgroundImage: "url('/backgrounds/bg3.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "100% calc(100% + 11vh)",
      }}
    >
      <div
        className="
      pointer-events-none
      absolute top-0 left-0 w-full
      h-[12vh] sm:h-[14vh] md:h-[16vh]
      z-[1]
    "
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0))",
        }}
      />

      {/*  BOTTOM BLEND OVERLAY */}
      <div
        className="
      pointer-events-none
      absolute bottom-0 left-0 w-full
      h-[14vh] sm:h-[16vh] md:h-[18vh]
      z-[1]
    "
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0))",
        }}
      />
      {/* HEADING */}
      <motion.h1
        style={{
          y: headingY,
          opacity: headingOpacity,
          position: "sticky",
          top: "10vh",
          zIndex: 5,
          fontFamily: '"Press Start 2P", cursive',
        }}
        className="
          text-white
          text-4xl sm:text-5xl md:text-6xl
          font-extrabold tracking-wider
          text-center
          mb-[20vh] sm:mb-[22vh] md:mb-[24vh]
        "
      >
        TESTIMONIALS
      </motion.h1>

      {/* CARDS */}
      <div className="relative flex flex-col items-center gap-[6vh]">
        {Data.map((item, index) => (
          <Cards key={item.id} data={item} index={index} />
        ))}
      </div>

      {/* BOTTOM BREATHING SPACE */}
      <div className="h-[35vh] sm:h-[40vh] md:h-[45vh]" />
    </section>
  );
}
