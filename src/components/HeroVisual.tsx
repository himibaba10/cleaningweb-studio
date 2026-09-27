"use client";

import type { ReactNode } from "react";
import { useParallax } from "../hooks/useParallax";

export function HeroVisual({ children }: { children: ReactNode }) {
  const { heroVisualRef, heroStageRef } = useParallax();

  return (
    <div className="hero__visual" ref={heroVisualRef}>
      <div className="devices" ref={heroStageRef}>
        {children}
      </div>
    </div>
  );
}
