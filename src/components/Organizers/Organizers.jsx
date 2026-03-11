"use client";
import styles from "./Organizers.module.css";
import { useState } from "react";
import Card from "./Card";

export default function Organizers() {
  const [hoveredSlider, setHoveredSlider] = useState(null);
  const [slider2Active, setSlider2Active] = useState(null);
  const [slider1Active, setSlider1Active] = useState(null);

  // Explicit source arrays for each logical slider (no overlap)
  // Sorted alphabetically by name (case-insensitive)
  const sliderAImages = [
    "organizer3.jpeg","organizer4.jpeg","organizer6.jpeg",
    "organizer5.jpeg","organizer7.jpeg","organizer8.jpeg",
    "organizer9.jpeg","organizer10.jpeg","organizer11.jpeg",
    "organizer12.jpeg","organizer13.jpeg","organizer14.jpeg",
    "organizer2.jpeg","organizer15.jpeg","organizer16.jpeg",
    "organizer17.jpeg","organizer18.jpeg","organizer19.jpeg",
    "organizer21.jpeg","organizer23.jpeg","organizer24.jpeg","Organiserleft.webp",
  ];

  const sliderANames = [
    "Aman Mishra",
    "Arpit Singh",
    "Ashish Rajpal",
    "Ashish Singh",
    "Avinash",
    "Devesh Jangid",
    "Hardik Manchandha",
    "Harsh Aryan",
    "Ishita Khanduja",
    "Jashnika Sankhua",
    "Kanika Thakur",
    "Prajualit Tickoo",
    "Prince",
    "Raghav Jatic",
    "Riya Singh",
    "Shanpreet Singh",
    "Shivansh Bhatnagar",
    "Shreshth Sharma",
    "Sona",
    "Vaibhav Sharma",
    "Vyom Sharma",
    "Rajvil Choudhary"
  ];

  const sliderA = sliderAImages.map((img, idx) => ({
    image: `/assets/images/organizers/${img}`,
    name: sliderANames[idx]
  }));

  // Slider 2: exactly 27 organizers (25..51), all present, sorted alphabetically by name, correct extensions
  const sliderBData = [
    { name: "Abhinav Mishra", image: "organizer37.jpeg" },
    { name: "Adarsh Singh", image: "organizer25.jpeg" },
    { name: "Aditya Kumar", image: "organizer36.jpeg" },
    { name: "Archita Agarwal", image: "organizer26.jpeg" },
    { name: "Arpit Tyagi", image: "organizer27.jpeg" },
    { name: "Arya Thakur", image: "organizer28.jpeg" },
    { name: "Avaneesh", image: "organizer29.jpeg" },
    { name: "Gauri Sharma", image: "organizer30.jpeg" },
    { name: "Harsh Verma", image: "organizer31.jpeg" },
    { name: "Kaustav Rana", image: "organizer32.jpeg" },
    { name: "Manan Gupta", image: "organizer38.jpeg" },
    { name: "Mayank Koundal", image: "organizer33.jpeg" },
    { name: "Medha Sharma", image: "organizer34.jpeg" },
    { name: "Nishita", image: "organizer35.jpeg" },
    { name: "Peeyush Gautam", image: "organizer39.jpeg" },
    { name: "Prakul Chandra", image: "organizer40.jpeg" },
    { name: "Pratham Lodha", image: "organizer41.jpeg" },
    { name: "Rijul Rangta", image: "organizer42.jpeg" },
    { name: "Ronak Dotasara", image: "organizer43.jpeg" },
    { name: "Shreya Dhawan", image: "organizer44.jpeg" },
    { name: "Vaishali Bhatt", image: "organizer45.jpeg" },
    { name: "Vaishnavi Sharma", image: "organizer46.jpeg" },
    { name: "Vanni Chauhan", image: "organizer47.jpeg" },
    { name: "Vanya Sharma", image: "organizer48.jpeg" },
    { name: "Vidhi", image: "organizer49.jpeg" },
    { name: "Vyom Pant", image: "organizer50.jpeg" },
    { name: "Yash Verma", image: "organizer51.jpeg" }
  ];
  const sliderB = sliderBData.map(d => ({
    name: d.name,
    image: `/assets/images/organizers/${d.image}`
  }));
  // Duplicate for seamless looping (like Slider 1)
  const dupB = [...sliderB, ...sliderB];

  // Duplicate arrays to enable seamless CSS looping while keeping logical data sets distinct
  const dupA = [...sliderA, ...sliderA];

  // Lead organizers data (replace with real names/images as needed)
  const leadOrganizers = [
    {
      name: "Kritika Singh",
      role: "Lead Organizer",
      image: "assets/images/organizers/organizer1.jpeg"
    },
    {
      name: "Soham Juneja",
      role: "Lead Organizer",
      image: "/assets/images/organizers/organizer20.jpeg"
    },
    {
      name: "Tejasv Singh Hada",
      role: "Lead Organizer",
      image: "/assets/images/organizers/organizer22.jpeg"
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Lead Organizers Section */}
      <h2
  className="w-full px-4 text-center leading-relaxed text-[clamp(1.2rem,5vw,3.75rem)] text-white drop-shadow-[0_4px_0_rgba(0,0,0,1)]"
  style={{ fontFamily: "'Press Start 2P', cursive" }}
>
  LEAD ORGANIZERS
</h2>
        <div className={styles.leadGrid}>
          {leadOrganizers.map((org, i) => (
            <div className={styles.leadCard} key={i}>
              <Card name={org.name} role={org.role} image={org.image} leadCard />
            </div>
          ))}
        </div>
        <div className={styles.leadSpacer} />

        {/* Main Organizers Section */}
         <h3
            className="text-[clamp(1.6rem,5vw,3.75rem)] text-white drop-shadow-[0_4px_0_rgba(0,0,0,1)]"
            style={{ fontFamily: "'Press Start 2P', cursive" }}
          >
           ORGANIZERS
          </h3>

        {/* SLIDER 1 */}
        <div className={styles.slider} onMouseEnter={() => setHoveredSlider("a")} onMouseLeave={() => setHoveredSlider(null)}>
          <div className={`${styles.track} ${styles.animateLeft} ${slider1Active !== null ? styles.trackActive : ''}`} style={{ animationPlayState: hoveredSlider === "a" ? "paused" : "running" }}>
            {dupA.map((card, i) => {
              const idx = i % sliderA.length;
              const isActive = slider1Active === idx;
              return (
                <div
                  key={`a-${i}`}
                  className={`${styles.slide} cursor-target ${isActive ? styles.activeSlide : ''}`}
                  onMouseEnter={() => setSlider1Active(idx)}
                  onMouseLeave={() => setSlider1Active(null)}
                >
                  <Card hoverEffect name={card.name} role="Organizer" image={card.image} />
                </div>
              );
            })}
          </div>
        </div>

        {/* SLIDER 2 (now matches slider 1 for hover/active logic) */}
        <div className={styles.slider} onMouseEnter={() => setHoveredSlider("b")} onMouseLeave={() => setHoveredSlider(null)}>
          <div className={`${styles.track} ${styles.animateRight} ${slider2Active !== null ? styles.trackActive : ''}`} style={{ animationPlayState: hoveredSlider === "b" ? "paused" : "running" }}>
            {dupB.map((card, i) => {
              const idx = i % sliderB.length;
              const isActive = slider2Active === idx;
              return (
                <div
                  key={`b-${i}`}
                  className={`${styles.slide} cursor-target ${isActive ? styles.activeSlide : ''}`}
                  onMouseEnter={() => setSlider2Active(idx)}
                  onMouseLeave={() => setSlider2Active(null)}
                >
                  <Card hoverEffect name={card.name} role="Organizer" image={card.image} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}