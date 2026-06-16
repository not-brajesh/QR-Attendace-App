import fs from "fs";
import csv from "csv-parser";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

import Student from "./src/models/Student.js";

await mongoose.connect(
  "mongodb://127.0.0.1:27017/qr-attendance-system"
);

const students = [];

// Read CSV File
await new Promise((resolve, reject) => {
  fs.createReadStream(
    "../data/Master_Students.csv"
  )
    .pipe(csv())
    .on("data", (row) => {
      students.push(row);
    })
    .on("end", resolve)
    .on("error", reject);
});

console.log(
  "Rows Found:",
  students.length
);

const password = await bcrypt.hash(
  "123456",
  10
);

let imported = 0;

for (const row of students) {
  try {
    const email = String(
      row["Email Address"] || ""
    )
      .trim()
      .toLowerCase();

    const rollNumber = String(
      row["Rg. No."] || ""
    ).trim();

    const existingStudent =
      await Student.findOne({
        $or: [
          { email },
          { rollNumber },
        ],
      });

    if (existingStudent) {
      console.log(
        "⚠️ Already Exists:",
        row["Full Name"]
      );
      continue;
    }

    await Student.create({
      name: String(
        row["Full Name"] || ""
      ).trim(),

      rollNumber,

      email,

      password,

      batch: "2025",

      department: String(
        row["Branch"] || ""
      ).trim(),

      qrCode: "",

      role: "student",
    });

    imported++;

    console.log(
      `✅ Imported: ${row["Full Name"]}`
    );
  } catch (err) {
    console.log(
      `❌ Error: ${row["Full Name"]}`
    );

    console.log(err.message);
  }
}

console.log("\n====================");
console.log(
  "Total Imported:",
  imported
);
console.log(
  "Total Rows:",
  students.length
);
console.log("====================");

await mongoose.disconnect();

process.exit(0);