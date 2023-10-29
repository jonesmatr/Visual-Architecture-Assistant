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
      uploadedBy {
        _id
        username
        email
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

  