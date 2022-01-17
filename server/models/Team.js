//****** Is team required if we have projects that contain members? -> we will use teams to manage projects to professional connections separately.
//****** What value model does a team provide? -> it helps to manage projects

const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');

//define the team schema structure
const teamSchema = new mongoose.Schema({
    //Array that holds all of the private team members
    teamMembers: [{
        type: String
    }],
    teamName: {
        type: String,
        minLength: 5,
        trim: true
    },
    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }],
    startDate: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
    },
},{
    toJSON: {
      getters: true
    }
  });

//create the team model for exportation
const Team = mongoose.model('Team', teamSchema);

module.exports = Team;