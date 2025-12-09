// src/components/ThemesSection/ThemesSection.js
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

import { tabData } from "./data";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function ThemeSection() {
  return (
    <section id="themes" className="py-24 w-full bg-black text-white">
      {/* Heading */}
      <div
        className="text-[50px] text-center sm:text-[70px] md:text-[4.5rem] font-bold"
        style={{
          textTransform: "uppercase",
          letterSpacing: "2px",
          textShadow: "-5px 8px 4px rgb(0, 0, 0)",
        }}
      >
        Themes
      </div>

      {/* Slider */}
      <motion.div
        initial={{ opacity: 0, translateY: 30 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-14 w-full flex justify-center"
      >
        <Swiper
          spaceBetween={30}
          slidesPerView={"auto"}
          centeredSlides={true}
          grabCursor={true}
          loop={true}
          effect="coverflow"
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="w-full max-w-6xl"
        >
          {tabData.map((theme) => (
            <SwiperSlide key={theme.id} className="max-w-[320px]">
              <div className="relative h-[460px] rounded-3xl overflow-hidden border border-white/10 bg-black">
                <Image
                  src={theme.img1}
                  alt={theme.heading}
                  fill
                  className="object-cover opacity-70"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <h3 className="text-xl font-semibold">
                    {theme.heading}
                  </h3>
                  <p className="mt-2 text-sm text-white/90 leading-relaxed">
                    {theme.content}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}