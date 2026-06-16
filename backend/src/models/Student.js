import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    rollNumber: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    batch: {
      type: String,
      required: true,
    },

    department: {
      type: String,
      default: "AI&DS",
    },

    qrCode: {
      type: String,
      default: "",
    },

    role: {
      type: String,
      default: "student",
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);

export default Student;