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

## Environment Variables

| Key             | Example value                      | Description                |
|------------------|------------------------------------|----------------------------|
| `PORT`           | `3000`                             | Server port                |
| `MONGO_URI`      | `mongodb://localhost:27017/taskdb` | MongoDB connection string  |
| `SESSION_SECRET` | `superSecretKey`                   | Session encryption secret  |

An `.env.example` file is included—copy it to `.env` and fill in your values.

```javascript
// src/index.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

// Routes
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');

app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
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
