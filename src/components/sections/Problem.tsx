/**
 * components/sections/Problem.tsx — 03
 */

import {
  PROBLEM_CARDS,
  QUICK_COMMERCE_METRICS,
  CAPACITY_BARS,
  PROBLEM_IMPACT,
} from "@/data/content";

export default function Problem() {
  return (
    <section id="problem">
      <div className="section-label">03 — The Problem</div>
      <h2 className="section-title">
        Household Supply is<br />Still Stuck in the Past
      </h2>
      <p className="section-subtitle">
        Studies show 90%+ of household consumption is repetitive. Yet households
        still manage every order manually, week after week.
      </p>

      {/* Problem cards */}
      <div
        className="grid-3 reveal"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
      >
        {PROBLEM_CARDS.map(({ variant, icon, title, body, stat }) => (
          <div key={title} className={`problem-card problem-card--${variant}`}>
            <span className="p-icon">{icon}</span>
            <h3>{title}</h3>
            <p dangerouslySetInnerHTML={{ __html: body }} />
            <div className="problem-stat">{stat}</div>
          </div>
        ))}
      </div>

      {/* Dark side of quick commerce */}
      <div className="dark-side-wrap reveal">
        <h3>⚠️ The Dark Side of Hyperlocal Delivery</h3>
        <p>
          Quick-commerce platforms like Zepto, Blinkit, and Instamart have made
          10–20 minute delivery popular — but this speed comes at a severe cost
          to efficiency and sustainability.
        </p>
        <div className="metrics-row">
          {QUICK_COMMERCE_METRICS.map(({ label, value }) => (
            <div key={label} className="metric-box">
              <div className="m-label">{label}</div>
              <div className="m-val">{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Capacity bars */}
      <div className="reveal" style={{ marginTop: "2.5rem" }}>
        <h3 style={{ fontSize: "1.2rem", marginBottom: "1.5rem", color: "var(--muted)" }}>
          Capacity Utilization Reality (30 kg Baseline)
        </h3>
        <div className="compare-wrap">
          {CAPACITY_BARS.map(({ label, value, width, type }) => (
            <div key={label} className="compare-row">
              <div className="compare-label">
                <span>{label}</span>
                <span>{value}</span>
              </div>
              <div className="bar-track">
                <div
                  className={`bar-fill${type === "bad" ? " bar-fill--bad" : type === "depot" ? " bar-fill--depot" : ""}`}
                  style={{ width: `${width}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Impact columns */}
      <div className="impact-cols reveal">
        {PROBLEM_IMPACT.map(({ colorVar, title, items }) => (
          <div key={title} className="impact-col">
            <h3 style={{ color: `var(${colorVar})` }}>{title}</h3>
            <ul>
              {items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
