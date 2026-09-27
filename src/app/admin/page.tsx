"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Briefcase, DollarSign } from "lucide-react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({ projects: 0, pricing: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [projectsRes, pricingRes] = await Promise.all([
          fetch("/api/projects"),
          fetch("/api/pricing")
        ]);
        
        const projects = await projectsRes.json();
        const pricing = await pricingRes.json();
        
        setStats({
          projects: projects.length || 0,
          pricing: pricing.length || 0
        });
      } catch (error) {
        console.error("Failed to fetch stats", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchStats();
  }, []);

  return (
    <div>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>Dashboard</h1>
      <p style={{ color: "var(--slate)", marginBottom: "3rem" }}>Welcome back, Admin. Here is an overview of your site.</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
        
        {/* Projects Card */}
        <div className="bento__card">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ padding: "1rem", background: "rgba(0, 230, 118, 0.1)", borderRadius: "12px", color: "var(--mint)" }}>
              <Briefcase size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: "1.2rem", color: "var(--slate)" }}>Total Projects</h3>
              <div style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
                {loading ? "..." : stats.projects}
              </div>
            </div>
          </div>
          <Link href="/admin/projects" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--mint)", fontSize: "0.9rem" }}>
            Manage Projects <ArrowRight size={16} />
          </Link>
        </div>

        {/* Pricing Card */}
        <div className="bento__card">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ padding: "1rem", background: "rgba(0, 230, 118, 0.1)", borderRadius: "12px", color: "var(--mint)" }}>
              <DollarSign size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: "1.2rem", color: "var(--slate)" }}>Pricing Plans</h3>
              <div style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
                {loading ? "..." : stats.pricing}
              </div>
            </div>
          </div>
          <Link href="/admin/pricing" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--mint)", fontSize: "0.9rem" }}>
            Manage Pricing <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  );
}
