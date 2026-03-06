/**
 * components/sections/Hero.tsx
 */

import { HERO_STATS, MARQUEE_ITEMS } from "@/data/content";

export default function Hero() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <>
      <div className="hero">
        <div className="hero-glow" />
        <div className="hero-glow2" />

        <div className="hero-badge">AI-Powered Household Infrastructure</div>

        <div className="hero-brand">
          <span className="hero-brand-name">Auto<span>Cart</span></span>
        </div>

        <h1>
          The House<br />
          That <span className="accent">Runs</span><br />
          <span className="accent2">Itself.</span>
        </h1>

        <p className="hero-tagline">
          AutoCart understands your home like never before, learning consumption
          patterns across every room, predicting what you&apos;ll need next, and{" "}
          <strong>automatically delivering essentials</strong> before you even
          realize you&apos;re running low.
        </p>

        <div className="hero-actions">
          <a href="#solution" className="btn-primary">See How It Works</a>
          <a href="#economics" className="btn-secondary">View Economics →</a>
        </div>

        <div className="hero-stats">
          {HERO_STATS.map(({ num, label }) => (
            <div key={label} className="hero-stat">
              <span className="num">{num}</span>
              <span className="label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {doubled.map((item, i) => (
            <span key={i}>
              {item}
              {i < doubled.length - 1 && <span className="dot">●</span>}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
