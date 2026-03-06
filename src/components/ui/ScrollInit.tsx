/**
 * components/ui/ScrollInit.tsx
 *
 * Mounts all scroll-based side effects (reveal, bar animation, scroll spy)
 * in a single client component so the page layout stays a Server Component.
 */

"use client";

import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useReveal } from "@/hooks/useReveal";
import { useBarAnimation } from "@/hooks/useBarAnimation";

export default function ScrollInit() {
  useScrollSpy();
  useReveal();
  useBarAnimation();
  return null;
}
