import express from "express";

import {
  registerStudent,
  loginStudent,
  loginUser,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerStudent);

router.post("/login", loginStudent);

router.post("/role-login", loginUser);

export default router;