const {getProfessional, getProfessionals, createProfessional, deleteProfessional, updateProfessional} = require('./modelResolvers/professionalResolvers')
const { getSkill, getSkills, createSkill, deleteSkill} = require('./modelResolvers/skillResolvers');

//Query Functions
//************************************************************

// //return a single professional
// async function getProfessional(parent, {_id}){
//     return await Professional.findById(_id).populate('skills');
// }

// //return all professionals
// async function getProfessionals(){
//     return await Professional.find({}).populate('skills');
// }

//return a single skill
// async function getSkill(parent, {_id}){
//     return await Skill.findById(_id);
// }

// //return all skills
// async function getSkills(){
//     return await Skill.find({});
// }


//Mutation Functions
//************************************************************

// //create a new professional based on argument data
// async function createProfessional(parent, {professional}){
//     return await Professional.create(professional);
// }

// //Delete a professional based on ID
// async function deleteProfessional(parent, {_id}){
//     return await Professional.findByIdAndRemove(_id, {new: true});
// }

// //update a professional using argument data and ID
// async function updateProfessional(parent, {_id, professional}){
//     return await Professional.findByIdAndUpdate(_id, professional, {new: true});
// }

//create a skill from the database
// async function createSkill(parent, {skill}){
//     return await Skill.create({skill});
// }

// //delete a skill from the database
// async function deleteSkill(parent, {_id}){
//     return await Skill.findByIdAndRemove(_id);
// }


//Resolvers define the logic for fetching data using types defined in typeDefs

const resolvers = {
    Query: {
        getProfessional,
        getProfessionals,
        getSkill,
        getSkills
    },
    Mutation: {
        createProfessional,
        deleteProfessional,
        updateProfessional,
        createSkill,
        deleteSkill
    }
};   
    
module.exports = resolvers;
