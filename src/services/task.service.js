import { Task } from '../models/task.model.js';

export const createTask = async (userId, title, description) => {
    const task = new Task({
        userId,
        title,
        description
    });
    return await task.save();
}

export const getTasks = async (userId) => {
    return await Task.find({ userId }).sort({ createdAt: -1 })
}

export const updatedTask = async (_id, updatedData) => {
    console.log(`id is :${_id} and ${updatedData}`);
    const task = await Task.findByIdAndUpdate(_id, updatedData, {
        new: true,
        runValidators: true
    })

    return task;
}

export const deletedTask = async (id) => {
    return await Task.findByIdAndDelete(id)
}