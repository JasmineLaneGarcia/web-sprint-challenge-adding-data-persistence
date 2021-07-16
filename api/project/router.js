// build your `/api/projects` router here

const express = require('express');
const Projects = require('./model');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const projects = await Projects.getAllProjects()
        const allProjects = projects.map(p => p.project_completed === 0 
            ? { ...p, project_completed: false }
            : { ...p, project_completed: true });
        res.json(allProjects)
    }
    catch (err){
        next(err)
    }
});

router.post('/', async (req, res, next) => {
    try { 
        let project = await Projects.createProject(req.body)
        project = project.project_completed === 0 
        ? { ...project, project_completed: false }
        : { ...project, project_completed: true };
        res.json(project)
    } catch(err){
        next(err)
    }
});

module.exports = router;
