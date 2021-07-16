// build your `Task` model here

const db = require('../../data/dbConfig');

const getAllTasks = () => {
    return db('tasks as t')
    .join("projects as p", "t.project_id", "p.project_id")
    .select('t.*', 'p.project_name', 'p.project_description')
};

const getTaskById = (id) => {
    return db('tasks as t').where('task_id', id)
    .join("projects as p", "t.project_id", "p.project_id")
    .select('t.*', 'p.project_name', 'p.project_description')
    .first()
}

const createTask = (newTask) => {
    return db('tasks').insert(newTask)
    .then(([id]) => {
        return getTaskById(id)
    });
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
};
