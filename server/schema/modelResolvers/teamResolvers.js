const { Team } = require('../../models');

const teamResolvers = {
    //Query functions
    getTeams: async function() {
        return await Team.find({});
    },

    getTeam: async function(parent, {_id}) {
        return await Team.find(_id);
    },
    //Mutation functions
    createTeam: async function(parent, teamMembers) {
        console.log(teamMembers);
        return await Team.create(teamMembers);
    }
};

module.exports = teamResolvers;