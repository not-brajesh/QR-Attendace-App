import express from "express";

import attendanceRoutes from "./attendanceRoutes.js";
import authRoutes from "./authRoutes.js";
import studentRoutes from "./studentRoutes.js";
import syllabusRoutes from "./syllabusRoutes.js";
import testRoutes from "./testRoutes.js";
import qrRoutes from "./qrRoutes.js";
import reportRoutes from "./reportRoutes.js";

const router = express.Router();

router.use("/attendance", attendanceRoutes);

router.use("/auth", authRoutes);

router.use("/students", studentRoutes);

router.use("/syllabus", syllabusRoutes);

router.use("/test", testRoutes);

router.use("/qr", qrRoutes);

router.use("/reports", reportRoutes);

export default router;