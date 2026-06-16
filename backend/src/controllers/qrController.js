import Student from "../models/Student.js";
import generateQRCode from "../utils/qrGenerator.js";

export const generateStudentQR = async (req, res) => {
  try {
    const { studentId } = req.params;

    const student = await Student.findById(studentId);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student Not Found",
      });
    }

    const qrCode = await generateQRCode(student);

    return res.status(200).json({
      success: true,
      student: {
        id: student._id,
        name: student.name,
        rollNumber: student.rollNumber,
        branch: student.branch,
        batch: student.batch,
      },
      qrCode,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};