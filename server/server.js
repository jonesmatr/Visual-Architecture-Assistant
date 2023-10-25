// const express = require('express');
// const { ApolloServer } = require('@apollo/server');
// const { expressMiddleware } = require('@apollo/server/express4');
// const path = require('path');

// const { typeDefs, resolvers } = require('./schemas');
// const db = require('./config/connection');

// const PORT = process.env.PORT || 3001;
// const app = express();
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// const startApolloServer = async () => {
//   await server.start();
  
//   app.use(express.urlencoded({ extended: false }));
//   app.use(express.json());
  
//   if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../client/dist')));
    
//     app.get('*', (req, res) => {
//       res.sendFile(path.join(__dirname, '../client/dist/index.html'));
//     });
//   }

//   app.use('/graphql', expressMiddleware(server));
  
//   db.once('open', () => {
//     app.listen(PORT, () => {
//       console.log(`API server running on port ${PORT}!`);
//       console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
//     });
//   });
// };

// startApolloServer();
  
const express = require('express');
const path = require('path');
const db = require('./config/connection');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas'); // Import schemas
const { authMiddleware } = require('./utils/auth'); // Import authentication middleware

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

async function startServer() {
  // Start the Apollo server
  await server.start();

  // Apply the Apollo GraphQL middleware and set the path to /graphql
  server.applyMiddleware({ app, path: '/graphql' });

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // Serve static assets if in production
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`🌍 Now listening on localhost:${PORT}`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
}

// Start the server
startServer().catch(console.error);
  
