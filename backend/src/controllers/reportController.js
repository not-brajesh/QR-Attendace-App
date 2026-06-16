import Attendance from "../models/Attendance.js";
import Student from "../models/Student.js";
import XLSX from "xlsx";
import path from "path";
import fs from "fs";

const formatDate = (value) => {
try {
if (!value) return "";


if (typeof value === "string") {
  if (
    value.match(/^\d{4}-\d{2}-\d{2}$/)
  ) {
    return value;
  }

  const d = new Date(value);

  if (!isNaN(d.getTime())) {
    return d
      .toISOString()
      .split("T")[0];
  }

  return "";
}

const d = new Date(value);

if (isNaN(d.getTime())) {
  return "";
}

return d
  .toISOString()
  .split("T")[0];


} catch {
return "";
}
};

export const getDailyReport = async (
req,
res
) => {
try {
const today = new Date()
.toISOString()
.split("T")[0];


const attendance =
  await Attendance.find({
    date: today,
  }).populate("student");

return res.status(200).json({
  success: true,
  date: today,
  totalPresent:
    attendance.length,
  attendance,
});


} catch (error) {
return res.status(500).json({
success: false,
message: error.message,
});
}
};

export const exportAttendanceSheet =
async (req, res) => {
try {
const students =
await Student.find().sort({
rollNumber: 1,
});


  const attendance =
    await Attendance.find().lean();

  const dates = [
    ...new Set(
      attendance
        .map((record) =>
          formatDate(
            record.date
          )
        )
        .filter(Boolean)
    ),
  ].sort();

  const sheetData = [];

  const headers = [
    "Rg. No.",
    "Full Name",
    "Email Address",
    "Batch",
    "Department",
    ...dates,
  ];

  sheetData.push(headers);

  students.forEach(
    (student) => {
      const row = [
        student.rollNumber,
        student.name,
        student.email,
        student.batch,
        student.department,
      ];

      dates.forEach(
        (date) => {
          const presentRecord =
            attendance.find(
              (record) => {
                const recordDate =
                  formatDate(
                    record.date
                  );

                return (
                  record.student.toString() ===
                    student._id.toString() &&
                  recordDate ===
                    date
                );
              }
            );

          row.push(
            presentRecord
              ? "P"
              : "A"
          );
        }
      );

      sheetData.push(row);
    }
  );

  const workbook =
    XLSX.utils.book_new();

  const worksheet =
    XLSX.utils.aoa_to_sheet(
      sheetData
    );

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Attendance"
  );

  const uploadsDir =
    path.join(
      process.cwd(),
      "uploads"
    );

  if (
    !fs.existsSync(
      uploadsDir
    )
  ) {
    fs.mkdirSync(
      uploadsDir,
      {
        recursive: true,
      }
    );
  }

  const filePath =
    path.join(
      uploadsDir,
      "Attendance_Report.xlsx"
    );

  XLSX.writeFile(
    workbook,
    filePath
  );

  return res.download(
    filePath,
    "Attendance_Report.xlsx"
  );
} catch (error) {
  console.log(error);

  return res.status(500).json({
    success: false,
    message:
      error.message,
  });
}

};
