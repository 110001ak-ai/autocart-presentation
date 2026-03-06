/**
 * hooks/useScrollSpy.ts
 *
 * Watches section positions as the user scrolls and updates
 * the activeSection in Zustand. A section only becomes active
 * once its top edge has passed the middle of the viewport —
 * so nothing is highlighted while the user is in the hero.
 */

"use client";

import { useEffect } from "react";
import { NAV_SECTIONS } from "@/data/content";
import { useAppStore } from "@/store/useAppStore";

export function useScrollSpy() {
  const setActiveSection = useAppStore((s) => s.setActiveSection);

  useEffect(() => {
    function onScroll() {
      const scrollY  = window.scrollY;
      const windowH  = window.innerHeight;
      const threshold = scrollY + windowH * 0.5;

      let activeId: string | null = null;

      for (const { id } of NAV_SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= threshold) {
          activeId = id;
        }
      }

      setActiveSection(activeId);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on mount

    return () => window.removeEventListener("scroll", onScroll);
  }, [setActiveSection]);
}
