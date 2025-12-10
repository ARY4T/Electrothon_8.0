"use client";

import styles from "@/styles/hero.module.css"; // Import the same CSS module
import DomeGallery from "@/components/DomeGallery"; 
import galleryImages from "@/data/galleryImages"; // Ensure curly braces if it's a named export

export default function Gallery() {
  return (
    <div className={styles.galleryWrapper}>
      
      {/* Top 15%: The Text */}
      <div className={styles.galleryHeader}>
         <h2 className={`${styles.retroTitle} text-3xl md:text-5xl`}>
           EVENTS GALLERY
         </h2>
      </div>

      {/* Bottom 85%: The Dome */}
      <div className={styles.domeContainer}>
        <DomeGallery 
          images={galleryImages} 
          fit={0.6}
          minRadius={900} 
          maxRadius={1400}
          maxVerticalRotationDeg={18}
          dragSensitivity={12}
          dragDampening={1.8}
          segments={30}
          overlayBlurColor="transparent" 
        />
      </div>

    </div>
  );
}