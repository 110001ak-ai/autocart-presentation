/**
 * components/sections/Experience.tsx — 09
 */

import { EXPERIENCE_CARDS } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-label">09 — The Experience</div>
      <h2 className="section-title">
        What AutoCart Feels Like<br />for Your Home
      </h2>
      <p className="section-subtitle">
        AutoCart makes households feel like their supply system is professionally
        managed — without any extra cost or effort.
      </p>

      <div
        className="grid-3 reveal"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
      >
        {EXPERIENCE_CARDS.map(({ icon, title, body }) => (
          <div key={title} className="how-card">
            <span className="step-num">✦</span>
            <span className="step-icon">{icon}</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))}
      </div>

      <div className="highlight-box reveal" style={{ textAlign: "center", padding: "3rem" }}>
        <p style={{ fontSize: "1.3rem", lineHeight: 1.5 }}>
          <strong>
            &ldquo;Just as households use electricity or internet without thinking
            about the underlying system, AutoCart ensures that everyday essentials
            are always available without constant planning or ordering.&rdquo;
          </strong>
        </p>
      </div>
    </section>
  );
}
