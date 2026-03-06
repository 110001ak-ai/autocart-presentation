/**
 * components/sections/Network.tsx — 08
 */

import { NETWORK_CARDS } from "@/data/content";

export default function Network() {
  return (
    <section id="network">
      <div className="section-label">08 — Network Effects</div>
      <h2 className="section-title">
        AutoCart Gets Smarter<br />as It Scales
      </h2>
      <p className="section-subtitle">
        Every new household strengthens the system — improving predictions,
        logistics efficiency, and partner earnings simultaneously.
      </p>

      <div className="grid-4 reveal">
        {NETWORK_CARDS.map(({ icon, title, body }) => (
          <div key={title} className="network-card">
            <span className="n-icon">{icon}</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
