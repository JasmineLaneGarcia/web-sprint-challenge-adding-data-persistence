// build your `/api/resources` router here

const express = require('express');
const Resources = require('./model');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const resources = await Resources.getAllResources()
        res.json(resources)
    }
    catch (err){
        next(err)
    }
});

router.post('/', async (req, res, next) => {
    try { 
        const resource = await Resources.createResource(req.body)
        res.json(resource)
    } catch(err){
        next(err)
    }
});

module.exports = router;
