const {Professional} = require('../../models');

const professionalResolvers = {
    //Query Functions
    //************************************************************

    getProfessional: async function(parent, {_id}){
        return await Professional.findById(_id).populate('skills');
    },

    getProfessionals: async function(){
        return await Professional.find({}).populate('skills');
    },

    //Mutation Functions
    //************************************************************

    createProfessional: async function(parent, {professional}){
        return await Professional.create(professional).populate('skills');
    },

    deleteProfessional: async function(parent, {_id}){
        return await Professional.findByIdAndRemove(_id, {new: true});
    },

    updateProfessional: async function(parent, {_id, professional}){
        return await Professional.findByIdAndUpdate(_id, professional, {new: true}).populate('skills');
    },
    
    addSkillToPro: async function(parent, {idPro, idSkill}){
        return await Professional.findByIdAndUpdate(idPro, { $addToSet: { skills: idSkill } }, { new: true }).populate('skills');
    },

    removeSkillFromPro: async function(parent, {idPro, idSkill}){
        return await Professional.findByIdAndUpdate(idPro, { $pull: { skills: idSkill } }, {new: true}).populate('skills');
    }
}

module.exports = professionalResolvers