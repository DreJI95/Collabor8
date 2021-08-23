//import resolver functions from the various model resolver files
const { 
    getProfessional, 
    getProfessionals, 
    createProfessional, 
    deleteProfessional, 
    updateProfessional,
    addSkillToPro,
    removeSkillFromPro,
} = require('./modelResolvers/professionalResolvers');

const {
    getTeams,
    createTeam
} = require('./modelResolvers/teamResolvers');

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
        getSkills,
        getTeams
    },
    Mutation: {
        createProfessional,
        deleteProfessional,
        updateProfessional,
        addSkillToPro,
        removeSkillFromPro,
        createSkill,
        deleteSkill,
        createTeam
    }
};   
    
module.exports = resolvers;
