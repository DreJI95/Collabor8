//import resolver functions from the various model resolver files
const { 
    getProfessional, 
    getProfessionals, 
    createProfessional, 
    deleteProfessional, 
    updateProfessional,
    addSkillToPro,
    removeSkillFromPro
} = require('./modelResolvers/professionalResolvers')

const { 
    getSkill, 
    getSkills, 
    createSkill, 
    deleteSkill
} = require('./modelResolvers/skillResolvers');

//define the resolvers object's queries and mutations for exportation
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
        addSkillToPro,
        removeSkillFromPro,
        createSkill,
        deleteSkill
    }
};   
    
module.exports = resolvers;
