import { mongoose } from "mongoose";

const connectDB = async () => {
  console.log("Connecting database...");

  await mongoose.connect(
    "mongodb+srv://root:root@mongodbpractice.mo27xtt.mongodb.net/mongodbpractice"
  );

  console.log("Database connected...!");
};

export default connectDB;
