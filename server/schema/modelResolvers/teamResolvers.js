const {Team} = require('../../models');

const teamResolvers = {
    //Query functions
    getTeams: async function() {
        return await Team.find({}).populate('teamMembers');
    },
    //Mutation functions
    createTeam: async function(parent, teamMembers) {
        console.log(teamMembers);
        return await Team.create(teamMembers).populate('teamMembers');
    }
};

module.exports = teamResolvers;