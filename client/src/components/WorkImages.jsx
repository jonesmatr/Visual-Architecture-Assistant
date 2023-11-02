import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { openUploadWidget } from '../CloudinaryService';
import { ADD_WORK_IMAGE, UPDATE_IMAGE_DESCRIPTION, DELETE_WORK_IMAGE } from '../utils/mutations';
import { GET_USER_WORK_IMAGES } from '../utils/queries';



function WorkImages() {
    const { loading, error, data } = useQuery(GET_USER_WORK_IMAGES);
    const [addWorkImage] = useMutation(ADD_WORK_IMAGE);
    const [updateImageDescription] = useMutation(UPDATE_IMAGE_DESCRIPTION);
    const [deleteWorkImage] = useMutation(DELETE_WORK_IMAGE);

    // Assuming 'data' contains a user object with workImages after the query.
    const images = data?.user?.workImages || [];

    const handleImageUpload = () => {
        const options = {
            cloudName: 'dbindi09a',
            uploadPreset: 'new4new',
            tags: ['portfolio'], 
        };

        openUploadWidget(options, (error, result) => {
            if (result.event === 'success') {
                // Use the addWorkImage mutation to add the new image
                addWorkImage({
                    variables: {
                        imageUrl: result.info.url,
                        description: "" // You might want to allow users to add a description here
                    }
                }).then(response => {
                    // After adding the image, either refetch the images or update the cache
                    console.log('Image added:', response.data.addWorkImage);
                    // Optionally, update local state or Apollo cache here
                }).catch(error => {
                    console.error('Error adding image:', error);
                });
            }
        });
    };

    const handleDeleteImage = (imageId) => {
        deleteWorkImage({ 
            variables: { imageId },
            refetchQueries: [{ query: GET_USER_WORK_IMAGES }],
        });
    };

    const handleDescriptionChange = (imageId, newDescription) => {
        updateImageDescription({ 
            variables: { imageId, description: newDescription },
            refetchQueries: [{ query: GET_USER_WORK_IMAGES }],
        });
    };

    if (loading) return 'Loading...';
    if (error) return `Error: ${error.message}`;

    return (
        <div className="work-images-container">
            <button onClick={handleImageUpload}>Upload Image</button>
            {images.map(image => (
  <div key={image._id}>
    <img src={image.imageUrl} alt="Work" /> {/* Corrected from image.url to image.imageUrl */}
    <textarea 
      value={image.description} 
      onChange={e => handleDescriptionChange(image._id, e.target.value)}
      placeholder="Add a description"
    />
    <button onClick={() => handleDeleteImage(image._id)}>Delete</button>
  </div>
))}
        </div>
    );
}

export default WorkImages;
