/**
 * components/sections/Logistics.tsx — 05
 */

import { EFFICIENCY_MODELS, DEPOT_STEPS, LOGISTICS_IMPACT } from "@/data/content";

export default function Logistics() {
  return (
    <section id="logistics">
      <div className="section-label">05 — Logistics Model</div>
      <h2 className="section-title">
        Maximizing the<br />30 kg Delivery Capacity
      </h2>
      <p className="section-subtitle">
        Every trip is engineered to operate at peak capacity — turning what were
        60 wasted trips into a single optimized route.
      </p>

      {/* Smart delivery hero box */}
      <div className="logistics-hero reveal">
        <h3>Smart Delivery Logic</h3>
        <p>Four steps that transform fragmented deliveries into a precision logistics system.</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2rem" }}>
          {["① Cluster Nearby Households", "② Combine Scheduled Deliveries", "③ Attach Instant Orders", "④ Optimize Routes Dynamically"].map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <p className="goal">Goal: Deliver 25–30 kg per trip, every time.</p>
      </div>

      {/* Efficiency note */}
      <div className="eff-label-row reveal">
        <p className="eff-note">
          All calculations based on a standard{" "}
          <strong>30 kg vehicle load capacity</strong>.
          Quick-commerce average order weight updated to real-world data (0.5–1.5 kg per delivery).
        </p>
      </div>

      {/* Efficiency comparison cards */}
      <div className="efficiency-compare reveal" style={{ marginTop: "1.5rem" }}>
        {EFFICIENCY_MODELS.map(({ variant, title, tag, rows, verdict }) => (
          <div key={variant} className={`eff-side eff-side--${variant}`}>
            <h4>{title}</h4>
            <div className={`eff-tag eff-tag--${variant}`}>{tag}</div>
            {rows.map(({ label, value, highlight }) => (
              <div
                key={label}
                className={`eff-row${highlight ? ` eff-highlight-${variant}` : ""}`}
              >
                <span>{label}</span>
                <span>{value}</span>
              </div>
            ))}
            <div className={`eff-verdict eff-verdict--${variant}`}>{verdict}</div>
          </div>
        ))}
      </div>

      {/* Depot van explainer */}
      <div className="depot-explainer reveal">
        <h3>🚐 How the AutoCart Depot Van System Works</h3>
        <p>
          On the highest-density routes — where 40+ households in a neighbourhood
          subscribe to AutoCart — a dedicated depot van handles bulk delivery in a
          single, systematic run. The van loads consolidated orders at the AutoCart
          fulfilment hub, follows an optimized route, and delivers directly to
          doorsteps or building lobbies. This cuts the per-order delivery cost to
          ₹8–₹14, making AutoCart the lowest-cost essentials delivery model at
          scale. Riders continue to handle lower-density areas and instant orders,
          while depot vans dominate the most common, predictable routes.
        </p>
        <div className="depot-steps">
          {DEPOT_STEPS.map((text, i) => (
            <div key={i} className="depot-step">
              <span className="ds-num">{i + 1}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Logistics impact columns */}
      <div className="impact-cols reveal">
        {LOGISTICS_IMPACT.map(({ colorVar, title, items }) => (
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
