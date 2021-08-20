//import files
const express = require('express');
const db = require('./database/config');
const {ApolloServer} = require('apollo-server-express');
const {typeDefs, resolvers} = require('./schema');

async function startApolloServer()
{
    //Construct and ApolloServer by feeding in the typeDefs and resolvers
    const server = new ApolloServer({typeDefs, resolvers});
    await server.start();

    //instantiate an app and define the PORT to be utilized
    const PORT = process.env.PORT || 3001;
    const app = express();

    //link the app with server
    server.applyMiddleware({ app });

    //parse incoming requests that parse JSON and urlencoded (UTF-8) payloads
    app.use(express.json());
    app.use(express.urlencoded({extended: true}))

    //once the database has been opened, instruct the server to listen for requests
    await db.once('open', ()=> app.listen(PORT, ()=> {
        console.log(`Apollo-Express server listening at http://localhost:${PORT}`)
        console.log(`Access GraphQL playground at http://localhost:${PORT}${server.graphqlPath}`)
    }))

    return {server, app};
}

//****Run the server****
startApolloServer();










