import { revalidatePath, revalidateTag } from "next/cache";
import { CACHE_TAGS } from "@/lib/cache-tags";

export function revalidateProjects() {
  revalidateTag(CACHE_TAGS.projects, "max");
  revalidatePath("/");
}

export function revalidatePricing() {
  revalidateTag(CACHE_TAGS.pricing, "max");
  revalidatePath("/");
}
