"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

export default function Cards({ data, index, totalCards }) {
  const cardRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far through the viewport this card is
      const progress = Math.max(
        0,
        Math.min(1, (windowHeight - rect.top) / (windowHeight * 0.6))
      );

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate transform based on index and scroll
  const rotation = (index % 2 === 0 ? -12 : 12) * (3 - scrollProgress * 2.8);
  const scale = 1 - index * 0.05 + scrollProgress * 0.05;
  const yOffset = index * 20 - scrollProgress * 20;

  return (
    <div
      ref={cardRef}
      className="sticky top-[10vh] w-full flex justify-center"
      style={{
        transform: `translateY(${yOffset}px)`,
        zIndex: 1,
      }}
    >
      <div
        className="
          w-[85vw] max-w-xl rounded-2xl p-6
          bg-white border border-gray-200 shadow-2xl
          transition-transform duration-300 ease-out
        "
        style={{
          transform: `rotate(${rotation}deg) scale(${scale})`,
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <Image
            src={data.profilepic}
            alt={data.name}
            width={60}
            height={60}
            className="rounded-full object-cover"
          />
          <div className="flex-1">
            <p className="font-semibold text-gray-900">{data.name}</p>
            <p className="text-xs text-gray-600">{data.date} ago</p>
          </div>
          {/* X logo like tweet */}
          <div className="text-2xl font-bold">𝕏</div>
        </div>

        {/* Content */}
        <p className="text-gray-800 mb-4 text-sm leading-relaxed">
          {data.content}
        </p>

        {/* Post Image */}
        {data.postpic && (
          <div className="rounded-lg overflow-hidden">
            <Image
              src={data.postpic}
              alt={`${data.name} post`}
              width={800}
              height={450}
              className="w-full h-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
}
