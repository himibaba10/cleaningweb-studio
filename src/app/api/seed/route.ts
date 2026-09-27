import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Project from "@/models/Project";
import Pricing from "@/models/Pricing";
import { revalidatePricing, revalidateProjects } from "@/lib/revalidate";

export async function GET() {
  try {
    await connectToDatabase();

    let seededProjects = false;
    let seededPricing = false;

    // Seed Projects
    const projectsCount = await Project.countDocuments();
    if (projectsCount === 0) {
      await Project.create([
        {
          title: "Sparkle Theme",
          description: "A bright and airy design perfect for residential cleaning services.",
          previewLink: "https://example.com/sparkle",
          previewImg: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1000",
          category: "Residential"
        },
        {
          title: "Executive Theme",
          description: "Professional corporate look for commercial cleaning businesses.",
          previewLink: "https://example.com/executive",
          previewImg: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000",
          category: "Commercial"
        },
        {
          title: "Grime Fighter",
          description: "Bold and rugged design for power washing and exterior cleaning.",
          previewLink: "https://example.com/grime",
          previewImg: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1000",
          category: "Exterior"
        }
      ]);
      seededProjects = true;
    }

    // Seed Pricing
    const pricingCount = await Pricing.countDocuments();
    if (pricingCount === 0) {
      await Pricing.create([
        {
          planName: "Own it outright",
          price: 200,
          currency: "$",
          description: "A one-time build, installed on hosting you control.",
          features: [
            "One-time setup & full handover",
            "Branding, copy & imagery customised",
            "Installed on your own hosting",
            "Elementor editing access from day one",
            "30 days of post-launch support"
          ],
          isPopular: false
        },
        {
          planName: "We run everything",
          price: 20,
          currency: "$",
          description: "Hosted, maintained and updated. You never touch a plugin.",
          features: [
            "Branding, copy & imagery customised",
            "Fully managed hosting & SSL included",
            "Monthly maintenance & plugin updates",
            "Speed, uptime & security monitoring",
            "Zero tech headaches, cancel anytime"
          ],
          isPopular: true
        }
      ]);
      seededPricing = true;
    }

    if (seededProjects) revalidateProjects();
    if (seededPricing) revalidatePricing();

    return NextResponse.json({ message: "Database seeded successfully with dummy content." });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
