import { Clock, Mail, Rocket } from "lucide-react";
import { ProcessTimeline } from "./ProcessTimeline";

export function Process() {
  return (
    <section className="section process" id="process">
      <div className="container">
        <div className="sec-head sec-head--center">
          <span className="eyebrow">The Process</span>
          <h2 className="sec-title">
            From Zero to Launched in <span className="text-gradient">48 Hours</span>
          </h2>
          <p className="sec-sub">Three steps. One short email from you, and one review call at the end.</p>
        </div>

        <ProcessTimeline>
          <article className="step">
            <span className="step__num">01</span>
            <span className="step__dot" aria-hidden="true"></span>
            <h3>Pick a Demo</h3>
            <p>Choose the theme that fits your market. We reserve your slot and send over a short brand questionnaire.</p>
            <span className="step__meta">
              <Clock />
              5 minutes
            </span>
          </article>

          <article className="step">
            <span className="step__num">02</span>
            <span className="step__dot" aria-hidden="true"></span>
            <h3>Send your Brand &amp; Prices</h3>
            <p>
              Drop in your logo, colours, service list and rates. We swap out the placeholder content and write
              conversion copy for your area.
            </p>
            <span className="step__meta">
              <Mail />
              One email
            </span>
          </article>

          <article className="step">
            <span className="step__num">03</span>
            <span className="step__dot" aria-hidden="true"></span>
            <h3>We Launch Your Site</h3>
            <p>Forms tested, speed optimised, analytics and Search Console connected. You review it live and we go public.</p>
            <span className="step__meta">
              <Rocket />
              Within 48 hours
            </span>
          </article>
        </ProcessTimeline>
      </div>
    </section>
  );
}
