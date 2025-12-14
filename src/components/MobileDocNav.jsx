"use client";

import {
  CalendarDays,
  Handshake,
  Layers,
  Trophy,
  HelpCircle,
  Mail,
} from "lucide-react";
import styles from "@/styles/mobileDock.module.css";

const items = [
  { label: "Schedule", href: "#schedule", icon: CalendarDays },
  { label: "Sponsors", href: "#sponsors", icon: Handshake },
  { label: "Themes", href: "#themes", icon: Layers },
  { label: "Prizes", href: "#prizes", icon: Trophy },
  { label: "FAQs", href: "#faqs", icon: HelpCircle },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function MobileDockNav() {
  return (
    <nav className={styles.mobileDock}>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <a key={item.label} href={item.href} className={styles.item}>
            <Icon size={22} strokeWidth={1.8} />
            <span>{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
