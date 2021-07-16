// build your `/api/tasks` router here

const express = require('express');
const Tasks = require('./model');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const tasks = await Tasks.getAllTasks()
        const allTasks = tasks.map(t => t.task_completed === 0 
            ? { ...t, task_completed: false }
            : { ...t, task_completed: true });
        res.json(allTasks)
    }
    catch (err){
        next(err)
    }
});

router.post('/', async (req, res, next) => {
    try { 
        let task = await Tasks.createTask(req.body)
        task = task.task_completed === 0 
            ? { ...task, task_completed: false }
            : { ...task, task_completed: true };
        res.json(task)
    } catch(err){
        next(err)
    }
});

module.exports = router;
