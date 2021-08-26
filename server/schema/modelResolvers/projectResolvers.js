const { Project } = require('../../models');

const projectResolvers = {
    getProjects: async function() {
        return await Project.find({});
    },

    getProject: async function(parent, _id ) {
        return await Project.find(_id);
    },

    createProject: async function(parent, project) {
        console.log(project);
        return await Project.create(project);
    }
};

module.exports = projectResolvers;