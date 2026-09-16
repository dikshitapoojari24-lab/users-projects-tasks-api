# Users, Projects & Tasks REST API

A production-ready REST API for managing users, projects, and tasks.

This backend provides secure user authentication, project management, task management, validation, centralized error handling, and JWT-based authorization.

---

## 🚀 Features

- User registration and login
- JWT-based authentication
- Protected API routes
- Get and update current user profile
- Create and retrieve projects
- Create, retrieve, update, and delete tasks
- Task status management
- Task statuses:
  - `todo`
  - `in-progress`
  - `done`
- Project-task relationship
- Input validation using Express Validator
- Centralized error handling
- MongoDB database integration using Mongoose
- Secure password hashing using bcrypt
- Environment variable configuration
- CORS support
- Helmet security middleware
- HTTP request logging with Morgan

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Authentication & Security
- JSON Web Token (JWT)
- bcryptjs
- Helmet
- CORS

### Validation & Utilities
- Express Validator
- Morgan
- dotenv

### Testing
- Thunder Client

---

## 📁 Project Structure

```text
users-projects-tasks-api/
│
├── api/
│   └── index.js
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── projectController.js
│   │   └── taskController.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   ├── errorMiddleware.js
│   │   ├── notFoundMiddleware.js
│   │   └── validationMiddleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Project.js
│   │   └── Task.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   ├── projectRoutes.js
│   │   └── taskRoutes.js
│   │
│   ├── utils/
│   │   └── generateToken.js
│   │
│   ├── validators/
│   │   ├── authValidator.js
│   │   ├── projectValidator.js
│   │   └── taskValidator.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── .env.example
├── .gitignore
├── package.json
└── README.md