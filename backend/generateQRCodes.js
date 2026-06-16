import mongoose from "mongoose";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import QRCode from "qrcode";

import Student from "./src/models/Student.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MONGO_URI =
  "mongodb://127.0.0.1:27017/qr-attendance-system";

const outputDir = path.join(
  __dirname,
  "uploads",
  "qrcodes"
);

await fs.mkdir(outputDir, {
  recursive: true,
});

await mongoose.connect(MONGO_URI);

const students = await Student.find().sort({
  rollNumber: 1,
});

console.log(
  "Students Found:",
  students.length
);

let generated = 0;

for (const student of students) {
  try {
    // QR will contain only Student ID
    const qrPayload =
      student._id.toString();

    const safeName = student.name
      .replace(/[^a-zA-Z0-9]/g, "_")
      .replace(/_+/g, "_");

    const fileName =
      `${student.rollNumber}_${safeName}.png`;

    const filePath = path.join(
      outputDir,
      fileName
    );

    await QRCode.toFile(
      filePath,
      qrPayload,
      {
        width: 400,
        margin: 2,
      }
    );

    student.qrCode =
      `uploads/qrcodes/${fileName}`;

    await student.save();

    generated++;

    console.log(
      `✅ QR Generated: ${student.rollNumber} - ${student.name}`
    );
  } catch (err) {
    console.log(
      `❌ Failed: ${student.rollNumber} - ${student.name}`
    );

    console.log(err.message);
  }
}

console.log("\n====================");
console.log(
  "Total Generated:",
  generated
);
console.log("====================");

await mongoose.disconnect();

process.exit(0);