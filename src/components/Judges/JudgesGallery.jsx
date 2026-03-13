"use client";

import TiltedCard from './TiltedCard';

export default function JudgesGallery({ judges }) {
  return (
    <div className="w-full py-8">
      <div className="flex flex-wrap justify-center gap-8">
        {judges.map((judge, index) => (
          <div 
            key={`${judge.title}-${index}`}
            className="flex flex-col items-center"
          >
            <TiltedCard
              imageSrc={judge.image}
              altText={judge.title}
              captionText={judge.caption || judge.title}
            />
        </div>
         ))}
       </div>
     </div>
   );
}
