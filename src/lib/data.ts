import { unstable_cache } from "next/cache";
import connectToDatabase from "@/lib/mongodb";
import Project from "@/models/Project";
import Pricing from "@/models/Pricing";
import { CACHE_TAGS } from "@/lib/cache-tags";

export type ProjectDTO = {
  _id: string;
  title: string;
  description: string;
  previewLink: string;
  previewImg: string;
  category: string;
};

export type PricingDTO = {
  _id: string;
  planName: string;
  price: number;
  currency: string;
  description: string;
  features: string[];
  isPopular: boolean;
};

async function fetchProjects(): Promise<ProjectDTO[]> {
  await connectToDatabase();
  const projects = await Project.find({}).sort({ createdAt: -1 }).lean();

  return projects.map((project) => ({
    _id: String(project._id),
    title: project.title,
    description: project.description,
    previewLink: project.previewLink,
    previewImg: project.previewImg,
    category: project.category,
  }));
}

async function fetchPricing(): Promise<PricingDTO[]> {
  await connectToDatabase();
  const plans = await Pricing.find({}).sort({ price: 1 }).lean();

  return plans.map((plan) => ({
    _id: String(plan._id),
    planName: plan.planName,
    price: plan.price,
    currency: plan.currency,
    description: plan.description,
    features: plan.features,
    isPopular: plan.isPopular,
  }));
}

/** Cached forever until `revalidateProjects()` runs (admin create/update/delete). */
export const getProjects = unstable_cache(fetchProjects, ["projects-list"], {
  tags: [CACHE_TAGS.projects],
  revalidate: false,
});

/** Cached forever until `revalidatePricing()` runs (admin create/update/delete). */
export const getPricing = unstable_cache(fetchPricing, ["pricing-list"], {
  tags: [CACHE_TAGS.pricing],
  revalidate: false,
});
