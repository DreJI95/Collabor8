//import gql function to create typeDefs
const {gql} = require('apollo-server-express');

//define the schema of the database to 'shape' our data
const typeDefs = gql`
    type Query {
        hello: String
    }
`;

module.exports = typeDefs;