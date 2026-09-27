import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Project from "@/models/Project";
import { verifyJwt } from "@/lib/jwt";
import { cookies } from "next/headers";
import { revalidateProjects } from "@/lib/revalidate";

async function isAuthenticated() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth-token")?.value;
  if (!token) return false;
  return await verifyJwt(token);
}

export async function PUT(req: Request, context: any) {
  try {
    if (!(await isAuthenticated())) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    const { id } = await context.params;
    const body = await req.json();
    await connectToDatabase();
    const updated = await Project.findByIdAndUpdate(id, body, { new: true, runValidators: true });
    if (!updated) return NextResponse.json({ message: "Not found" }, { status: 404 });
    revalidateProjects();
    return NextResponse.json(updated);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request, context: any) {
  try {
    if (!(await isAuthenticated())) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    const { id } = await context.params;
    await connectToDatabase();
    const deleted = await Project.findByIdAndDelete(id);
    if (!deleted) return NextResponse.json({ message: "Not found" }, { status: 404 });
    revalidateProjects();
    return NextResponse.json({ message: "Deleted successfully" });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
