import express from "express";
import protect from "../middleware/authMiddleware.js";
import validationMiddleware from "../middleware/validationMiddleware.js";

import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask
} from "../controllers/taskController.js";

import {
  createTaskValidator,
  updateTaskValidator
} from "../validators/taskValidator.js";

const router = express.Router();

router.use(protect);

router.post(
  "/",
  createTaskValidator,
  validationMiddleware,
  createTask
);

router.get("/", getTasks);

router.get("/:id", getTaskById);

router.put(
  "/:id",
  updateTaskValidator,
  validationMiddleware,
  updateTask
);

router.delete("/:id", deleteTask);

export default router;