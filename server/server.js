const express = require('express');
const path = require('path');
const db = require('./config/connection');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas'); // Import schemas
const { authMiddleware } = require('./utils/auth'); // Import authentication middleware
const { graphqlUploadExpress } = require('graphql-upload'); // Import GraphQL Upload
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  context: ({ req }) => {
    // Your context setup here.
  },
  uploads: {
    maxFileSize: 10000000, // Maximum file size in bytes (adjust as needed).
    maxFiles: 1, // Maximum number of files allowed per request (adjust as needed).
  },
});


// Enable handling of uploads
app.use(graphqlUploadExpress());



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
  
