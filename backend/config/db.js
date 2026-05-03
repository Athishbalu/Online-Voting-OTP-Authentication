require("dotenv").config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 60000,
      socketTimeoutMS: 60000,
      tls: true,
      tlsAllowInvalidCertificates: true,
    });
    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.error("MongoDB Error ❌", error.message);
  }
};

module.exports = connectDB;