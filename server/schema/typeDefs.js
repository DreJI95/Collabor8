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
        login(email: String!, password: String!): AuthedPro
        createProfessional(professional: ProfessionalData!): AuthedPro
        deleteProfessional(_id: ID!): Professional
        updateProfessional(_id: ID!, professional: ProfessionalData!): Professional
        addSkillToPro(idPro: ID!, idSkill: ID!): Professional
        removeSkillFromPro(idPro: ID!, idSkill: ID!): Professional
        createSkill(skill: String!): Skill
        deleteSkill(_id: ID!): Skill
    }
`;

module.exports = typeDefs;