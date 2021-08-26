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

const {
    getProjects,
    getProject,
    createProject
} = require('./modelResolvers/projectResolvers');

//define the resolvers object's queries and mutations for exportation
const resolvers = {
    Query: {
        getProfessional,
        getProfessionals,
        getSkill,
        getSkills,
        getProject,
        getProjects
    },
    Mutation: {
        createProfessional,
        deleteProfessional,
        updateProfessional,
        addSkillToPro,
        removeSkillFromPro,
        createSkill,
        deleteSkill,
        createProject,
    }
};   
    
module.exports = resolvers;
