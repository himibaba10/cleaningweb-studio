import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function GET() {
  try {
    await connectToDatabase();
    
    // Check if any user exists
    const usersCount = await User.countDocuments();
    if (usersCount > 0) {
      return NextResponse.json({ message: "Admin user already exists. Setup disabled." }, { status: 400 });
    }

    const email = process.env.ADMIN_EMAIL || "admin@example.com";
    const password = process.env.ADMIN_PASSWORD || "admin123";

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await User.create({
      name: "Admin",
      email: email,
      password: hashedPassword,
      role: "admin"
    });

    return NextResponse.json({ 
      message: "Admin user created successfully", 
      email: admin.email,
      note: "Please remove this route after setup or just ignore it. It won't work again."
    });
  } catch (error) {
    return NextResponse.json({ message: (error as Error).message }, { status: 500 });
  }
}
