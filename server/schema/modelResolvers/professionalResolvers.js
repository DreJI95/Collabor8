const {Professional} = require('../../models');
const {AuthenticationError} = require('apollo-server-express');

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

    login: async function(parent, {email, password}){
        //check for a user in the database and throw error if not
        const professional = await Professional.findOne({email: email});
        if(!professional) return new AuthenticationError('Incorrect creditials given.')

        //once the user is found, then check the supplied password against the professional's password in the db
        const isAuthenticated = await professional.evaluatePassword(password);
        if(!isAuthenticated) return new AuthenticationError('Incorrect creditials given.')

        //this is where we will implement JWT for authorization now that the pro has been authenticated
        return professional;
    },

    createProfessional: async function(parent, {professional}){
        const newProfessional = await Professional.create(professional);

        //this is where we will implement JWT for authorization now that the pro has been authenticated
        return newProfessional;
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