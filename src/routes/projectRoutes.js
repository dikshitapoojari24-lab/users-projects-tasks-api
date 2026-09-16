import express from "express";
import protect from "../middleware/authMiddleware.js";
import validationMiddleware from "../middleware/validationMiddleware.js";

import {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject
} from "../controllers/projectController.js";

import {
  createProjectValidator,
  updateProjectValidator
} from "../validators/projectValidator.js";

const router = express.Router();

router.use(protect);

router.post(
  "/",
  createProjectValidator,
  validationMiddleware,
  createProject
);

router.get("/", getProjects);

router.get("/:id", getProjectById);

router.put(
  "/:id",
  updateProjectValidator,
  validationMiddleware,
  updateProject
);

router.delete("/:id", deleteProject);

export default router;