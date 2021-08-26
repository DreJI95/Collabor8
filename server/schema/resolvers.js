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

const {
    getTeam,
    getTeams,
    createTeam,
    addTeamProfessional,
    addTeamProject,
    removeTeamProfessional,
    removeTeamProject,
    updateTeamName,
    deleteTeam
} = require('./modelResolvers/teamResolvers');

//define the resolvers object's queries and mutations for exportation
const resolvers = {
    Query: {
        getProfessional,
        getProfessionals,
        getSkill,
        getSkills,
        getProject,
        getProjects,
        getTeam,
        getTeams,
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
        createTeam,
        addTeamProfessional,
        addTeamProject,
        removeTeamProfessional,
        removeTeamProject,
        updateTeamName,
        deleteTeam
    }
};   
    
module.exports = resolvers;
