// build your `Resource` model here

const db = require('../../data/dbConfig');

const getAllResources = () => {
    return db('resources')
};

const getResourceById = (id) => {
    return db('resources').where('resource_id', id).first()
};

const createResource = (newResource) => {
    return db('resources').insert(newResource)
    .then(([id]) => {
        return getResourceById(id)
    });
};

module.exports = {
    getAllResources,
    getResourceById,
    createResource,
};
