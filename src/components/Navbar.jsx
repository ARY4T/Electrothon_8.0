"use client";

import Link from "next/link";
import styles from "@/styles/navbar.module.css";

const navItems = [
  { label: "Schedule", href: "#schedule", isAnchor: true },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Themes", href: "#themes", isAnchor: true },
  { label: "Prizes", href: "#prizes", isAnchor: true },
  { label: "FAQs", href: "#faqs", isAnchor: true },
  { label: "Contact", href: "#contact", isAnchor: true },
  { label: "Code of Conduct", href: "/codeofconduct" },
  { label: "Hackers Guide", href: "/hackersguide" },
];

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {navItems.map((item) => {
        if (item.isAnchor) {
          return (
            <a
              key={item.label}
              href={item.href}
              className={`${styles.pill} cursor-target`}
            >
              {item.label}
            </a>
          );
        }
        return (
          <Link
            key={item.label}
            href={item.href}
            className={`${styles.pill} cursor-target`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
