import express from "express";
import { signup, login, logout } from "../controllers/authController.js";



import {
  signupValidator,
  loginValidator
} from "../validators/authValidator.js";

import validationMiddleware from "../middleware/validationMiddleware.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post(
  "/signup",
  signupValidator,
  validationMiddleware,
  signup
);

router.post(
  "/login",
  loginValidator,
  validationMiddleware,
  login
);

router.post(
  "/logout",
  protect,
  logout
);

export default router;