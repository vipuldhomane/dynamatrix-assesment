import { connect } from "mongoose";

const connectDB = async () => {
  try {
    // Replace with your MongoDB connection string.
    const MONGODB_URI =
      process.env.MONGODB_URI ||
      "mongodb+srv://vipuld:admin@learnjsm.c5jfv.mongodb.net/?retryWrites=true&w=majority&appName=learnjsm";
    await connect(MONGODB_URI);
    console.log("MongoDB connected...");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

export default connectDB;
