//****** Is team required if we have projects that contain members?
//****** What value model does a team provide?

const mongoose = require('mongoose');

//define the team schema structure
const teamSchema = new mongoose.Schema({
    //Array that holds all of the private team members
    teamMembers: {
        type: String
    },
    //TODO*********
    //Array of products as teams can be working on multiple projects
    // teamProjects: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Projects'
    // }]
});

//create the team model for exportation
const Team = mongoose.model('Team', teamSchema);

module.exports = Team;