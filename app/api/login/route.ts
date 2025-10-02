import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";

// MongoDB Atlas URI
const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri);

// Database & collection
const dbName = "your_db_name";
const collectionName = "users";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
    }

    await client.connect();
    const db = client.db(dbName);
    const users = db.collection(collectionName);

    // Find user by email
    const user = await users.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 401 });
    }

    // Compare password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json({ message: "Invalid password" }, { status: 401 });
    }

    // Return user without password
    const { password: _, ...safeUser } = user;
    return NextResponse.json(safeUser, { status: 200 });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  } finally {
    await client.close();
  }
}
