import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password){
            token
            user {
                _id
                username
            }
        }
    }`;


export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password:$password){
            token
            user {
                _id
                username
            }
        }
    }`;

 export const ADD_IMAGE = gql`
 mutation addImage($imageUrl: String!, $description: String, $tags: [String]!) {   
    addImage(imageUrl:$imageUrl, description: $description, tags: $tags) {
        _id
        imageUrl
        description
        tags
        uploadedBy   
    }
 }`;

 export const DELETE_IMAGE = gql`
    mutation deleteImage($imageId: ID!) {
        deleteImage(imageId: $imageId) {
            _id
            imageUrl
            description
            tags
            uploadedBy
        }
    }`;