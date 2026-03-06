/**
 * hooks/useBarAnimation.ts
 *
 * Animates .bar-fill elements inside .compare-wrap containers
 * when they scroll into view.
 */

"use client";

import { useEffect } from "react";

export function useBarAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.querySelectorAll<HTMLElement>(".bar-fill").forEach((bar) => {
            const targetWidth = bar.style.width;
            bar.style.width = "0%";
            setTimeout(() => { bar.style.width = targetWidth; }, 100);
          });
        }),
      { threshold: 0.2 }
    );

    document
      .querySelectorAll(".compare-wrap")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
