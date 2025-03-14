import { connect } from "mongoose";

const connectDB = async () => {
  try {
    // Replace with your MongoDB connection string.
    const MONGODB_URI =
      process.env.MONGODB_URI || "mongodb://localhost:27017/incidentDB";
    await connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected...");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

export default connectDB;
