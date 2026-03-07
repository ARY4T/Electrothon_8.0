"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Press_Start_2P } from 'next/font/google';
import TargetCursor from "@/components/TargetCursor";

const pressStart = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

// --- DATA ---
const TRACK_DATA = [
  {
    id: 1,
    logo: "/LOGOS/requestly.png", 
    trackTitle: "Requestly",
    trackSubtitle: "BEST USE OF REQUESTLY",
    prize: "$200",
    themeColor: "fuchsia",
    bgStyle: { 
      background: 'radial-gradient(circle at center, #1e1b4b 0%, #000000 100%)' 
    },
    link: "https://requestly.com",
    btnText: "ENTER CHALLENGE"
  },
  {
    id: 2,
    logo: "/LOGOS/nullshot.jpg",
    trackTitle: "Nullshot",
    trackSubtitle: "BEST USE OF NULLSHOT",
    prize: "$200",
    themeColor: "cyan",
    bgStyle: { 
      background: 'linear-gradient(45deg, #271a0c 25%, #431407 25%, #431407 50%, #271a0c 50%, #271a0c 75%, #431407 75%, #431407 100%)',
      backgroundSize: '20px 20px'
    },
    link: "https://nullshot.ai/",
    btnText: "VIEW DETAILS"
  },
  {
    id: 3,
    logo: "/LOGOS/iqai.png",
    trackTitle: "IQAI",
    trackSubtitle: "AI INNOVATION TRACK",
    prize: "$700",
    themeColor: "fuchsia",
    bgStyle: { 
      background: 'linear-gradient(to bottom, #3b82f6, #60a5fa)' 
    },
    link: "https://iqai.com/",
    btnText: "START BUILDING"
  },
  {
    id: 4,
    logo: "/LOGOS/ethindia.jpg",
    trackTitle: "ETHIndia",
    trackSubtitle: "BEST HACK BUILT ON ETHEREUM",
    prize: "$100",
    themeColor: "cyan",
    bgStyle: { 
      background: 'radial-gradient(circle at center, #0f172a 0%, #000000 100%)' 
    },
    link: "https://ethindia-villa.devfolio.co/",
    btnText: "START BUILDING"
  },
  {
    id: 5,
    logo: "/LOGOS/beginner.webp", 
    trackTitle: "Beginner",
    trackSubtitle: "BEST BEGINNER HACK",
    prize: "$50",
    themeColor: "fuchsia",
    bgStyle: { 
      background: 'radial-gradient(circle at center, #0f172a 0%, #000000 100%)' 
    },
    link: "https://electrothon-8.devfolio.co/prizes", 
    btnText: "VIEW DETAILS"
  },
  {
    id: 6,
    logo: "/LOGOS/all-girls.webp", 
    trackTitle: "All-Girls",
    trackSubtitle: "BEST ALL-GIRLS TEAM",
    prize: "$50",
    themeColor: "cyan",
    bgStyle: { 
      background: 'linear-gradient(to bottom, #701a75, #4a044e)' 
    },
    link: "https://electrothon-8.devfolio.co/prizes", 
    btnText: "VIEW DETAILS"
  },
  {
    id: 7,
    logo: "/LOGOS/hardware.webp", 
    trackTitle: "Hardware",
    trackSubtitle: "BEST HARDWARE TRACK",
    prize: "$50",
    themeColor: "fuchsia",
    bgStyle: { 
      background: 'linear-gradient(45deg, #451a03 25%, #78350f 100%)',
    },
    link: "https://electrothon-8.devfolio.co/prizes", 
    btnText: "VIEW DETAILS"
  },
  {
    id: 8,
    logo: "/LOGOS/googlecloud.webp", 
    trackTitle: "Major League Hacking",
    trackSubtitle: " BEST USE OF GEMINI API",
    prize: "Google Swag Kits ",
    themeColor: "cyan",
    bgStyle: { 
      background: 'linear-gradient(45deg, #451a03 25%, #78350f 100%)',
    },
    link: "https://mlh.link/gemini", 
    btnText: "VIEW DETAILS"
  },
  {
    id: 9,
    logo: "/LOGOS/elevenlabs.jpg", 
    trackTitle: "Major League Hacking",
    trackSubtitle: "BEST USE OF ELEVENLABS ",
    prize: " A chance to win some wireless earbuds.",
    themeColor: "fuchsia",
    bgStyle: { 
      background: 'linear-gradient(45deg, #451a03 25%, #78350f 100%)',
    },
    link: "https://www.mlh.com/partners/elevenlabs", 
    btnText: "VIEW DETAILS"
  },
  {
    id: 10,
    logo: "/LOGOS/solanaa.webp", 
    trackTitle: "Major League Hacking",
    trackSubtitle: "BEST USE OF SOLANA",
    prize: "Multiple Prizes",
    themeColor: "cyan",
    bgStyle: { 
      background: 'linear-gradient(45deg, #451a03 25%, #78350f 100%)',
    },
    link: "https://www.mlh.com/partners/solana", 
    btnText: "VIEW DETAILS"
  },
  {
    id: 11,
    logo: "/LOGOS/vultr.webp", 
    trackTitle: "Major League Hacking",
    trackSubtitle: "BEST USE OF VULTR",
    prize: "A chance to win some awesome portable screens",
    themeColor: "fuchsia",
    bgStyle: { 
      background: 'linear-gradient(45deg, #451a03 25%, #78350f 100%)',
    },
    link: "https://mlh.link/vultr", 
    btnText: "VIEW DETAILS"
  },
  {
    id: 12,
    logo: "/LOGOS/snowflake.webp", 
    trackTitle: "Major League Hacking",
    trackSubtitle: "BEST USE OF SNOWFLAKE API",
    prize: "A chance to win a M5Stack Tab5",
    themeColor: "cyan",
    bgStyle: { 
      background: 'linear-gradient(45deg, #451a03 25%, #78350f 100%)',
    },
    link: "https://mlh.link/snowflake", 
    btnText: "VIEW DETAILS"
  }
];

