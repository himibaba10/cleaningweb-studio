import { Check, Zap, ShieldCheck, RefreshCw, Lock, Headset } from "lucide-react";
import { getPricing } from "@/lib/data";

export async function Pricing() {
  const plans = await getPricing();

  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <div className="sec-head sec-head--center">
          <span className="eyebrow">Pricing</span>
          <h2 className="sec-title">
            Own it outright, or <span className="text-gradient">let us run it</span>
          </h2>
          <p className="sec-sub">
            Both options include the same conversion-built <strong className="text-highlight">WordPress Elementor</strong>{" "}
            template. The only question is who keeps the lights on.
          </p>
        </div>

        <div className="plans">
          {plans.map((plan) => (
            <article key={plan._id} className={`plan ${plan.isPopular ? "plan--featured" : ""}`}>
              {plan.isPopular && (
                <div className="plan__ribbon">
                  <Zap size={14} />
                  Most Popular
                </div>
              )}
              <div className="plan__tag">{plan.isPopular ? "Website-as-a-Service" : "Website Handover"}</div>
              <h3 className="plan__name">{plan.planName}</h3>
              <p className="plan__lede">{plan.description}</p>
              <div
                style={{
                  display: "inline-block",
                  fontSize: "0.75rem",
                  color: "var(--mint)",
                  border: "1px solid rgba(0, 230, 118, 0.3)",
                  background: "rgba(0, 230, 118, 0.05)",
                  borderRadius: "4px",
                  padding: "0.25rem 0.5rem",
                  margin: "1rem 0 -0.5rem",
                  fontWeight: 600,
                }}
              >
                Founding client pricing may apply — ask on call
              </div>
              <div className="plan__price">
                <span className="plan__cur">{plan.currency}</span>
                <span className="plan__amt">{plan.price}</span>
                <span className="plan__per">/ {plan.isPopular ? "month" : "one-time"}</span>
              </div>
              <p className="plan__hint">
                {plan.isPopular ? "No contract. Cancel anytime — you keep your site." : "No subscription, no lock-in. Yours to keep."}
              </p>
              <ul className="ticks ticks--lg">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={18} />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                className={`btn ${plan.isPopular ? "btn--primary" : "btn--ghost"} btn--block`}
                href="https://calendly.com/himibaba/new-meeting"
                target="_blank"
                rel="noreferrer"
              >
                <span className="btn__label">{plan.isPopular ? "Start Subscription" : "Choose Handover"}</span>
              </a>
              <div className="plan__guarantee">
                <ShieldCheck size={16} />
                14-day money-back guarantee
              </div>
            </article>
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "3rem",
            padding: "1.5rem",
            border: "1px dashed var(--stroke)",
            borderRadius: "var(--radius-lg)",
            background: "rgba(22, 41, 74, 0.3)",
          }}
        >
          <h4 style={{ color: "var(--white)", marginBottom: "0.5rem" }}>Are you one of our first 2 clients?</h4>
          <p style={{ color: "var(--slate)", fontSize: "0.95rem", marginBottom: "1rem" }}>
            You may qualify for a completely free build in exchange for a case study.
          </p>
          <a href="#founding-offer" className="btn btn--ghost btn--sm">
            Apply for Founding Offer
          </a>
        </div>

        <ul className="price-foot" style={{ marginTop: "3rem" }}>
          <li>
            <RefreshCw size={15} />
            Free strategy call before you decide
          </li>
          <li>
            <Lock size={15} />
            You own your domain &amp; content
          </li>
          <li>
            <Headset size={15} />
            Real humans, UK &amp; US hours
          </li>
        </ul>
      </div>
    </section>
  );
}
