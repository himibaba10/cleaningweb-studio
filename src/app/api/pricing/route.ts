import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Pricing from "@/models/Pricing";
import { verifyJwt } from "@/lib/jwt";
import { cookies } from "next/headers";
import { getPricing } from "@/lib/data";
import { revalidatePricing } from "@/lib/revalidate";

async function isAuthenticated() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth-token")?.value;
  if (!token) return false;
  return await verifyJwt(token);
}

export async function GET() {
  try {
    const pricings = await getPricing();
    return NextResponse.json(pricings);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    if (!(await isAuthenticated())) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    await connectToDatabase();

    const pricing = await Pricing.create(body);
    revalidatePricing();
    return NextResponse.json(pricing, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
