require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL || "mongodb+srv://shrestharajani155:4D8d7wwfLTgDYvYL@rajani.fybnml0.mongodb.net/mern-protfolio", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB connected successfully");
    const connection = mongoose.connection;
    connection.on("error", err => {
      console.error("MongoDB connection error:", err);
    });
    connection.on("disconnected", () => {
      console.log("MongoDB disconnected");
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
module.exports = connectDB;