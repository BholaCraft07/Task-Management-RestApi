import express from 'express';
import { addTask, fetchTasks, updateTask, deleteTask } from "../controller/task.controller.js"
import { validateSession } from '../middleware/session.middleware.js';
const router = express.Router();

router.post("/", validateSession, addTask);
router.get("/", validateSession, fetchTasks);
router.put("/:id", validateSession, updateTask);
router.delete("/:id", validateSession, deleteTask)

export default router;