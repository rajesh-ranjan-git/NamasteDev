const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://root:root@mongodbpractice.mo27xtt.mongodb.net/";

// Function to connect to MongoDB using Mongoose
const connectDB = async () => {
  try {
    // Mongoose connection
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
