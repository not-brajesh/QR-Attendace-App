import Syllabus from "../models/Syllabus.js";

export const createSyllabus = async (req, res) => {
  try {
    const {
      subject,
      faculty,
      totalTopics,
      completedTopics,
    } = req.body;

    const completionPercentage =
      (completedTopics / totalTopics) * 100;

    const syllabus = await Syllabus.create({
      subject,
      faculty,
      totalTopics,
      completedTopics,
      completionPercentage,
    });

    return res.status(201).json({
      success: true,
      syllabus,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllSyllabus = async (req, res) => {
  try {
    const syllabus = await Syllabus.find();

    return res.status(200).json({
      success: true,
      count: syllabus.length,
      syllabus,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};