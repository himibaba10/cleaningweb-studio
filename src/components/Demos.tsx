import React from "react";
import { Lock, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { getProjects } from "@/lib/data";

export async function Demos() {
  const projects = await getProjects();

  return (
    <section className="section demos" id="demos">
      <div className="container">
        <div className="sec-head">
          <span className="eyebrow">The Demo Showcase</span>
          <h2 className="sec-title">
            Choose Your <span className="text-gradient">Conversion Machine</span>
          </h2>
          <p className="sec-sub">
            Every <strong className="text-highlight">WordPress Elementor</strong> template is built on the same
            conversion framework — a single primary action, proof above the fold, and pricing that answers objections
            before they are raised. Hover a card to preview the full page.
          </p>
        </div>

        <div className="demo-grid">
          {projects.map((project) => {
            let hostname = "example.com";
            try {
              if (project.previewLink) hostname = new URL(project.previewLink).hostname;
            } catch {}

            return (
              <article
                key={project._id}
                className="demo-card"
                style={{ "--glow": "0 30px 70px -20px rgba(0, 230, 118, 0.55)" } as React.CSSProperties}
              >
                <div className="demo-card__badge">{project.category}</div>
                <div className="demo-card__preview">
                  <div className="browser">
                    <div className="browser__bar">
                      <span className="browser__dots">
                        <i></i>
                        <i></i>
                        <i></i>
                      </span>
                      <span className="browser__url">
                        <Lock size={12} />
                        {hostname}
                      </span>
                    </div>
                    <div className="browser__screen">
                      {project.previewImg ? (
                        <div className="mk">
                          <Image
                            src={project.previewImg}
                            alt={project.title}
                            width={1200}
                            height={2000}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            style={{ width: "100%", height: "auto", display: "block" }}
                          />
                        </div>
                      ) : (
                        <div style={{ display: "grid", placeItems: "center", height: "100%", color: "var(--slate)" }}>
                          No Image
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="demo-card__body">
                  <h3 className="demo-card__title">{project.title}</h3>
                  <p className="demo-card__desc">{project.description}</p>
                  <div className="demo-card__cta">
                    <a className="btn btn--primary btn--block" href={project.previewLink} target="_blank" rel="noreferrer">
                      <span className="btn__label">View Live Demo</span>
                      <ArrowUpRight className="btn__icon" />
                    </a>
                    <a
                      className="btn btn--ghost btn--block"
                      href="https://calendly.com/himibaba/new-meeting"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="btn__label">Select This Setup</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
