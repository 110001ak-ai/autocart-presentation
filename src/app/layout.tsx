// /**
//  * app/layout.tsx
//  */

// import type { Metadata } from "next";
// import "./globals.css";
// import ThemeProvider from "@/components/ui/ThemeProvider";
// import ScrollInit from "@/components/ui/ScrollInit";

// export const metadata: Metadata = {
//   title: "AutoCart — The House That Runs Itself",
//   description:
//     "AI-powered household supply that learns your consumption patterns and delivers essentials before you run out.",
//   icons: {
//     icon: "/favicon.ico",
//   },
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//         <ThemeProvider />
//         <ScrollInit />
//         {children}
//       </body>
//     </html>
//   );
// }


/**
 * app/layout.tsx
 */

import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ui/ThemeProvider";
import ScrollInit from "@/components/ui/ScrollInit";
import DesktopNotice from "@/components/ui/DesktopNotice";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "AutoCart — The House That Runs Itself",
  description:
    "AutoCart understands your home like never before — predicting what you'll need next and automatically delivering essentials before you even realize you're running low.",

  icons: {
    icon: "/favicon.png",
  },

  openGraph: {
    title: "AutoCart — The House That Runs Itself",
    description:
      "AutoCart understands your home like never before — predicting what you'll need next and automatically delivering essentials before you even realize you're running low.",
    url: "https://your-domain.com",
    siteName: "AutoCart",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AutoCart — The House That Runs Itself",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider />
        <ScrollInit />
        <DesktopNotice />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
