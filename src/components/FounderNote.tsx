import { CheckCircle2 } from "lucide-react";

export function FounderNote() {
  return (
    <section className="section founder" id="approach">
      <div className="container">
        <div className="founder__grid">
          <div className="founder__content">
            <span className="eyebrow">Our Approach</span>
            <h2 className="sec-title founder__title">
              New studio. <span className="text-gradient">Real focus.</span>
            </h2>
            <div className="founder__copy">
              <p>
                Hi, I&apos;m Ferdous. When building this studio, I didn&apos;t want to just sell generic website
                templates. I specifically studied what actually gets a homeowner to pick up the phone and trust a
                cleaning service in their house.
              </p>
              <p>
                Because we&apos;re a new studio with a hyper-specific focus, you get my undivided attention. No account
                managers, no bloated agency fees, and no cookie-cutter designs. Just a conversion-focused{" "}
                <strong className="text-highlight">WordPress Elementor</strong> setup built specifically for your
                industry.
              </p>
            </div>
          </div>

          <div className="trust-checklist">
            <h3 className="trust-checklist__title">What You Get</h3>
            <ul className="ticks ticks--lg trust-checklist__list">
              <li>
                <CheckCircle2 size={22} aria-hidden="true" />
                <span>
                  <strong>Free strategy call</strong> before you commit to anything.
                </span>
              </li>
              <li>
                <CheckCircle2 size={22} aria-hidden="true" />
                <span>
                  <strong>30-day post-launch support</strong> to ensure everything runs smoothly.
                </span>
              </li>
              <li>
                <CheckCircle2 size={22} aria-hidden="true" />
                <span>
                  <strong>100% Ownership</strong> You own your site and content — no lock-in.
                </span>
              </li>
              <li>
                <CheckCircle2 size={22} aria-hidden="true" />
                <span>
                  <strong>Direct access</strong> to the person building your site (no agencies).
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
