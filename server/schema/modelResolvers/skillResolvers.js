const {Skill} = require('../../models');

const skillResolvers = {
    //Query Functions
    //************************************************************

    getSkill: async function(parent, {_id}){
        return await Skill.findById(_id);
    },

    getSkills: async function(){
        return await Skill.find({});
    },

    //Mutation Functions
    //************************************************************

    createSkill: async function(parent, {skill}){
        return await Skill.create({skill});
    },

    deleteSkill: async function(parent, {_id}){
        return await Skill.findByIdAndRemove(_id);
    }
}

module.exports = skillResolvers;