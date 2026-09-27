import React from "react";
import Image from "next/image";
import { Lock, ArrowUpRight } from "lucide-react";

export function DemoExecutive() {
  return (
    <article className="demo-card" style={{ "--glow": "0 30px 70px -20px rgba(0, 102, 255, 0.65)" } as React.CSSProperties}>
      <div className="demo-card__badge">Best for Commercial / Offices</div>
      <div className="demo-card__preview">
        <div className="browser">
          <div className="browser__bar">
            <span className="browser__dots">
              <i></i><i></i><i></i>
            </span>
            <span className="browser__url">
              <Lock />
              executivefacilities.com
            </span>
          </div>
          <div className="browser__screen">
            <div className="mk mk--exec">
              <div className="mk__nav">
                <span className="mk__logo"><span className="mk__dot"></span>EXECUTIVE FM</span>
                <span className="mk__links"><i></i><i></i><i></i><i></i></span>
                <span className="mk__navbtn">Request Proposal</span>
              </div>
              <div className="mk__hero">
                <Image
                  className="mk__heroimg"
                  src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1200&auto=format&fit=crop"
                  alt="Executive Theme"
                  width={1200}
                  height={800}
                />
                <div className="mk__heroin">
                  <span className="mk__pill">ISO 9001 certified</span>
                  <h3 className="mk__h1">Facilities that pass every inspection.</h3>
                  <p className="mk__p">Contracted commercial cleaning for offices, clinics and retail.</p>
                  <span className="mk__btns"><span className="mk__btn">Request Proposal</span></span>
                </div>
              </div>
              <div className="mk__strip">
                <span>ISO 9001</span>
                <span>DBS-checked staff</span>
                <span>24/7 escalation</span>
              </div>
              <div className="mk__grid">
                <div className="mk__card">
                  <span className="mk__ico"></span>
                  <h4>Offices</h4>
                  <p>Daily &amp; out-of-hours schedules.</p>
                </div>
                <div className="mk__card">
                  <span className="mk__ico"></span>
                  <h4>Clinics</h4>
                  <p>Compliance-grade disinfection.</p>
                </div>
                <div className="mk__card">
                  <span className="mk__ico"></span>
                  <h4>Retail</h4>
                  <p>Multi-site, one invoice.</p>
                </div>
              </div>
              <div className="mk__band">
                <div><b>310</b><span>Sites serviced</span></div>
                <div><b>99.2%</b><span>SLA met</span></div>
                <div><b>24/7</b><span>Cover</span></div>
              </div>
              <div className="mk__quote">
                <p>“One contract replaced four vendors and cut our spend by a third.”</p>
                <span>— Operations Director, Northgate Group</span>
              </div>
              <div className="mk__foot">
                <b>Need a facilities partner?</b>
                <span className="mk__btn">Request Proposal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="demo-card__body">
        <h3 className="demo-card__title">The Executive Theme</h3>
        <p className="demo-card__desc">
          Authoritative and procurement-ready. Built to win multi-year B2B contracts with compliance proof front and centre.
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