export default function Challenges() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
  <section 
  id="challenges" 
  className={`bg-[#090014] text-white overflow-hidden relative cursor-none ${pressStart.className}`}
>
      <TargetCursor targetSelector=".cursor-target" />

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite; 
          width: max-content; 
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }

        @keyframes gridMove {
            0% { transform: perspective(500px) rotateX(60deg) translateY(0); }
            100% { transform: perspective(500px) rotateX(60deg) translateY(40px); }
        }
        
        .theme-text-shadow { text-shadow: 4px 4px 0px #000000; }
        .gold-shadow { text-shadow: 4px 4px 0px #000, -1px -1px 0 #ca8a04; }
      `}</style>

      {/* BACKGROUNDS */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020005] via-[#11001c] to-[#240046] -z-50"></div>
      <div className="absolute top-[20%] left-0 right-0 h-[50vh] bg-fuchsia-900/20 blur-[100px] rounded-[100%] pointer-events-none -z-40"></div>
      <div 
        className="absolute inset-0 pointer-events-none -z-30 transition-opacity duration-300 mix-blend-screen"
        style={{
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(192, 38, 211, 0.15), transparent 60%)`
        }}
      />
      <div 
        className="absolute bottom-[-25%] left-[-50%] right-[-50%] h-[100vh] w-[200%] -z-20 pointer-events-none"
        style={{
            backgroundImage: `
                linear-gradient(transparent 96%, #c026d3 96%), 
                linear-gradient(90deg, transparent 96%, #8b5cf6 96%)
            `,
            backgroundSize: '40px 40px',
            animation: 'gridMove 1s linear infinite',
            maskImage: 'linear-gradient(to bottom, transparent 5%, black 40%)'
        }}
      />
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-80"></div>

      {/* MAIN CONTENT */}
  
<div className="relative z-10 flex flex-col pt-10 pb-10">
        <div className="w-full max-w-7xl mx-auto px-4 mb-8 flex flex-col items-center justify-center py-6 relative">
            <div className="absolute top-0 left-4 md:left-[15%] text-4xl animate-bounce duration-[3000ms] opacity-90 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">👾</div>
            <div className="absolute bottom-2 right-4 md:right-[15%] text-4xl animate-bounce duration-[3500ms] delay-700 opacity-90 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">👾</div>
            <div className="absolute top-2 right-[30%] text-xl animate-pulse duration-[2000ms] opacity-50 blur-[1px]">👾</div>
            <div className="absolute bottom-4 left-[30%] text-2xl animate-bounce duration-[4500ms] delay-200 opacity-60">👾</div>

            <h1 className="cursor-target relative z-10 text-[clamp(1.6rem,5vw,3.75rem)] text-white tracking-[0.2em] pl-[0.2em] theme-text-shadow text-center font-bold uppercase leading-none">
              CHALLENGES
            </h1>
            
            <p className="mt-4 text-fuchsia-300 text-xs md:text-sm tracking-widest uppercase opacity-80 animate-pulse">
              Select your mission below
            </p>
        </div>
