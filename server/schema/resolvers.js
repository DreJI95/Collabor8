//Resolvers define the logic for fetching data using types defined in typeDefs
const resolvers = {
    Query: {
        hello: ()=> 'Hello World!'
    }
};

module.exports = resolvers;