/**
 * components/sections/Economics.tsx — 06
 */

import { ECON_CARDS, ECON_STATS } from "@/data/content";

export default function Economics() {
  return (
    <section id="economics">
      <div className="section-label">06 — Unit Economics</div>
      <h2 className="section-title">
        From Burning Money<br />to Printing It
      </h2>
      <p className="section-subtitle">
        The numbers don&apos;t lie. AutoCart&apos;s model turns negative unit
        economics into a highly profitable, scalable business.
      </p>

      {/* Comparison cards */}
      <div className="grid-2 reveal">
        {ECON_CARDS.map(({ variant, title, rows }) => (
          <div key={variant} className={`econ-card econ-card--${variant}`}>
            <h3>{title}</h3>
            {rows.map(({ label, value, cls }) => (
              <div key={label} className="econ-row">
                <span>{label}</span>
                <span className={cls}>{value}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Stats cards */}
      <div className="grid-3 reveal" style={{ marginTop: "2rem" }}>
        {ECON_STATS.map(({ icon, num, title, body }) => (
          <div key={title} className="market-card">
            <div className="card-icon">{icon}</div>
            <span className="big-num">{num}</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
