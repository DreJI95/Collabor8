//import gql function to create typeDefs
const { gql } = require('apollo-server-express');

//define the schema of the database to 'shape' our data
const typeDefs = gql`

    type Skill {
        _id: ID
        skill: String
    }

    type Professional {
        _id: ID
        email: String
        password: String
        firstName: String
        lastName: String
        url: String
        strengths: [String]
        weaknesses: [String]
        skills: [Skill]
    }

    type AuthedPro {
        token: ID!
        professional: Professional
    }
    type Team {
        _id: ID
        teamMembers: [String!]!
    }

    input ProfessionalData {
        email: String
        password: String
        firstName: String
        lastName: String
        url: String
        strengths: [String]
        weaknesses: [String]
        skills: [ID]
    }

   type Project {
        projectTitle: String!
        visibility: String!
        description: String!
        image: String
        repositoryLink: String
        deployedLink: String
        status: String
        startDate: Date
        completionDate: Date
    }

    type Team {
        members: [Professional]
        projects: [Project]
        teamName: String
        startDate: Date
    }

    type Query {
        getProfessionals: [Professional]
        getProfessional(_id: ID!): Professional
        getSkills: [Skill]
        getSkill(_id: ID!): Skill
        getProjects: [Project]
        getProject(_id: ID!): Project
        getTeam(_id: ID!): Team
        getTeams: [Team]
    }

    type Mutation {
        login(email: String!, password: String!): AuthedPro
        createProfessional(professional: ProfessionalData!): AuthedPro
        deleteProfessional(_id: ID!): Professional
        updateProfessional(_id: ID!, professional: ProfessionalData!): Professional
        addSkillToPro(idPro: ID!, idSkill: ID!): Professional
        removeSkillFromPro(idPro: ID!, idSkill: ID!): Professional
        createSkill(skill: String!): Skill
        deleteSkill(_id: ID!): Skill
        createTeam(professionals: String!, projects: String!, teamName: String): Team
        addTeamProfessional(_id: ID!, professionals: ID!): Team
        addTeamProject(_id: ID!, projects: ID!): Team
        removeTeamProfessional(_id: ID!, professionals: ID!): Team
        removeTeamProject(_id: ID!, projects: ID!): Team
        updateTeamName(_id: ID!, teamName: String): Team
        deleteTeam(_id: ID!): Team
    }
`;

module.exports = typeDefs;
