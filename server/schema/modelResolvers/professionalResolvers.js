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
        return await Professional.create(professional);
    },

    deleteProfessional: async function(parent, {_id}){
        return await Professional.findByIdAndRemove(_id, {new: true});
    },

    updateProfessional: async function(parent, {_id, professional}){
        return await Professional.findByIdAndUpdate(_id, professional, {new: true});
    }

}

module.exports = professionalResolvers