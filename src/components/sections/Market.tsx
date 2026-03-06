/**
 * components/sections/Market.tsx — 01
 */

import { MARKET_CARDS, GROWTH_TABLE } from "@/data/content";

export default function Market() {
  return (
    <section id="market">
      <div className="section-label">01 — Market Opportunity</div>
      <h2 className="section-title">
        A Trillion-Dollar Market<br />Waiting to Be Transformed
      </h2>
      <p className="section-subtitle">
        The grocery and household essentials sector is one of the largest
        consumer markets globally — and it&apos;s barely been touched by digital
        innovation.
      </p>

      <div
        className="grid-3 reveal"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
      >
        {MARKET_CARDS.map(({ icon, num, title, body }) => (
          <div key={title} className="market-card">
            <div className="card-icon">{icon}</div>
            <span className="big-num">{num}</span>
            <h3>{title}</h3>
            <p dangerouslySetInnerHTML={{ __html: body }} />
          </div>
        ))}
      </div>

      <div className="growth-table-wrap reveal" style={{ marginTop: "2.5rem" }}>
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>India Online Essentials Market</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {GROWTH_TABLE.map(({ year, market, status }) => (
              <tr key={year}>
                <td>{year}</td>
                <td><strong>{market}</strong></td>
                <td>
                  {status === "current" ? (
                    <span style={{ color: "var(--accent)", fontWeight: 600 }}>Current</span>
                  ) : (
                    <span className="badge-proj">Projected</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="info-box reveal">
        <strong>Key Growth Drivers:</strong> Smartphone penetration · Rapid
        urbanization · Digital payment adoption · Increasingly busy urban
        lifestyles · Growing demand for convenience and time efficiency
      </div>
    </section>
  );
}
