import React from 'react';
import { ArrowRight, CheckCircle2, HeartHandshake } from 'lucide-react';
import { WHATSAPP_LINK_FOUNDING, FOUNDING_SPOTS_REMAINING, FOUNDING_SPOTS_TOTAL } from '@/config';

export function FoundingOffer() {
  return (
    <section className="section" id="founding-offer" style={{ backgroundColor: "rgba(0, 230, 118, 0.03)", borderTop: "1px solid rgba(0, 230, 118, 0.1)", borderBottom: "1px solid rgba(0, 230, 118, 0.1)" }}>
      <div className="container">
        <div className="sec-head sec-head--center" style={{ maxWidth: "700px" }}>
          <span className="eyebrow" style={{ color: "var(--mint)" }}>LIMITED OFFER</span>
          <h2 className="sec-title">Be one of my first {FOUNDING_SPOTS_TOTAL} founding clients</h2>
          <p className="sec-sub">
            I'm launching a brand-new studio focusing exclusively on cleaning businesses. To build my portfolio, I am completely waiving my usual build fee. In exchange for your feedback and a case study, you get a premium site and just cover the $20/mo hosting.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginTop: "3rem" }}>
          <div style={{ background: "rgba(22, 41, 74, 0.4)", border: "1px solid var(--stroke)", padding: "2rem", borderRadius: "var(--radius-lg)" }}>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "1.5rem", color: "var(--white)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <CheckCircle2 style={{ color: "var(--mint)" }} size={20} /> What you get
            </h3>
            <ul className="ticks" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <li><strong>$200 build fee completely waived</strong></li>
              <li>You only pay the $20/mo hosting</li>
              <li>Same premium, conversion-focused template</li>
              <li>Free strategy & planning call</li>
              <li>Fast 48-hour launch</li>
            </ul>
          </div>

          <div style={{ background: "rgba(22, 41, 74, 0.4)", border: "1px solid var(--stroke)", padding: "2rem", borderRadius: "var(--radius-lg)" }}>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "1.5rem", color: "var(--white)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <HeartHandshake style={{ color: "var(--mint)" }} size={20} /> What I ask
            </h3>
            <ul className="ticks" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <li>A short, honest testimonial after launch</li>
              <li>Permission to feature your site as a case study</li>
              <li>Commitment to the $20/mo hosting plan</li>
              <li>Patience as we refine the process together</li>
            </ul>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a href={WHATSAPP_LINK_FOUNDING} target="_blank" rel="noreferrer" className="btn btn--primary btn--lg" style={{ boxShadow: "0 10px 30px -10px rgba(0, 230, 118, 0.6)" }}>
            <span className="btn__label">Apply for a Founding Spot</span>
            <ArrowRight className="btn__icon" />
          </a>
          <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "var(--slate)", fontWeight: 500 }}>
            <span style={{ color: "var(--mint)" }}>●</span> {FOUNDING_SPOTS_REMAINING} of {FOUNDING_SPOTS_TOTAL} spots remaining
          </p>
        </div>
      </div>
    </section>
  );
}
