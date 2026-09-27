import { useState, useEffect } from "react";

export function useCounters() {
  const [counts, setCounts] = useState({ count48: 0, count120: 0, count98: 0 });

  useEffect(() => {
    const duration = 1600;
    const start = performance.now();

    const animate = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCounts({
        count48: Math.round(48 * eased),
        count120: Math.round(120 * eased),
        count98: Math.round(98 * eased),
      });
      if (p < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return counts;
}
