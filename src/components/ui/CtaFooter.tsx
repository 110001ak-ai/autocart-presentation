/**
 * components/ui/CtaFooter.tsx
 *
 * Final CTA strip + Footer — grouped together as they're always adjacent.
 */

export default function CtaFooter() {
  return (
    <>
      <div className="cta-wrap" id="cta">
        <h2>
          The House That<br />
          <span style={{ color: "var(--accent)" }}>Runs Itself.</span>
        </h2>
        <p>
          AutoCart is transforming household supply from a weekly chore into
          seamless, intelligent infrastructure.
        </p>
      </div>

      <footer>
        <div className="f-logo">Auto<span>Cart</span></div>
        <p>AI-Powered Household Supply &amp; Delivery Optimization</p>
      </footer>
    </>
  );
}
