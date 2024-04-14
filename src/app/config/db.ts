import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL!);
    console.log("Connected to MONGO DB!");
  } catch (error) {
    console.log("Error connectin to MongoDB:", error);
  }
};
 