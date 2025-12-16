"use client";

import styles from "@/styles/navbar.module.css";

const navItems = [
  { label: "Schedule", href: "#schedule" },
  { label: "Sponsors", href: "/#sponsors" },
  { label: "Themes", href: "#themes" },
  { label: "Prizes", href: "#prizes" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className={`${styles.pill} cursor-target`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}