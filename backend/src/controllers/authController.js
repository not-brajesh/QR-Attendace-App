import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import Student from "../models/Student.js";
import Faculty from "../models/Faculty.js";
import Admin from "../models/Admin.js";

export const registerStudent = async (req, res) => {
  try {
    const { name, rollNumber, email, password, batch } = req.body;

    const existingStudent = await Student.findOne({
      $or: [{ email }, { rollNumber }],
    });

    if (existingStudent) {
      return res.status(400).json({
        success: false,
        message: "Student already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const student = await Student.create({
      name,
      rollNumber,
      email,
      password: hashedPassword,
      batch,
    });

    return res.status(201).json({
      success: true,
      message: "Student Registered Successfully",
      student,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const loginStudent = async (req, res) => {
  try {
    const { email, password } = req.body;

    const student = await Student.findOne({ email });

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    let isMatch = false;

    if (student.password.startsWith("$2")) {
      isMatch = await bcrypt.compare(password, student.password);
    } else {
      isMatch = password === student.password;
    }

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        id: student._id,
        role: student.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    return res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      student,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    let user = null;

    if (role === "student") {
      user = await Student.findOne({ email });
    }

    if (role === "faculty") {
      user = await Faculty.findOne({ email });
    }

    if (role === "admin") {
      user = await Admin.findOne({ email });
    }

    if (!user) {
      return res.status(404).json({
        success: false,
        message: `${role} not found`,
      });
    }

    let isMatch = false;

    if (user.password.startsWith("$2")) {
      isMatch = await bcrypt.compare(password, user.password);
    } else {
      isMatch = password === user.password;
    }

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    return res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      role: user.role,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};