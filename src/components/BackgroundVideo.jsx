"use client";

import { useEffect, useRef } from "react";
import poster from "@/assets/videos/poster.jpg";

export default function BackgroundVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // iOS video loop fix
    const handleVideoEnd = () => {
      video.currentTime = 0;
      video.play().catch(console.error);
    };

    video.addEventListener('ended', handleVideoEnd);
    
    // Ensure video plays on iOS
    const playVideo = () => {
      video.play().catch(console.error);
    };
    
    // Try to play after a short delay
    setTimeout(playVideo, 100);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        poster={poster}
        aria-hidden="true"
        webkit-playsinline="true"
      >
        <source src="/videos/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional overlay for better legibility */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Content slot (empty for now) */}
      <div className="relative z-20" />
    </div>
  );
}
