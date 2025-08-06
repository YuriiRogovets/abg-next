
import mongoose from "mongoose";

let isConnected = false;

export async function connectToDB() {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.DB_URI, { dbName: "abg_products" });
    isConnected = true;
    console.log("🟢 MongoDB connected");
  } catch (error) {
    console.error("🔴 MongoDB connection error", error);
  }
}
