//import gql function to create typeDefs
const {gql} = require('apollo-server-express');

//define the schema of the database to 'shape' our data
const typeDefs = gql`
    
    type Professional {
        _id: ID
        email: String
        password: String
        url: String
        strengths: [String]
        weaknesses: [String]
    }

    input ProfessionalData {
        email: String!
        password: String!
        url: String
        strengths: [String]
        weaknesses: [String]
    }

    type Query {
        getProfessionals: [Professional]
        getProfessional(_id: ID!): Professional
    }

    type Mutation {
        createProfessional(professional: ProfessionalData!): Professional
        deleteProfessional(_id: ID!): Professional
        updateProfessional(_id: ID!, professional: ProfessionalData!): Professional
    }
`;

module.exports = typeDefs;