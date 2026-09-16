import express from "express";
import protect from "../middleware/authMiddleware.js";
import validationMiddleware from "../middleware/validationMiddleware.js";

import {
  getCurrentUser,
  updateCurrentUser
} from "../controllers/userController.js";

import { updateUserValidator } from "../validators/authValidator.js";

const router = express.Router();

router.get(
  "/me",
  protect,
  getCurrentUser
);

router.put(
  "/me",
  protect,
  updateUserValidator,
  validationMiddleware,
  updateCurrentUser
);

export default router;