import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("DB connected");
  } catch (error) {
    console.log("error in db connection", error);
    process.exit(1);
  }
};
