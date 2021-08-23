const {Team} = require('../../models');

const teamResolvers = {
    //Query functions
    getTeams: async function() {
        return await Team.find({}).populate('teamMembers');
    },
    //Mutation functions
    createTeam: async function(parent, {team}) {
        return await Team.create(team).populate('teamMembers');
    }
};

module.exports = teamResolvers;