import { MongoClient } from "mongodb";
let db;
export const connectDB = async () => {
  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    await client.connect();
    db = client.db();
    console.log("Connected to MongoDB");
    return db;
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err;
  }
};
export const getDB = () => {
  if (!db) {
    throw new Error("Database not initialized");
  }
  return db;
};
