import React from "react";
import Image from "next/image";
import { Lock, ArrowUpRight } from "lucide-react";

export function DemoSparkle() {
  return (
    <article className="demo-card" style={{ "--glow": "0 30px 70px -20px rgba(0, 230, 118, 0.55)" } as React.CSSProperties}>
      <div className="demo-card__badge">Best for Residential / Maid</div>
      <div className="demo-card__preview">
        <div className="browser">
          <div className="browser__bar">
            <span className="browser__dots">
              <i></i><i></i><i></i>
            </span>
            <span className="browser__url">
              <Lock />
              sparkleclean.co
            </span>
          </div>
          <div className="browser__screen">
            <div className="mk mk--sparkle">
              <div className="mk__nav">
                <span className="mk__logo"><span className="mk__dot"></span>SPARKLE &amp; CO</span>
                <span className="mk__links"><i></i><i></i><i></i></span>
                <span className="mk__navbtn">Book Now</span>
              </div>
              <div className="mk__hero">
                <Image
                  className="mk__heroimg"
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop"
                  alt="Sparkle Theme"
                  width={1200}
                  height={800}
                />
                <div className="mk__heroin">
                  <span className="mk__pill">1,200+ happy homes</span>
                  <h3 className="mk__h1">Your home, spotless by 5pm.</h3>
                  <p className="mk__p">Vetted local cleaners. Flat rates. No contracts.</p>
                  <span className="mk__btns"><span className="mk__btn">Get My Quote</span></span>
                </div>
              </div>
              <div className="mk__strip">
                <span>4.9 ★ 320 reviews</span>
                <span>Bonded &amp; insured</span>
                <span>Eco products</span>
              </div>
              <div className="mk__grid">
                <div className="mk__card">
                  <span className="mk__ico"></span>
                  <h4>Weekly</h4>
                  <p>Same cleaner, every visit.</p>
                </div>
                <div className="mk__card">
                  <span className="mk__ico"></span>
                  <h4>Deep Clean</h4>
                  <p>Kitchen &amp; bath reset.</p>
                </div>
                <div className="mk__card">
                  <span className="mk__ico"></span>
                  <h4>Move-Out</h4>
                  <p>Deposit-back standard.</p>
                </div>
              </div>
              <div className="mk__band">
                <div><b>1,200+</b><span>Homes</span></div>
                <div><b>4.9/5</b><span>Rating</span></div>
                <div><b>48h</b><span>First job</span></div>
              </div>
              <div className="mk__quote">
                <p>“I went from 6 to 22 recurring clients in one quarter.”</p>
                <span>— Melissa R, HomeShine</span>
              </div>
              <div className="mk__foot">
                <b>Ready for a spotless home?</b>
                <span className="mk__btn">Book Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="demo-card__body">
        <h3 className="demo-card__title">The Sparkle Theme</h3>
        <p className="demo-card__desc">
          Warm, trust-first and built for recurring residential plans. Leads with social proof and a single flat-rate promise.
        </p>
        <div className="demo-card__cta">
          <a className="btn btn--primary btn--block" href="#pricing">
            <span className="btn__label">View Live Demo</span>
            <ArrowUpRight className="btn__icon" />
          </a>
          <a className="btn btn--ghost btn--block" href="#pricing">
            <span className="btn__label">Select This Setup</span>
          </a>
        </div>
      </div>
    </article>
  );
}
