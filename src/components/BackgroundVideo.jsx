"use client";
import bg from "@/assets/videos/bg.mp4";
import poster from "@/assets/videos/poster.jpg";

export default function BackgroundVideo() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster={poster}
        aria-hidden="true"
      >
        <source src={bg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional overlay for better legibility */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Content slot (empty for now) */}
      <div className="relative z-20" />
    </div>
  );
}
