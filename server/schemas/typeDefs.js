const { gql } = require('apollo-server-express');
const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedImages: [Image]!
  }
  type Image {
    _id: ID!
    imageUrl: String!
    description: String
    tags: [String]!
    createdAt: String
    uploadedBy: User!
  }
  type APIPrompt {
    _id: ID!
    promptText: String!
    responseImages: [Image]!
    createdAt: String
    requestedBy: User!
  }
  type Query {
    users: [User]!
    user(userId: ID!): User
    images: [Image]!
    image(imageId: ID!): Image
    apiPrompts: [APIPrompt]!
    apiPrompt(promptId: ID!): APIPrompt
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    addImage(imageUrl: String!, description: String, tags: [String]!): Image
    addAPIPrompt(promptText: String!): APIPrompt
    // ... other necessary mutations for updating and deleting
  }
  type Auth {
    token: ID!
    user: User
  }
`;
module.exports = typeDefs;