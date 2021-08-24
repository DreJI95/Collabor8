const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: 'Name is required',
        unique: true,
        trim: true,
    },
    category: {
        type: Boolean,
        default: false,
    },
    description: {
        type: String,
        trim: true,
        minLength: 10
    },
    image: {
        type: String,
    },
    repositoryLink: {
        type: String
    },
    deployedLink: {
        type: String
    },
    // teamMembers: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Team'
    // },
    status: {
        type: Boolean,
        default: false,
    }
});

// projectSchema.Types.Boolean.convertToFalse.add(['private', 'open']);

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;


