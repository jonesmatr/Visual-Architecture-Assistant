// queries.js
import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query {
    users {
      _id
      username
      email
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query GetUser($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      email
    }
  }
`;

export const GET_IMAGES = gql`
  query {
    images {
      _id
      imageUrl
      description
      tags
      uploadedBy 
    }
  }
`;

export const GET_USER_WORK_IMAGES = gql`
  query GetUserWorkImages {
    userProfile {
      workImages {
        _id
        imageUrl
        description
      }
    }
  }
`;

export const GET_IMAGE_BY_ID = gql`
  query GetImage($imageId: ID!) {
    image(imageId: $imageId) {
      _id
      imageUrl
      description
      tags
      uploadedBy {
        _id
        username
        email
      }
    }
  }
`;

export const GET_CONTRACTOR_DETAILS = gql`
  query GetContractorDetails($contractorId: ID!) {
    contractor: user(userId: $contractorId) {
      _id
      username
      email
      profilePic
      bio
      workImages {
        _id
        imageUrl
        description
      }
    }
  }
`;

export const GET_ALL_CONTRACTORS = gql`
  query GetAllContractors {
    contractors {
      _id
      username
      email
      profilePic
      bio
      workImages {
        _id
        imageUrl
        description
      }
    }
  }
`;

export const GET_USER_PROFILE = gql`
  query GetUserProfile {
    userProfile {
      _id
      username
      email
      profilePic
      bio
    }
  }
`;




