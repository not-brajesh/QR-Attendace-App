import express from "express";

import {
  getDailyReport,
  exportAttendanceSheet,
} from "../controllers/reportController.js";

const router = express.Router();

router.get("/daily", getDailyReport);

router.get(
  "/export-attendance",
  exportAttendanceSheet
);

export default router;