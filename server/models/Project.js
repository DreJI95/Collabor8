const {Schema, model} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const projectSchema = new Schema ({
    startDate: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
    },
    completionDate: {
        type: Date,
        default: '',
        get: timestamp => dateFormat(timestamp)
    },
    projectTitle: {
        type: String,
        required: 'This project requires a title.',
        unique: true,
        minLength: 5,
        trim: true
    },
    description: {
        type: String, 
        trim: true, 
        minLength: 10,
        maxLength: 545
    },
    image: {
        type: String,
    },
    deployedLink: {
        type: String, 
        trim: true
        //update to include regex for url checks
    },
    respositoryLink: {
        type: String, 
        trim: true
        //update to include regex for url checks
    },
    visibility: ['Public','Private'],
    status: ['Open','In Progress','Complete']
},
{
    toJSON: {
      getters: true
    }
  })

const Project = model('Project', projectSchema);

module.exports = Project;
