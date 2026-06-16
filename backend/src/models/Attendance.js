import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },

    date: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["Present", "Absent"],
      default: "Present",
    },

    punchIn: {
      type: Date,
    },

    punchOut: {
      type: Date,
    },

    subject: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Attendance",
  attendanceSchema
);