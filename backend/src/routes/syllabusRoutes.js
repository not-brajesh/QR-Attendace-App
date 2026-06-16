import express from "express";

import {
  createSyllabus,
  getAllSyllabus,
} from "../controllers/syllabusController.js";

const router = express.Router();

router.post("/create", createSyllabus);

router.get("/", getAllSyllabus);

export default router;