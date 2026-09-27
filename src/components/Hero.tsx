import { ArrowRight } from "lucide-react";
import React from "react";
import { WHATSAPP_LINK_MOCKUP } from "@/config";
import { DesktopMockup } from "./DesktopMockup";
import { PhoneMockup } from "./PhoneMockup";
import { HeroVisual } from "./HeroVisual";

const headlineWords = "Turn Website Visitors Into High-Paying Cleaning Clients.".split(" ");

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__copy">
          <a
            href="#founding-offer"
            className="chip"
            style={{
              borderColor: "rgba(0, 230, 118, 0.4)",
              background: "rgba(0, 230, 118, 0.05)",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            <span className="chip__dot" style={{ background: "var(--mint)" }}></span>
            <span style={{ color: "var(--white)", fontWeight: 600 }}>🚀 Founding Client Offer —</span> Free
            build for the first 2 clients (just cover $20/mo hosting).
          </a>

          <h1 className="hero__title" data-split style={{ marginTop: "1.5rem" }}>
            {headlineWords.map((word, i) => {
              const isHighlight = i >= 4;
              return (
                <React.Fragment key={i}>
                  <span className="w">
                    <span className={isHighlight ? "text-gradient" : ""} style={{ "--i": i } as React.CSSProperties}>
                      {word}
                    </span>
                  </span>{" "}
                </React.Fragment>
              );
            })}
          </h1>

          <p className="hero__sub">
            Stop losing bids to competitors. We provide readymade, conversion-optimized{" "}
            <strong className="text-highlight">WordPress Elementor</strong> templates designed exclusively for cleaning
            agencies — <strong>launched in 48 hours.</strong>
          </p>

          <div className="hero__cta" style={{ flexWrap: "wrap", gap: "1rem" }}>
            <a className="btn btn--primary btn--lg" href="#founding-offer">
              <span className="btn__label">Claim a Founding Spot</span>
              <ArrowRight className="btn__icon" />
            </a>
            <a className="btn btn--ghost btn--lg" href={WHATSAPP_LINK_MOCKUP} target="_blank" rel="noreferrer">
              <span className="btn__label">Get a free mockup instead</span>
            </a>
          </div>

          <ul className="hero__trust">
            <li>
              <strong className="count">48h</strong>
              <span>Average launch time</span>
            </li>
            <li>
              <strong className="count">3</strong>
              <span>Ready-to-launch themes</span>
            </li>
            <li>
              <strong className="count">Free</strong>
              <span>Strategy call included</span>
            </li>
          </ul>
        </div>

        <HeroVisual>
          <DesktopMockup />
          <PhoneMockup />

          <div className="float-chip float-chip--a" data-float="2">
            <div className="fc__icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div className="fc__text">
              <b>New Booking</b>
              <span>Just now</span>
            </div>
          </div>

          <div className="float-chip float-chip--b" data-float="3">
            <div className="fc__icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
            </div>
            <div className="fc__text">
              <b>Conversion Rate</b>
              <span className="fc__green">+24% this week</span>
            </div>
          </div>
        </HeroVisual>
      </div>
    </section>
  );
}
