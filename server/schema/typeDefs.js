//import gql function to create typeDefs
const {gql} = require('apollo-server-express');

//define the schema of the database to 'shape' our data
const typeDefs = gql`

    type Skill {
        _id: ID
        skill: String
    }

    type Professional {
        _id: ID
        email: String
        firstName: String
        lastName: String
        url: String
        strengths: [String]
        weaknesses: [String]
        skills: [Skill]
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

    type Query {
        getProfessionals: [Professional]
        getProfessional(_id: ID!): Professional
        getSkills: [Skill]
        getSkill(_id: ID!): Skill
    }

    type Mutation {
        createProfessional(professional: ProfessionalData!): Professional
        deleteProfessional(_id: ID!): Professional
        updateProfessional(_id: ID!, professional: ProfessionalData!): Professional
        addSkillToPro(idPro: ID!, idSkill: ID!): Professional
        removeSkillFromPro(idPro: ID!, idSkill: ID!): Professional
        createSkill(skill: String!): Skill
        deleteSkill(_id: ID!): Skill
    }
`;

module.exports = typeDefs;