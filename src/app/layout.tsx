/**
 * app/layout.tsx
 */

import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ui/ThemeProvider";
import ScrollInit from "@/components/ui/ScrollInit";

export const metadata: Metadata = {
  title: "AutoCart — The House That Runs Itself",
  description:
    "AI-powered household supply that learns your consumption patterns and delivers essentials before you run out.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider />
        <ScrollInit />
        {children}
      </body>
    </html>
  );
}