//import relevant files
const mongoose = require('mongoose');
const Professional = require('./Professional');

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

//create cascading delete effect when a skill is removed
skillSchema.post("remove", document => {
    //assign the _id of the skill that has been deleted
    const {skillId} = document;

    //filter any professional containing the deleted skill and then pull the skill from their skills array
    Professional.updateMany({skills: {$in: skillId}}, {$pull: {skills: skillId}});
});

//Define a new model
const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;

