import React from "react";
import Image from "next/image";
import { Lock, ArrowUpRight } from "lucide-react";

export function DemoGrime() {
  return (
    <article className="demo-card" style={{ "--glow": "0 30px 70px -20px rgba(0, 255, 163, 0.5)" } as React.CSSProperties}>
      <div className="demo-card__badge">Best for Deep Clean / Pressure Wash</div>
      <div className="demo-card__preview">
        <div className="browser">
          <div className="browser__bar">
            <span className="browser__dots">
              <i></i><i></i><i></i>
            </span>
            <span className="browser__url">
              <Lock />
              grimebusters.io
            </span>
          </div>
          <div className="browser__screen">
            <div className="mk mk--grime">
              <div className="mk__nav">
                <span className="mk__logo"><span className="mk__dot"></span>GRIME BUSTERS</span>
                <span className="mk__links"><i></i><i></i><i></i></span>
                <span className="mk__navbtn">Get Estimate</span>
              </div>
              <div className="mk__hero">
                <Image
                  className="mk__heroimg"
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1200&auto=format&fit=crop"
                  alt="Grime Theme"
                  width={1200}
                  height={800}
                />
                <div className="mk__heroin">
                  <span className="mk__pill">Same-week slots</span>
                  <h3 className="mk__h1">We blast away years of grime.</h3>
                  <p className="mk__p">Driveways, patios, render and commercial exteriors.</p>
                  <span className="mk__btns"><span className="mk__btn">Get Estimate</span></span>
                </div>
              </div>
              <div className="mk__strip">
                <span>Fully insured</span>
                <span>Free site survey</span>
                <span>Before / after gallery</span>
              </div>
              <div className="mk__grid">
                <div className="mk__card">
                  <span className="mk__ico"></span>
                  <h4>Driveways</h4>
                  <p>Block, tarmac &amp; resin safe.</p>
                </div>
                <div className="mk__card">
                  <span className="mk__ico"></span>
                  <h4>Patios</h4>
                  <p>Moss and algae removal.</p>
                </div>
                <div className="mk__card">
                  <span className="mk__ico"></span>
                  <h4>Commercial</h4>
                  <p>Forecourts &amp; bin stores.</p>
                </div>
              </div>
              <div className="mk__band">
                <div><b>8,400</b><span>m² per week</span></div>
                <div><b>4.9/5</b><span>Rating</span></div>
                <div><b>2yr</b><span>Workmanship</span></div>
              </div>
              <div className="mk__quote">
                <p>“The before/after slider alone books us three jobs a week.”</p>
                <span>— Dean T, Grime Busters</span>
              </div>
              <div className="mk__foot">
                <b>Get a free estimate today</b>
                <span className="mk__btn">Get Estimate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="demo-card__body">
        <h3 className="demo-card__title">The Grime Theme</h3>
        <p className="demo-card__desc">
          High-impact and visual-first. Pairs dramatic photography with an instant-quote calculator for one-off big tickets.
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
