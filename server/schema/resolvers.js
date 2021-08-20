const {Professional} = require('../models');
const { findByIdAndUpdate } = require('../models/Professional');

//Query Functions************************************************************

//return a single professional
async function getProfessional(parent, {_id}){
    return await Professional.findById(_id);
}

//return all professionals
async function getProfessionals(){
    return await Professional.find({});
}


//Mutation Functions************************************************************

//create a new professional based on argument data
async function createProfessional(parent, {professional}){
    return await Professional.create(professional);
}

//Delete a professional based on ID
async function deleteProfessional(parent, {_id}){
    return await Professional.findByIdAndRemove(_id, {new: true});
}

//update a professional using argument data and ID
async function updateProfessional(parent, {_id, professional}){
    return await Professional.findByIdAndUpdate(_id, professional, {new: true})
}


//Resolvers define the logic for fetching data using types defined in typeDefs
const resolvers = {
    Query: {
        getProfessional,
        getProfessionals
    },
    Mutation: {
        createProfessional,
        deleteProfessional,
        updateProfessional
    }
};   
    
module.exports = resolvers;