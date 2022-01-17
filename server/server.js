<<<<<<< HEAD
//import files
const express = require('express');
const db = require('./database/config');
const {ApolloServer} = require('apollo-server-express');
const {typeDefs, resolvers} = require('./schema');
const { authMiddleware } = require('./utils/jwtAuthorization');

//Call to instantiate a live server that utlizes Express, Mongoose, and Apollo graphQL
async function startApolloServer()
{
    //Construct and ApolloServer by feeding in the typeDefs and resolvers
    const server = new ApolloServer({typeDefs, resolvers, contect: authMiddleware});
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










=======
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
path = require('path');
const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  context: authMiddleware,
});

const startup = async () => {
  await server.start();
  server.applyMiddleware({ app });

  return app;
};

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(
    express.static(path.join(__dirname, '../client/build', 'index.html'))
  );
}

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});

startup();
>>>>>>> 42c4d0ea539c9dbc4acdd4a4ec37f307eed57cb7
