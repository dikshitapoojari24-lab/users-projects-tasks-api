import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

import notFoundMiddleware from "./middleware/notFoundMiddleware.js";
import errorMiddleware from "./middleware/errorMiddleware.js";

const app = express();
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the Task 3:- Persistent Data Layer.",
    database: "MongoDB",
    health: "/api/health",
    endpoints: {
      auth: "/api/auth",
      users: "/api/users",
      projects: "/api/projects",
      tasks: "/api/tasks"
    }
  });
});

// ===============================
// GLOBAL MIDDLEWARE
// ===============================

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// ===============================
// HEALTH CHECK
// ===============================

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Users, Projects & Tasks API is running"
  });
});

// ===============================
// API ROUTES
// ===============================

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);

// ===============================
// ERROR HANDLING
// ===============================

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;