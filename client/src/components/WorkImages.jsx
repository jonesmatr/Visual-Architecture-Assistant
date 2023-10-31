import React, { useState, useEffect } from 'react';
import { openUploadWidget } from '../CloudinaryService';

function WorkImages({ initialImages }) {
    const [images, setImages] = useState(initialImages);

    useEffect(() => {
        // Retrieve from local storage on component mount
        const savedImages = JSON.parse(localStorage.getItem('workImages'));
        if (savedImages && savedImages.length > 0) {
            setImages(savedImages);
        }
    }, []);

    useEffect(() => {
        // Save images to local storage whenever they change
        localStorage.setItem('workImages', JSON.stringify(images));
    }, [images]);

    const handleImageUpload = () => {
        const options = {
            cloudName: 'dbindi09a',
            uploadPreset: 'new4new',
            tags: ['portfolio'], 
        };
        
        openUploadWidget(options, (error, result) => {
            if (result.event === 'success') {
                const newImage = {
                    id: result.info.public_id,
                    url: result.info.url,
                    description: ""
                };
                setImages([...images, newImage]);
                // TODO: Send the image details (URL, public_id, description) to the server to save
            }
        });
    };

    const handleDeleteImage = (imageId) => {
        // TODO: Send a request to the server to delete the image
        // The server should also handle deletion from Cloudinary using the imageId (public_id)
        const updatedImages = images.filter(image => image.id !== imageId);
        setImages(updatedImages);
    };

    const handleDescriptionChange = (imageId, newDescription) => {
        const updatedImages = images.map(image => 
            image.id === imageId ? { ...image, description: newDescription } : image
        );
        setImages(updatedImages);
        // TODO: Send the updated description to the server
    };

    return (
        <div className="work-images-container">
            <button onClick={handleImageUpload}>Upload Image</button>
            {images.map(image => (
                <div key={image.id}>
                    <img src={image.url} alt="Work" />
                    <textarea 
                        value={image.description} 
                        onChange={e => handleDescriptionChange(image.id, e.target.value)}
                        placeholder="Add a description"
                    />
                    <button onClick={() => handleDeleteImage(image.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default WorkImages;
