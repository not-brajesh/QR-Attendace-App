import mongoose from "mongoose";

const syllabusSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      required: true,
    },

    faculty: {
      type: String,
      required: true,
    },

    totalTopics: {
      type: Number,
      required: true,
    },

    completedTopics: {
      type: Number,
      default: 0,
    },

    completionPercentage: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Syllabus",
  syllabusSchema
);