import { useState, useEffect } from "react";

export function useNav() {
  const [navStuck, setNavStuck] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const handleScroll = () => {
      setNavStuck(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const sections = ["demos", "features", "pricing", "process"]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
      );
      sections.forEach((s) => io.observe(s));
      return () => io.disconnect();
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { navStuck, mobileMenuOpen, setMobileMenuOpen, activeSection };
}
