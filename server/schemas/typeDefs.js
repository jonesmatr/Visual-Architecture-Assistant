const { gql } = require("apollo-server-express");
const typeDefs = gql`
  scalar Upload

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedImages: [Image]!
    profilePic: String
    bio: String
    workImages: [Image]
  }
   
  type Image {
    _id: ID!
    imageUrl: String!
    description: String
    tags: [String]!
    uploadedBy: ID!
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
    contractors: [User]!
    userProfile: User
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addImage(imageUrl: String!, description: String, tags: [String]!): Image
    addAPIPrompt(promptText: String!): APIPrompt
    deleteImage(imageId: ID): Image
    updateProfilePic(imageUrl: String!): User
    updateBio(bio: String!): User
    addWorkImage(imageUrl: String!, description: String): Image
    deleteWorkImage(imageId: ID!): Image
  }
  type Auth {
    token: ID!
    user: User
  }
`;
module.exports = typeDefs;
