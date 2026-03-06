/**
 * components/sections/Mindset.tsx — 02
 */

import { SHIFT_CARDS } from "@/data/content";

export default function Mindset() {
  return (
    <section id="mindset">
      <div className="section-label">02 — The Shift</div>
      <h2 className="section-title">
        Convenience Is the<br />New Normal
      </h2>
      <p className="section-subtitle">
        Over the past decade, everyday life has shifted toward convenience and
        automation. Services once considered luxury are now basic expectations.
      </p>

      <div className="grid-3 reveal">
        {SHIFT_CARDS.map(({ icon, title, points, accent }) => (
          <div
            key={title}
            className={`shift-card${accent ? " shift-card--accent" : ""}`}
          >
            <div className="shift-icon">{icon}</div>
            <div>
              <h3>{title}</h3>
              <ul className="shift-points">
                {points.map((p) => (
                  <li key={p} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="highlight-box reveal">
        <p>
          <strong>The Pattern Is Clear:</strong> Every time a repetitive task
          has been handed off to a smart system — payments, utilities, transport,
          entertainment — people have embraced it immediately and never looked
          back. Convenience isn&apos;t a luxury upgrade anymore.{" "}
          <strong>It&apos;s the standard people expect.</strong> Household supply
          is simply the next domain waiting for the same transformation. That&apos;s
          exactly what AutoCart is built to do.
        </p>
      </div>
    </section>
  );
}
