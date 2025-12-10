import Image from "next/image";
import styles from "../styles/mission.module.css";

const achievements = [
  { number: "85+", labelTop: "TEAMS", labelBottom: "" },
  { number: "2500+", labelTop: "REGISTRATIONS", labelBottom: "" },
  { number: "60+", labelTop: "SOFTWARE", labelBottom: "PROJECTS" },
  { number: "25+", labelTop: "HARDWARE", labelBottom: "PROJECTS" },
];

export default function MissionBriefing() {
  return (
    <section id="mission" className={styles.missionSection}>
        <div className={styles.outerDiv}>
      <div className={styles.missionOverlay}>
        {/* MAIN TITLE (already matching your screenshot) */}
        <h2 className={styles.missionTitle}>MISSION BRIEFING</h2>

        <div className={styles.missionContent}>
          {/* LEFT SIDE – ABOUT + ACHIEVEMENTS */}
          <div className={styles.leftColumn}>
            {/* ABOUT US */}
            <h3 className={styles.subheading}>ABOUT US</h3>

            <div className={styles.aboutText}>
              <p>
              Step into the Arcade of Innovation as Electrothon returns for another electrifying in-person edition! This year, we dive into a neon-soaked retro realm where every team is a player, every idea a power-up, and every project a shot at the ultimate high score.
              </p>
              <p>
              Powered by SPEC and the energy of NIT Hamirpur, Electrothon continues to inspire students to build, create, and push the boundaries of tech.
              </p>
              <p>
              From past editions where ideas became game-changing projects to this year’s turbocharged arena — everything is leveled up. More players, more action, more legendary builds.
              Gear up, press start, and code your way into the Arcade era of Electrothon.
              </p>
            </div>

            {/* OUR ACHIEVEMENTS */}
            <h3 className={styles.subheading2}>OUR ACHIEVEMENTS</h3>

            <div className={styles.achievementsRow}>
            {achievements.map((item) => (
             <div key={item.number} className={styles.achievementCard}>
               <div className={styles.achievementContent}>
                 <div className={styles.achievementNumber}>{item.number}</div>
                 <div className={styles.achievementLabel}>
                   {item.labelTop}
                   {item.labelBottom && <br />}
                   {item.labelBottom}
                 </div>
               </div>
             </div>
           ))}
         </div>
          </div>
          

          {/* RIGHT SIDE – ARCADE MACHINE IMAGE */}
          <div className={styles.rightColumn}>
            <Image
              src="/sections/arcade-machine.png" // 👈 yahan apne machine wali image ka path daalna
              alt="Arcade machine"
              width={300}
              height={420}
              className={styles.arcadeImage}
              unoptimized
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
