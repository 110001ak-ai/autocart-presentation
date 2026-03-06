/**
 * app/page.tsx
 *
 * Main landing page — assembles all sections in order.
 * This is a Server Component; interactive pieces (Navbar, MobileMenu,
 * ThemeProvider, ScrollInit) are Client Components imported separately.
 */

import Navbar from "@/components/ui/Navbar";
import MobileMenu from "@/components/ui/MobileMenu";
import Hero from "@/components/sections/Hero";
import Market from "@/components/sections/Market";
import Mindset from "@/components/sections/Mindset";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Logistics from "@/components/sections/Logistics";
import Economics from "@/components/sections/Economics";
import { Vision } from "@/components/sections/Vision";
import Network from "@/components/sections/Network";
import Experience from "@/components/sections/Experience";
import CtaFooter from "@/components/ui/CtaFooter";

export default function Home() {
  return (
    <>
      <Navbar />
      <MobileMenu />

      <Hero />

      <div className="divider" aria-hidden />
      <Market />

      <div className="divider" aria-hidden />
      <Mindset />

      <div className="divider" aria-hidden />
      <Problem />

      <div className="divider" aria-hidden />
      <Solution />

      <div className="divider" aria-hidden />
      <Logistics />

      <div className="divider" aria-hidden />
      <Economics />

      <div className="divider" aria-hidden />
      <Vision />

      <Network />

      <div className="divider" aria-hidden />
      <Experience />

      <CtaFooter />
    </>
  );
}
