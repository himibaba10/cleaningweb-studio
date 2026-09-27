import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cleaning.reactiveferdous.com"),
  title: "Cleaning Business Web Design | CleaningWeb Studio",
  description:
    "Premium, conversion-optimized Elementor websites for cleaning companies in the US & UK. We build high-converting websites for cleaning businesses in 48 hours.",
  keywords: [
    "cleaning business web design",
    "websites for cleaning companies",
    "cleaning service web designer",
    "cleaning business website templates",
    "cleaning agency web design"
  ],
  alternates: {
    canonical: "https://cleaning.reactiveferdous.com",
  },
  openGraph: {
    type: "website",
    title: "Cleaning Business Web Design | CleaningWeb Studio",
    description:
      "Premium, conversion-optimized Elementor websites for cleaning companies. Launched in 48 hours.",
    url: "https://cleaning.reactiveferdous.com",
    siteName: "CleaningWeb Studio",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "CleaningWeb Studio",
    "url": "https://cleaning.reactiveferdous.com",
    "logo": "https://cleaning.reactiveferdous.com/assets/cleaningweb-studio-logo.webp",
    "description": "Premium, conversion-optimized Elementor websites for cleaning companies.",
    "email": "himibaba10@gmail.com",
    "telephone": "+8801813240904",
    "areaServed": ["US", "GB", "CA", "AU"],
    "knowsAbout": ["Web Design", "Cleaning Business", "Elementor", "Lead Generation"]
  };

  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable} scroll-smooth`}>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%230A192F'/%3E%3Cpath d='M16 6l2.4 5.6L24 14l-5.6 2.4L16 22l-2.4-5.6L8 14l5.6-2.4z' fill='%2300E676'/%3E%3C/svg%3E"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[var(--navy-900)] text-[var(--mist)] antialiased selection:bg-[var(--mint)] selection:text-[var(--mint-ink)]">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <div className="bg-fx" aria-hidden="true">
          <span className="bg-fx__grid"></span>
          <span className="bg-fx__orb bg-fx__orb--1"></span>
          <span className="bg-fx__orb bg-fx__orb--2"></span>
          <span className="bg-fx__orb bg-fx__orb--3"></span>
        </div>
        {children}
      </body>
    </html>
  );
}
