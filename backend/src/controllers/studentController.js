import xlsx from "xlsx";
import bcrypt from "bcryptjs";
import Student from "../models/Student.js";

export const importStudents = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Excel File Required",
      });
    }

    const workbook = xlsx.readFile(req.file.path);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    const students = xlsx.utils.sheet_to_json(worksheet);

    const password = await bcrypt.hash("123456", 10);

    const formattedStudents = students.map((student) => ({
      name: student["Full Name"],
      email: student["Email Address"],
      batch: student["Division"] || "2025",
      rollNumber: String(student["Rg. No."]),
      password,
    }));

    const insertedStudents = [];

    for (const student of formattedStudents) {
      const exists = await Student.findOne({
        $or: [
          { email: student.email },
          { rollNumber: student.rollNumber },
        ],
      });

      if (!exists) {
        const created = await Student.create(student);
        insertedStudents.push(created);
      }
    }

    return res.status(201).json({
      success: true,
      count: insertedStudents.length,
      defaultPassword: "123456",
      message: "Students Imported Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().select("-password");

    return res.status(200).json({
      success: true,
      count: students.length,
      students,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).select("-password");

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student Not Found",
      });
    }

    return res.status(200).json({
      success: true,
      student,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};