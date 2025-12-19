"use client";

import { useState, useEffect } from "react";
import TetrisLoading from "@/components/tetris-loader";

export default function Preloader({ children }) {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      // Start fade out after 2 seconds
      setTimeout(() => {
        setFadeOut(true);
        // Completely remove component after fade animation (500ms)
        setTimeout(() => setLoading(false), 500);
      }, 2500); 
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (loading) {
    return (
      <div 
        className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black dark transition-opacity duration-500 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="scale-110 md:scale-125">
          <TetrisLoading 
            size="sm" 
            speed="fast" 
            showLoadingText={false} // We are using our own text below
          />
        </div>
        
        <p className="mt-12 text-white font-mono text-xs tracking-[0.5em] animate-pulse">
          Loading ELECTROTHON 8.0...
        </p>
      </div>
    );
  }

  return <>{children}</>;
}