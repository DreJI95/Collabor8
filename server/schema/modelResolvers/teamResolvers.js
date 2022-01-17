const { Team } = require('../../models');

const teamResolvers = {
  //update with selects to exclude versions, _ids, etc.

  /*Queries*/
  getTeam: async function (parent, { _id }) {
    return await Team.findById(_id).populate('members').populate('projects'); //need to test if the populate will include the professionals and projects details in results
  },

  getTeams: async function () {
    return await Team.find({}).populate('members').populate('projects');
  },

  /*Mutations*/
  createTeam: async function (parent, team) {
    /* teams should import the model values for [professionals(ID)],[projects(ID)] & teamName*/
    return await Team.create(team)
      .populate('professionals')
      .populate('projects');
  },

  // //=======================Need to test if I can add & remove in bulk or if i need to do foreach ================
  //     addTeamProfessional(parent, {_id, professionals}) {
  //         return await Team.findByIdAndUpdate( _id, {$push: {professionals}},{new: true}).populate('professionals').populate('projects');
  //     },

  //     addTeamProject(parent, {_id, projects}) {
  //         return await Team.findByIdAndUpdate( _id, {$push: {projects}},{new: true}).populate('professionals').populate('projects');
  //     },

  //     removeTeamProfessional(parent, {_id, professionals}) {
  //         return await Team.findByIdAndUpdate( _id, {$pull: {professionals}},{new: true}).populate('professionals').populate('projects');
  //     },

  //     removeTeamProject(parent, {_id, projects}) {
  //         return await Team.findByIdAndUpdate( _id, {$pull: {projects}},{new: true}).populate('professionals').populate('projects');
  //     },
  // //========================//

  updateTeamName: async function (parent, { _id, teamName }) {
    return await Team.findByIdAndUpdate(_id, teamName, { new: true })
      .populate('professionals')
      .populate('projects');
  },

  deleteTeam: async function (parent, { _id }) {
    return await Team.findOneAndDelete(_id);
  },
};

module.exports = teamResolvers;
