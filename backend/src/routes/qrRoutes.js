import express from "express";

import { generateStudentQR } from "../controllers/qrController.js";

const router = express.Router();

router.get("/student/:studentId", generateStudentQR);

export default router;