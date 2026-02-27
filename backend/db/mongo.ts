import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// connection to mongoDB through URI
export async function connectMongo() {
    const uri = process.env.MONGO_URI;

    if (!uri) {
        throw new Error("MONGO_URI is missing in .env");
    }

    await mongoose.connect(uri);
    console.log("Mongo DB connected");
}