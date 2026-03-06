/**
 * store/useAppStore.ts
 *
 * Central Zustand store for AutoCart.
 * Manages:
 *  - theme (dark / light)
 *  - mobile menu open/closed
 *  - which nav section is currently in view
 */

import { create } from "zustand";
import { persist } from "zustand/middleware";

// ─── Types ────────────────────────────────────────────────────────────────────

type Theme = "dark" | "light";

interface AppState {
  // Theme
  theme: Theme;
  toggleTheme: () => void;

  // Mobile menu
  mobileMenuOpen: boolean;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  toggleMobileMenu: () => void;

  // Active nav section (set by scroll observer)
  activeSection: string | null;
  setActiveSection: (id: string | null) => void;
}

// ─── Store ────────────────────────────────────────────────────────────────────

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // ── Theme ──────────────────────────────────────────────────
      theme: "dark",
      toggleTheme: () =>
        set((s) => ({ theme: s.theme === "dark" ? "light" : "dark" })),

      // ── Mobile menu ────────────────────────────────────────────
      mobileMenuOpen: false,
      openMobileMenu: () => set({ mobileMenuOpen: true }),
      closeMobileMenu: () => set({ mobileMenuOpen: false }),
      toggleMobileMenu: () =>
        set((s) => ({ mobileMenuOpen: !s.mobileMenuOpen })),

      // ── Active section ─────────────────────────────────────────
      // null = user is still in hero, nothing highlighted yet
      activeSection: null,
      setActiveSection: (id) => set({ activeSection: id }),
    }),
    {
      name: "autocart-ui",          // localStorage key
      partialize: (s) => ({ theme: s.theme }), // only persist theme
    }
  )
);
