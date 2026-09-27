import React from "react";
import { ArrowRight, CheckCheck } from "lucide-react";
import { WHATSAPP_LINK_MOCKUP } from "@/config";

export function CTA() {
  return (
    <section className="section final" id="cta">
      <div className="container">
        <div className="final__box">
          <span className="final__glow" aria-hidden="true"></span>
          <h2 className="final__title">Ready to dominate your <span className="text-gradient">local cleaning market?</span></h2>
          <p className="final__sub">
            Pick a demo today, and be taking bookings from a site you are proud of before the weekend.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "2.2rem" }}>
            <a className="btn btn--primary btn--xl btn--glow" href="https://calendly.com/himibaba/new-meeting" target="_blank" rel="noreferrer">
              <span className="btn__label">Book a Strategy Call</span>
              <ArrowRight className="btn__icon" />
            </a>
            <a className="btn btn--ghost btn--xl" href={WHATSAPP_LINK_MOCKUP} target="_blank" rel="noreferrer">
              <span className="btn__label">See a free mockup instead</span>
            </a>
          </div>
          <p className="final__micro">
            <CheckCheck />
            No contracts · 14-day money-back guarantee · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
