# 🗂️ Task Management Backend API

A Node.js backend for a task-management application built with **Express 5**, **MongoDB (Mongoose)**, and modular architecture (controllers, services, models, routes, middleware).

---

## 🚀 Features

# Task Management Backend API

A Node.js backend for a task-management application built with **Express 5**, **MongoDB (Mongoose)**, and modular architecture (controllers, services, models, routes, middleware).

---

## Features

- User authentication & session handling
- CRUD operations for tasks
- Secure password hashing with bcrypt
- UUID-based identifiers
- Environment-based configuration with dotenv
- Clear, scalable folder structure

## Project Structure

```markdown
src/
├── config/ # Database connection (db.js)
├── controller/ # Request handlers
├── middleware/ # Custom middleware (e.g., sessions)
├── models/ # Mongoose schemas & models
├── routes/ # Express route definitions
├── services/ # Business-logic layer
└── index.js # App entry point
```

## Tech Stack

| Layer           | Library / Tool                |
| --------------- | ----------------------------- |
| Web framework   | **express** `^5.1.0`          |
| DB ORM          | **mongoose** `^8.15.0`        |
| Auth sessions   | **express-session** `^1.18.1` |
| Password hashes | **bcrypt** `^6.0.0`           |
| Env management  | **dotenv** `^16.5.0`          |
| IDs             | **uuid** `^11.1.0`            |

## Quick Start

```bash
# 1. Clone
git clone https://github.com/<your-user>/task-management-backend.git
cd task-management-backend

# 2. Install dependencies
npm install

# 3. Configure environment
cp .env.example .env
# then edit .env (PORT, MONGO_URI, SESSION_SECRET)

# 4. Run the server
npm start
```

## API Endpoints

### User Routes

| Method | Endpoint            | Purpose                |
| ------ | ------------------- | ---------------------- |
| POST   | `/api/users`        | Register new user      |
| POST   | `/api/users/login`  | Login & create session |
| GET    | `/api/users/logout` | Destroy user session   |

### Task Routes

| Method | Endpoint         | Purpose              |
| ------ | ---------------- | -------------------- |
| GET    | `/api/tasks`     | Get all user tasks   |
| POST   | `/api/tasks`     | Create a new task    |
| PUT    | `/api/tasks/:id` | Update existing task |
| DELETE | `/api/tasks/:id` | Delete a task        |

## Environment Variables

| Key              | Example value                      | Description               |
| ---------------- | ---------------------------------- | ------------------------- |
| `PORT`           | `3000`                             | Server port               |
| `MONGO_URI`      | `mongodb://localhost:27017/taskdb` | MongoDB connection string |
| `SESSION_SECRET` | `superSecretKey`                   | Session encryption secret |

An `.env.example` file is included—copy it to `.env` and fill in your values.

```javascript
// src/index.js
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js"; //import the database connection function
import userRoutes from "./routes/user.routes.js"; //import the user routes
import taskRoutes from "./routes/task.routes.js"; //import the task routes
import session from "express-session";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

//session middleware configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 100 * 60 * 60 * 24, // 1 day
    },
  })
);
//Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/user", userRoutes);
app.use("/api/task", taskRoutes);

// Call the function to connect to the database
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  });
```

- User authentication & session handling
- CRUD operations for tasks
- Secure password hashing with bcrypt
- UUID-based identifiers
- Environment-based configuration with dotenv
- Clear, scalable folder structure

---

## 🏗️ Project Structure

src/
├── config/ # Database connection (db.js)
├── controller/ # Request handlers
├── middleware/ # Custom middleware (e.g., sessions)
├── models/ # Mongoose schemas & models
├── routes/ # Express route definitions
├── services/ # Business-logic layer
└── index.js # App entry point

---

## 📦 Tech Stack

| Layer           | Library / Tool                |
| --------------- | ----------------------------- |
| Web framework   | **express** `^5.1.0`          |
| DB ORM          | **mongoose** `^8.15.0`        |
| Auth sessions   | **express-session** `^1.18.1` |
| Password hashes | **bcrypt** `^6.0.0`           |
| Env management  | **dotenv** `^16.5.0`          |
| IDs             | **uuid** `^11.1.0`            |

---

## 🔧 Quick Start

```bash
# 1. Clone
git clone https://github.com/<your-user>/task-management-backend.git
cd task-management-backend

# 2. Install dependencies
npm install

# 3. Configure environment
cp .env.example .env
# then edit .env (PORT, MONGO_URI, SESSION_SECRET)

# 4. Run the server
npm start

## 🧪 API Endpoints

### User Routes

| Method | Endpoint             | Purpose                |
|--------|----------------------|------------------------|
| POST   | `/api/users`         | Register new user      |
| POST   | `/api/users/login`   | Login & create session |
| GET    | `/api/users/logout`  | Destroy user session   |

### Task Routes

| Method | Endpoint             | Purpose              |
|--------|----------------------|----------------------|
| GET    | `/api/tasks`         | Get all user tasks   |
| POST   | `/api/tasks`         | Create a new task    |
| PUT    | `/api/tasks/:id`     | Update existing task |
| DELETE | `/api/tasks/:id`     | Delete a task        |

---

## 📁 Environment Variables

| Key             | Example value                      | Description                |
|------------------|------------------------------------|----------------------------|
| `PORT`           | `3000`                             | Server port                |
| `MONGO_URI`      | `mongodb://localhost:27017/taskdb` | MongoDB connection string  |
| `SESSION_SECRET` | `superSecretKey`                   | Session encryption secret  |

An `.env.example` file is included—copy it to `.env` and fill in your values.
```
