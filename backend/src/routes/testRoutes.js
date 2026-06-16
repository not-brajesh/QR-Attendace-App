import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import { protectedController } from "../controllers/testController.js";

const router = express.Router();

router.get(
  "/protected",
  authMiddleware,
  protectedController
);

export default router;