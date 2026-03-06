/**
 * components/sections/Solution.tsx — 04
 */

import { SOLUTION_CARDS } from "@/data/content";

export default function Solution() {
  return (
    <section id="solution">
      <div className="section-label">04 — The Solution</div>
      <h2 className="section-title">
        AutoCart — AI-Powered<br />Household Supply
      </h2>
      <p className="section-subtitle">
        An intelligent system that automatically manages recurring household
        consumption — so you never have to think about essentials again.
      </p>

      <div
        className="grid-3 reveal"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
      >
        {SOLUTION_CARDS.map(({ step, icon, title, body }) => (
          <div key={step} className="how-card">
            <span className="step-num">{step}</span>
            <span className="step-icon">{icon}</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))}
      </div>

      <div className="highlight-box reveal">
        <p>
          <strong>⚡ Instant Orders Still Supported:</strong> Customers can
          place instant orders anytime. Instead of inefficient individual
          deliveries, AutoCart intelligently attaches these to nearby scheduled
          routes — ensuring faster delivery, higher route efficiency, and lower
          logistics cost. AutoCart solves both convenience <em>and</em>{" "}
          efficiency simultaneously.
        </p>
      </div>
    </section>
  );
}
