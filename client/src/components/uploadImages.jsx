import React, { useState, useEffect } from 'react';
import { CloudinaryContext, Image } from 'cloudinary-react';
import { fetchPhotos, openUploadWidget } from '../CloudinaryService';


function UploadImages() {
  const [images, setImages] = useState([]);
// Add this function below the useState declaration
const addImageToState = (uploadedImage) => {
  const { public_id, description, tags } = uploadedImage;
  const newImage = {
    publicId: public_id,
    description,
    tags,
  };
  setImages([...images, newImage]);
};

  const beginUpload = (tag) => {
    const uploadOptions = {
      cloudName: 'dbindi09a',
      tags: [tag, 'amImage'],
      uploadPreset: 'new4new',
    };

    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        console.log(photos);
        if (photos.event === 'success') {
          addImageToState(photos.info);
        }
      } else {
        console.log(error);
      }
    });
  };

  const handleDelete = (publicId) => {
    // Add any necessary authorization headers if required
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${yourJWTToken}`, // Replace with your actual JWT token
    };
  
    // Make an HTTP request to your server to delete the image
    fetch(`/api/delete-image/${publicId}`, {
      method: 'DELETE',
      headers: headers,
    })
      .then((response) => {
        if (response.ok) {
          // Image was successfully deleted, update your state to remove it
          const updatedImages = images.filter((image) => image.publicId !== publicId);
          setImages(updatedImages);
        } else {
          // Handle error if the server responds with an error status
          console.error('Failed to delete image:', response.statusText);
        }
      })
      .catch((error) => {
        console.error('Error while deleting image:', error);
      });
  };

  useEffect(() => {
    fetchPhotos('image', setImages);
  }, []);
  console.log('Images:', images);
  return (
    <CloudinaryContext cloudName="dbindi09a">
      <div className="App">
        <button onClick={() => beginUpload('image')}>Upload Image</button>
        <section>
        {images.map((image) => (
  <div key={image.publicId}>
    <Image
      publicId={image.publicId}
      fetch-format="auto"
      quality="auto"
    />
    <button onClick={() => handleDelete(image.publicId)}>Delete Image</button>
  </div>
))}
        </section>
      </div>
    </CloudinaryContext>
  );
}

export default UploadImages;
