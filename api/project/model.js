// build your `Project` model here

const db = require('../../data/dbConfig');

const getAllProjects = () => {
    return db('projects')
};

const getProjectById = (id) => {
    return db('projects').where('project_id', id).first()
};

const createProject = (newProject) => {
    return db('projects').insert(newProject)
    .then(([id]) => {
        return getProjectById(id)
    });
};

module.exports = {
    getAllProjects,
    getProjectById,
    createProject,
};
