import { useEffect, useRef } from "react";

export function useParallax() {
  const heroVisualRef = useRef<HTMLDivElement>(null);
  const heroStageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = heroVisualRef.current;
    const stage = heroStageRef.current;
    if (!wrap || !stage) return;

    let frame: number | null = null;
    const handlePointerMove = (e: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        const r = wrap.getBoundingClientRect();
        const px = (e.clientX - (r.left + r.width / 2)) / r.width;
        const py = (e.clientY - (r.top + r.height / 2)) / r.height;
        stage.style.setProperty("--px", `${(px * 18).toFixed(2)}px`);
        stage.style.setProperty("--py", `${(py * 14).toFixed(2)}px`);
      });
    };

    const handlePointerLeave = () => {
      if (frame) cancelAnimationFrame(frame);
      stage.style.setProperty("--px", "0px");
      stage.style.setProperty("--py", "0px");
    };

    wrap.addEventListener("pointermove", handlePointerMove);
    wrap.addEventListener("pointerleave", handlePointerLeave);
    return () => {
      wrap.removeEventListener("pointermove", handlePointerMove);
      wrap.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return { heroVisualRef, heroStageRef };
}
