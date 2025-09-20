// src/app/api/signup/route.ts

import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";

// Ensure MONGODB_URI is set in your .env file
const uri = process.env.MONGODB_URI as string;
if (!uri) throw new Error("❌ MONGODB_URI not set in .env");

// Re-use Mongo client across hot reloads in development
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!(global as any)._mongoClientPromise) {
  client = new MongoClient(uri);
  (global as any)._mongoClientPromise = client.connect();
}
clientPromise = (global as any)._mongoClientPromise;

// API Route: POST /api/signup
export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, password, dob} =
      await req.json();

    // ✅ Validate required fields
    if (!firstName || !lastName || !email || !password || !dob ) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400 }
      );
    }

    // ✅ Connect to DB
    const client = await clientPromise;
    const db = client.db("test"); // 👈 Change to your actual DB name
    const users = db.collection("users");

    // ✅ Check if email already exists
    const existingUser = await users.findOne({ email: email.toLowerCase().trim() });
    if (existingUser) {
      return new Response(
        JSON.stringify({ error: "Email already registered" }),
        { status: 400 }
      );
    }

    // ✅ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Insert user
    const result = await users.insertOne({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.toLowerCase().trim(),
      password: hashedPassword,
      dob: new Date(dob),
      createdAt: new Date(),
    });

    return new Response(
      JSON.stringify({
        message: "User created successfully",
        id: result.insertedId,
      }),
      { status: 201 }
    );
  } catch (err) {
    console.error("❌ Error in signup:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}