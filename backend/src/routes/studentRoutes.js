import express from "express";
import upload from "../middleware/uploadMiddleware.js";

import {
  importStudents,
  getAllStudents,
  getStudentById,
} from "../controllers/studentController.js";

const router = express.Router();

router.post(
  "/import",
  upload.single("file"),
  importStudents
);

router.get("/", getAllStudents);

router.get("/:id", getStudentById);

export default router;