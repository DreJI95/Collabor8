//import relevant files
const mongoose = require('mongoose');

//Create the schema for skills
const skillSchema = new mongoose.Schema({
    _id: {  
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId()
    },
    skill: {
        type: String,
        required: true, 
        unique: true,
        trim: true,
        maxLength: 20
    }
})

//Define a new model
const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;

