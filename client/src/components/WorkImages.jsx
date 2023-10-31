import React, { useState } from 'react';

function WorkImages({ initialImages }) {
    const [images, setImages] = useState(initialImages);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            // TODO: Send the image to the server to save it and get a unique ID
            const newImage = { 
                id: "NEW_IMAGE_ID", // This ID should come from the server
                url: imageUrl,
                description: ""
            };
            setImages([...images, newImage]);
        }
    };

    const handleDeleteImage = (imageId) => {
        // TODO: Send a request to the server to delete the image
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
            <input type="file" onChange={handleImageUpload} />
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
