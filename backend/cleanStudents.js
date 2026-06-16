import xlsx from "xlsx";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/*
  INPUT FILE:
  qr-attendance-system/data/Impact Training.xlsx

  OUTPUT FILE:
  qr-attendance-system/data/Master_Students.xlsx
*/

const inputFile = path.join(
  __dirname,
  "../data/Impact Training.xlsx"
);

const outputFile = path.join(
  __dirname,
  "../data/Master_Students.xlsx"
);

const workbook = xlsx.readFile(inputFile);

const sheet =
  workbook.Sheets[workbook.SheetNames[0]];

const students = xlsx.utils.sheet_to_json(sheet, {
  defval: "",
});

console.log("Original Records:", students.length);

const uniqueStudents = [];
const seen = new Set();

for (const student of students) {
  const email = String(
    student["Email Address"] || ""
  )
    .trim()
    .toLowerCase();

  const name = String(
    student["Full Name"] || ""
  )
    .trim()
    .toLowerCase();

  const phone = String(
    student["Phone Number"] || ""
  )
    .trim();

  const key = email || `${name}_${phone}`;

  if (!seen.has(key)) {
    seen.add(key);

    uniqueStudents.push({
      ...student,
    });
  }
}

// Reassign Roll Numbers
uniqueStudents.forEach((student, index) => {
  student["Rg. No."] = index + 1;
});

console.log(
  "Unique Records:",
  uniqueStudents.length
);

const newSheet =
  xlsx.utils.json_to_sheet(uniqueStudents);

const newWorkbook = xlsx.utils.book_new();

xlsx.utils.book_append_sheet(
  newWorkbook,
  newSheet,
  "Students"
);

xlsx.writeFile(
  newWorkbook,
  outputFile
);

console.log("\n✅ Cleaning Completed");
console.log("📄 Output File:");
console.log(outputFile);
console.log(
  `📊 Removed Duplicates: ${
    students.length - uniqueStudents.length
  }`
);
console.log(
  `👨‍🎓 Final Students: ${uniqueStudents.length}`
);