"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut, LayoutDashboard, Briefcase, DollarSign } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  };

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Projects", href: "/admin/projects", icon: Briefcase },
    { name: "Pricing", href: "/admin/pricing", icon: DollarSign },
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside style={{
        width: "260px",
        borderRight: "1px solid var(--stroke)",
        background: "rgba(5, 13, 26, 0.5)",
        padding: "2rem 1.5rem",
        display: "flex",
        flexDirection: "column"
      }}>
        <Link href="/" style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "3rem", display: "block" }}>
          CleanWeb Studio
        </Link>
        
        <nav style={{ display: "flex", flexDirection: "column", gap: "0.8rem", flex: 1 }}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.8rem",
                  padding: "0.8rem 1rem",
                  borderRadius: "8px",
                  background: isActive ? "rgba(0, 230, 118, 0.1)" : "transparent",
                  color: isActive ? "var(--mint)" : "var(--slate)",
                  fontWeight: isActive ? "500" : "400",
                  transition: "all 0.2s ease"
                }}
              >
                <Icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <button 
          onClick={handleLogout}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.8rem",
            padding: "0.8rem 1rem",
            background: "transparent",
            border: "none",
            color: "var(--slate)",
            cursor: "pointer",
            textAlign: "left",
            marginTop: "auto"
          }}
        >
          <LogOut size={18} />
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: "3rem", overflowY: "auto" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {children}
        </div>
      </main>
    </div>
  );
}