<div className="group relative w-full overflow-hidden py-6">
          <div className="flex animate-marquee gap-8 px-4">
            {TRACK_DATA.map((track, index) => (
              <ArcadeWindowCard key={`set1-${index}`} data={track} />
            ))}
            {/* Duplicated for seamless loop */}
            {TRACK_DATA.map((track, index) => (
              <ArcadeWindowCard key={`set2-${index}`} data={track} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ArcadeWindowCard({ data }) {
  const theme = {
    cyan: { border: "border-cyan-400", shadow: "shadow-[0_0_10px_rgba(34,211,238,0.5)]", titleBarBg: "bg-cyan-900", btnBg: "bg-cyan-500 hover:bg-cyan-400", btnShadow: "shadow-[0_0_8px_rgba(34,211,238,0.4)]" },
    orange: { border: "border-orange-500", shadow: "shadow-[0_0_10px_rgba(249,115,22,0.5)]", titleBarBg: "bg-orange-900", btnBg: "bg-orange-500 hover:bg-orange-400", btnShadow: "shadow-[0_0_8px_rgba(249,115,22,0.4)]" },
    fuchsia: { border: "border-fuchsia-500", shadow: "shadow-[0_0_10px_rgba(217,70,239,0.5)]", titleBarBg: "bg-fuchsia-900", btnBg: "bg-fuchsia-500 hover:bg-fuchsia-400", btnShadow: "shadow-[0_0_8px_rgba(217,70,239,0.4)]" },
  }[data.themeColor];

  return (
    <div className={`cursor-target relative w-[280px] md:w-[300px] shrink-0 rounded-lg transition-transform duration-300 hover:scale-105 hover:z-30 p-[3px] ${theme.border} ${theme.shadow} bg-[#0f0518]`}>
      
      <div className="w-full h-full border-2 border-white/70 rounded-md overflow-hidden relative">

        {/* TITLE BAR - Fixed: Removed truncate to show full name */}
        <div className={`h-10 w-full ${theme.titleBarBg} border-b-2 border-white/40 flex items-center justify-between px-2 relative`}>

          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6 flex-shrink-0 bg-white rounded-sm overflow-hidden flex items-center justify-center">
              <Image
                src={data.logo}
                alt={data.trackTitle}
                fill
                className="object-cover"
                sizes="24px"
              />
            </div>
            {/* Reduced font size slightly and removed truncate to let text breathe */}
            <span className="text-[10px] font-bold text-white tracking-tight drop-shadow-[1px_1px_0_black] leading-none">
              {data.trackTitle}
            </span>
          </div>

          {/* WINDOW BUTTONS */}
          <div className="flex gap-1 flex-shrink-0">
            <div className="w-2 h-2 bg-gray-400 border border-b-gray-600 border-r-gray-600"></div>
            <div className="w-2 h-2 bg-gray-400 border border-b-gray-600 border-r-gray-600"></div>
            <div className="w-2 h-2 bg-red-500 border border-b-red-700 border-r-red-700"></div>
          </div>
        </div>

        {/* BODY - Changed h to min-h to prevent data from cutting off */}
        <div className="relative p-4 flex flex-col items-center text-center min-h-[260px] justify-between bg-[#1e1b4b]/80">

          <div className="absolute inset-0 -z-10 opacity-60 mix-blend-screen" style={data.bgStyle}></div>

          <p className="text-[11px] text-white/80 tracking-widest uppercase mb-2">
            {data.trackSubtitle}
          </p>

          <div className="relative w-full flex flex-col items-center justify-center grow py-2">
            {/* Reduced Prize sizes as requested */}
            <div className="text-3xl mb-2 filter drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)]">🎁</div>
            <br />
            <div className={`text-yellow-400 font-black gold-shadow leading-tight ${data.prize.length > 12 ? 'text-sm' : 'text-lg'}`}>
              {data.prize}
            </div>
          </div>

          <Link href={data.link} target="_blank" className="w-full mt-3">
            <button className={`cursor-target w-full py-2 px-4 uppercase text-[10px] font-bold text-white rounded-md border-b-4 border-black/30 ${theme.btnBg} ${theme.btnShadow} hover:translate-y-[1px] hover:border-b-2 active:translate-y-[3px] active:border-b-0 transition-all duration-100 ease-in-out flex items-center justify-center gap-2`}>
              {data.btnText} <span className="text-xs">→</span>
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
}