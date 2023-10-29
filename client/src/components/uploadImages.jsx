import React, { useState, useEffect } from "react";
import { CloudinaryContext, Image } from "cloudinary-react";
import { fetchPhotos, openUploadWidget } from "../CloudinaryService";
import auth from "../utils/auth";
import { ADD_IMAGE } from "../utils/mutations";
import { useMutation } from "@apollo/client";


function UploadImages() {
  const [images, setImages] = useState([]);
  const [addImage] = useMutation(ADD_IMAGE);
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
      cloudName: "dbindi09a",
      tags: [tag, "amImage"],
      uploadPreset: "new4new",
    };

    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        console.log(photos.info?.files?.uploadInfo);
        if (photos.event === "success") {
          addImageToState(photos.info.files[0].uploadInfo);
          addImage({
            variables: {
              publicId: photos.info.files[0].uploadInfo.public_id,
              description: "info",
              tags: photos.info.files[0].uploadInfo.tags,
            },
          })
          .then((response) => {
            // Handle the response from the addImage mutation
            if (response.data && response.data.addImage) {
              console.log("Image data added to the database:", response.data.addImage);
            } else {
              console.error("Failed to add image data to the database.");
            }
          })
          .catch((error) => {
            console.error("Error while adding image data to the database:", error);
          });
      }  
        
      } else {
        console.log(error);
      }
    });
  };

  const handleDelete = (publicId) => {
    // Add any necessary authorization headers if required
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth.getToken()}`, // Replace with your actual JWT token
    };

    // Make an HTTP request to your server to delete the image
    fetch(`/api/delete-image/${publicId}`, {
      method: "DELETE",
      headers: headers,
    })
      .then((response) => {
        if (response.ok) {
          // Image was successfully deleted, update your state to remove it
          const updatedImages = images.filter(
            (image) => image.publicId !== publicId
          );
          setImages(updatedImages);
        } else {
          // Handle error if the server responds with an error status
          console.error("Failed to delete image:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Error while deleting image:", error);
      });
  };

  useEffect(() => {
    fetchPhotos("image", setImages);
  }, []);
  console.log("Images:", images);
  return (
    <CloudinaryContext cloudName="dbindi09a">
      <div className="App">
        <button onClick={() => beginUpload("image")}>Upload Image</button>
        <section>
          {images.map((image) => (
            <div key={image.public_id}>
              <Image publicId={image.public_id} fetch-format="auto" quality="auto" />
              <button onClick={() => handleDelete(image.public_id)}>
                Delete Image
              </button>
            </div>
          ))}
        </section>
      </div>
    </CloudinaryContext>
  );
}

export default UploadImages;
