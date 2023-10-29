const { gql } = require('apollo-server-express');
const typeDefs = gql`
   scalar Upload 

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
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
   uploadImage(image: Upload!, description: String, tags: [String]!): Image
    addAPIPrompt(promptText: String!): APIPrompt
   
  }
  type Auth {
    token: ID!
    user: User
  }
`;
module.exports = typeDefs;