import React from "react";
import { CheckCircle2 } from "lucide-react";

export function FounderNote() {
  return (
    <section className="section founder" id="approach">
      <div className="container">
        <div className="founder__grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          <div className="founder__content">
            <span className="eyebrow">Our Approach</span>
            <h2 className="sec-title" style={{ marginBottom: "1.5rem" }}>
              New studio. <span className="text-gradient">Real focus.</span>
            </h2>
            <div style={{ color: "var(--slate)", fontSize: "1.05rem", lineHeight: "1.7", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              <p>
                Hi, I'm Ferdous. When building this studio, I didn't want to just sell generic website templates. 
                I specifically studied what actually gets a homeowner to pick up the phone and trust a cleaning service in their house.
              </p>
              <p>
                Because we're a new studio with a hyper-specific focus, you get my undivided attention. No account managers, 
                no bloated agency fees, and no cookie-cutter designs. Just a conversion-focused <strong className="text-highlight">WordPress Elementor</strong> setup 
                built specifically for your industry.
              </p>
            </div>
          </div>

          <div className="trust-checklist" style={{ background: "linear-gradient(165deg, rgba(22, 41, 74, 0.72), rgba(13, 31, 58, 0.55))", padding: "clamp(2rem, 4vw, 3rem)", borderRadius: "var(--radius-lg)", border: "1px solid var(--stroke)", boxShadow: "var(--sh-card)" }}>
            <h3 style={{ fontSize: "1.4rem", marginBottom: "1.8rem", color: "var(--white)" }}>What You Get</h3>
            <ul className="ticks ticks--lg" style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
              <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start", color: "var(--slate)", fontSize: "0.95rem" }}>
                <CheckCircle2 size={22} style={{ color: "var(--mint)", flexShrink: 0, marginTop: "2px" }} />
                <span><strong style={{ color: "var(--white)", display: "block", marginBottom: "0.2rem", fontSize: "1.05rem" }}>Free strategy call</strong> before you commit to anything.</span>
              </li>
              <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start", color: "var(--slate)", fontSize: "0.95rem" }}>
                <CheckCircle2 size={22} style={{ color: "var(--mint)", flexShrink: 0, marginTop: "2px" }} />
                <span><strong style={{ color: "var(--white)", display: "block", marginBottom: "0.2rem", fontSize: "1.05rem" }}>30-day post-launch support</strong> to ensure everything runs smoothly.</span>
              </li>
              <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start", color: "var(--slate)", fontSize: "0.95rem" }}>
                <CheckCircle2 size={22} style={{ color: "var(--mint)", flexShrink: 0, marginTop: "2px" }} />
                <span><strong style={{ color: "var(--white)", display: "block", marginBottom: "0.2rem", fontSize: "1.05rem" }}>100% Ownership</strong> You own your site and content — no lock-in.</span>
              </li>
              <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start", color: "var(--slate)", fontSize: "0.95rem" }}>
                <CheckCircle2 size={22} style={{ color: "var(--mint)", flexShrink: 0, marginTop: "2px" }} />
                <span><strong style={{ color: "var(--white)", display: "block", marginBottom: "0.2rem", fontSize: "1.05rem" }}>Direct access</strong> to the person building your site (no agencies).</span>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}
