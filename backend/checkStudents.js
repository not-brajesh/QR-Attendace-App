import mongoose from "mongoose";
import Student from "./src/models/Student.js";

await mongoose.connect(
  "mongodb://127.0.0.1:27017/qr-attendance-system"
);

const count = await Student.countDocuments();

console.log("Students:", count);

const sample = await Student.find().limit(5);

console.log(sample);

process.exit();