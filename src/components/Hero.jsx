"use client";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/bg.mp4" type="video/mp4" />
      </video>
      {/* Optional overlay for better contrast if needed */}
      <div className="absolute inset-0 bg-black/20 z-10" />
    </section>
  );
}
