import { createTask, getTasks, updatedTask, deletedTask } from "../services/task.service.js";
export const addTask = async (req, res) => {
    const { title, description } = req.body;
    try {
        const task = await createTask(req.session.userId, title, description);
        res.status(201).json({
            success: true,
            data: task,
            message: "Task added successfully"
        });
    } catch (error) {
        console.error("Error adding task:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const fetchTasks = async (req, res) => {
    const userId = req.session.userId;
    try {
        const tasks = await getTasks(userId);
        res.status(200).json({
            success: true,
            data: tasks,
            message: "Tasks fetched successfully"
        })
    } catch (error) {
        console.error("Error fetching tasks:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const updateTask = async (req, res) => {
    const taskId = (req.params.id);
    try {
        const task = await updatedTask(taskId, req.body);
        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }
        res.status(200).json({
            success: true,
            data: task,
            message: "Task Updated Successfully"
        })
    } catch (error) {
        console.error("Error updating task:", error);
        res.status(500).json({ message: "Internal server error" });

    }
}

export const deleteTask = async (req, res) => {
    const taskid = req.params.id;
    // console.log("you want to delete task of this particular id", taskid);
    try {
        const task = await deletedTask(taskid);
        res.status(200).json({
            success: true,
            message: "Task deleted successfully",
            data: task
        })
    }
    catch (error) {
        console.error("Error deleting task:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}