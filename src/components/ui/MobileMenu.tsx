/**
 * components/ui/MobileMenu.tsx
 *
 * Full-screen slide-in menu for mobile.
 * Open/close state lives in Zustand.
 */

"use client";

import { useAppStore } from "@/store/useAppStore";
import { NAV_SECTIONS } from "@/data/content";

export default function MobileMenu() {
  const mobileMenuOpen  = useAppStore((s) => s.mobileMenuOpen);
  const closeMobileMenu = useAppStore((s) => s.closeMobileMenu);

  return (
    <div
      className={`mobile-menu${mobileMenuOpen ? " open" : ""}`}
      id="mobileMenu"
    >
      {NAV_SECTIONS.map(({ id, label, icon }) => (
        <a
          key={id}
          href={`#${id}`}
          className="mobile-nav-link"
          onClick={closeMobileMenu}
        >
          <span className="mobile-nav-icon">{icon}</span>
          {label}
        </a>
      ))}
      {/* <a href="#cta" className="mobile-cta" onClick={closeMobileMenu}>
        Get Early Access
      </a> */}
    </div>
  );
}