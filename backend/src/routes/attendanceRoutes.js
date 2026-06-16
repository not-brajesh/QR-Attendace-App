import express from "express";

import {
  markAttendance,
  getTodayAttendance,
  exportTodayAttendance,
  exportAllAttendance,
} from "../controllers/attendanceController.js";

const router = express.Router();

router.post("/mark", markAttendance);

router.get("/today", getTodayAttendance);

router.get("/export/today", exportTodayAttendance);

router.get("/export/all", exportAllAttendance);

export default router;