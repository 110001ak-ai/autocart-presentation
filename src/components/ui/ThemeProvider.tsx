/**
 * components/ui/ThemeProvider.tsx
 *
 * Reads theme from Zustand and applies/removes the "light"
 * class on <html> so all CSS variables switch correctly.
 * Must be a Client Component rendered at the root.
 */

"use client";

import { useEffect } from "react";
import { useAppStore } from "@/store/useAppStore";

export default function ThemeProvider() {
  const theme = useAppStore((s) => s.theme);

  useEffect(() => {
    const html = document.documentElement;
    if (theme === "light") {
      html.classList.add("light");
    } else {
      html.classList.remove("light");
    }
  }, [theme]);

  return null; // purely a side-effect component
}
