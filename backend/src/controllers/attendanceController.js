import Attendance from "../models/Attendance.js";
import Student from "../models/Student.js";
import XLSX from "xlsx";

// Helper to get today's date in IST (YYYY-MM-DD)
const getTodayIST = () => {
  return new Date().toLocaleDateString("en-CA", {
    timeZone: "Asia/Kolkata",
  });
};

export const markAttendance = async (req, res) => {
  try {
    const { studentId, subject } = req.body;

    const today = getTodayIST();

    const existingAttendance = await Attendance.findOne({
      student: studentId,
      date: today,
    });

    if (existingAttendance) {
      return res.status(400).json({
        success: false,
        message: "Attendance Already Marked",
      });
    }

    const attendance = await Attendance.create({
      student: studentId,
      date: today,
      subject,
      punchIn: new Date(),
      status: "Present",
    });

    res.status(201).json({
      success: true,
      attendance,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getTodayAttendance = async (req, res) => {
  try {
    const today = getTodayIST();

    const attendance = await Attendance.find({
      date: today,
    }).populate("student");

    res.status(200).json({
      success: true,
      count: attendance.length,
      attendance,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const exportTodayAttendance = async (req, res) => {
  try {
    const today = getTodayIST();

    const students = await Student.find().lean();
    const attendance = await Attendance.find({
      date: today,
    }).lean();

    const presentStudents = new Set();
    attendance.forEach((item) => {
      if (item.student) {
        presentStudents.add(String(item.student));
      }
    });

    const report = students.map((student) => ({
      "Roll No": student.rollNumber || "",
      Name: student.name || "",
      Batch: student.batch || "",
      Department: student.department || "",
      [today]: presentStudents.has(String(student._id)) ? "P" : "A",
    }));

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(report);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Today Attendance");

    const buffer = XLSX.write(workbook, {
      type: "buffer",
      bookType: "xlsx",
    });

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=today_attendance.xlsx"
    );
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    return res.send(buffer);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const exportAllAttendance = async (req, res) => {
  try {
    const students = await Student.find().lean();
    const attendance = await Attendance.find().lean();

    const uniqueDates = [
      ...new Set(
        attendance
          .map((a) => a.date)
          .filter(Boolean)
      ),
    ].sort();

    const report = students.map((student) => {
      const row = {
        "Roll No": student.rollNumber || "",
        Name: student.name || "",
        Batch: student.batch || "",
        Department: student.department || "",
      };

      uniqueDates.forEach((date) => {
        const found = attendance.some(
          (a) =>
            String(a.student) === String(student._id) &&
            a.date === date
        );
        row[date] = found ? "P" : "A";
      });

      return row;
    });

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(report);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Attendance Register");

    const buffer = XLSX.write(workbook, {
      type: "buffer",
      bookType: "xlsx",
    });

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=attendance_register.xlsx"
    );
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    return res.send(buffer);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};