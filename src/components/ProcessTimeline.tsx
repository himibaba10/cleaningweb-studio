"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function ProcessTimeline({ children }: { children: ReactNode }) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tl = timelineRef.current;
    const rail = trackRef.current;
    if (!tl || !rail) return;

    let queued = false;
    const update = () => {
      queued = false;
      const vh = window.innerHeight;
      const rect = rail.getBoundingClientRect();
      const vertical = window.matchMedia("(max-width: 860px)").matches;

      let progress = Math.min(Math.max((vh * 0.86 - rect.top) / (vh * 0.62), 0), 1);
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) progress = 1;

      tl.style.setProperty("--tp", progress.toFixed(4));

      const railStart = vertical ? rect.top : rect.left;
      const railLength = vertical ? rect.height : rect.width;

      tl.querySelectorAll(".step").forEach((step) => {
        const dot = step.querySelector(".step__dot") || step;
        const dr = (dot as HTMLElement).getBoundingClientRect();
        const dotPos = (vertical ? dr.top + dr.height / 2 : dr.left + dr.width / 2) - railStart;
        step.classList.toggle("is-active", progress * railLength >= dotPos - 6);
      });
    };

    const schedule = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const timeout = setTimeout(schedule, 100);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <div className="timeline" id="timeline" ref={timelineRef}>
      <span className="timeline__track" aria-hidden="true" ref={trackRef}>
        <span className="timeline__fill"></span>
      </span>
      {children}
    </div>
  );
}
