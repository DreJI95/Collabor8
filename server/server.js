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
