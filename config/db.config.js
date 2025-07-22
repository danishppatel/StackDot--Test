import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DB_URI = process.env.MONGO_URI;

const MongoDBConnectDB = async () => {
    try {
        console.log("Connecting to MongoDB...");

        await mongoose.connect(DB_URI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        throw error;
    }
}

export default MongoDBConnectDB;