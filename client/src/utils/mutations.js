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

    
export const UPDATE_PROFILE_PIC = gql`
mutation UpdateProfilePic($imageUrl: String!) {
    updateProfilePic(imageUrl: $imageUrl) {
        _id
        profilePic
    }
}
`;

export const DELETE_PROFILE_PIC = gql`
mutation DeleteProfilePic {
    deleteProfilePic {
        _id
        profilePic
    }
}
`;

export const UPDATE_BIO = gql`
   mutation UpdateBio($bio: String!) {
       updateBio(bio: $bio) {
           _id
           bio
       }
   }
`;

export const DELETE_BIO = gql`
mutation DeleteBio {
    deleteBio {
        _id
        bio
    }
}
`;

export const ADD_WORK_IMAGE = gql`
mutation AddWorkImage($imageUrl: String!, $description: String) {
    addWorkImage(imageUrl: $imageUrl, description: $description) {
        _id
        imageUrl
        description
    }
}`;

export const UPDATE_IMAGE_DESCRIPTION = gql`
mutation UpdateImageDescription($imageId: ID!, $description: String!) {
    updateImageDescription(imageId: $imageId, description: $description) {
        _id
        imageUrl
        description
    }
}`;

export const DELETE_WORK_IMAGE = gql`
mutation DeleteWorkImage($imageId: ID!) {
    deleteWorkImage(imageId: $imageId) {
        _id
        imageUrl
    }
}`;

