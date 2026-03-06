/**
 * components/ui/Navbar.tsx
 *
 * Fixed top nav with:
 * - Logo
 * - 9 nav links (highlighted when their section is in view via Zustand)
 * - Hamburger for mobile
 * - Theme toggle (dark / light via Zustand)
 */

"use client";

import { useAppStore } from "@/store/useAppStore";
import { NAV_SECTIONS } from "@/data/content";

export default function Navbar() {
  const theme           = useAppStore((s) => s.theme);
  const toggleTheme     = useAppStore((s) => s.toggleTheme);
  const mobileMenuOpen  = useAppStore((s) => s.mobileMenuOpen);
  const toggleMobileMenu = useAppStore((s) => s.toggleMobileMenu);
  const activeSection   = useAppStore((s) => s.activeSection);

  return (
    <nav>
      {/* Logo */}
      <div className="nav-logo">
        Auto<span>Cart</span>
      </div>

      {/* Desktop nav links */}
      <ul className="nav-links">
        {NAV_SECTIONS.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={activeSection === id ? "nav-active" : ""}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Right controls */}
      <div className="nav-right">
        {/* Hamburger */}
        <button
          className={`nav-hamburger${mobileMenuOpen ? " open" : ""}`}
          id="navHamburger"
          aria-label="Toggle menu"
          onClick={toggleMobileMenu}
        >
          <span /><span /><span />
        </button>

        {/* Theme toggle */}
        <button
          className="theme-toggle"
          id="themeToggle"
          aria-label="Toggle theme"
          onClick={toggleTheme}
        >
          {/* Moon icon — visible in dark mode */}
          <svg className="icon-moon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
          {/* Sun icon — visible in light mode */}
          <svg className="icon-sun" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1"  x2="12" y2="3"  />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22"  y1="4.22"  x2="5.64"  y2="5.64"  />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1"     y1="12"    x2="3"     y2="12"    />
            <line x1="21"    y1="12"    x2="23"    y2="12"    />
            <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36" />
            <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"  />
          </svg>
        </button>
      </div>
    </nav>
  );
}
