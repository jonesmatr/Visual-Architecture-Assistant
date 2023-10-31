import React, { useState, useEffect } from "react";
import { CloudinaryContext, Image } from "cloudinary-react";
import { fetchPhotos, openUploadWidget } from "../CloudinaryService";
import auth from "../utils/auth";
import { ADD_IMAGE, DELETE_IMAGE } from "../utils/mutations";
import { useMutation, useQuery } from "@apollo/client";
import { GET_IMAGES } from "../utils/queries";

function UploadImages() {
  const [images, setImages] = useState([]);

  const {loading, error, data} = useQuery(GET_IMAGES);
  const [addImage] = useMutation(ADD_IMAGE);
  const [deleteImage] = useMutation(DELETE_IMAGE);

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
        if (photos.event === "success") {
          console.log(photos);
          addImageToState(photos.info);
          addImage({
            variables: {
              imageUrl: photos.info.public_id,
              description: "info",
              tags: photos.info.tags,
            },
          })
            .then((response) => {
              // Handle the response from the addImage mutation
              if (response.data && response.data.addImage) {
                console.log(
                  "Image data added to the database:",
                  response.data.addImage
                );
              } else {
                console.error("Failed to add image data to the database.");
              }
            })
            .catch((error) => {
              console.error(
                "Error while adding image data to the database:",
                error
              );
            });
        }
      } else {
        console.log(error);
      }
    });
  };

  const handleDelete = (imageId) => {
    // Add any necessary authorization headers if required
    deleteImage({
      variables: {
        imageId: imageId,
      },
    })
      .then((response) => {
        // Handle the response from the deleteImage mutation

        if (response.data && response.data.deleteImage) {
          console.log(
            "Image data deleted from the database:",
            response.data.deleteImage
          );
          const newUpdatedImages = images.filter(
            (image) => image._id !== imageId
          );
          setImages(newUpdatedImages);
          console.log(newUpdatedImages);
        } else {
          console.error("Failed to delete image data to the database.");
        }
      })
      .catch((error) => {
        console.error("Error while delete image data to the database:", error);
      });
  };

  useEffect(() => {
    // fetchPhotos("image", setImages);
    if (data) {
      setImages(data.images);
    }
    
  }, [data]);
  console.log("Images:", images);
  return (
    <CloudinaryContext cloudName="dbindi09a">
      <div className="App">
        <button onClick={() => beginUpload("image")}>Upload Image</button>
        <div className="image-grid">
          {images.map((image) => (
            <div key={image.imageUrl} className="image-container">
              <button className="delete-button" onClick={() => handleDelete(image._id)}>
                Delete
              </button>
              <Image
                 publicId={image.imageUrl}
                  fetch-format="auto"
                    quality="auto"
                      className="portfolio-image"
                        width="450"  // Explicitly set width
                          height="550" // Explicitly set height
                            crop="scale"  // This ensures the image covers the entire space without distortion
/>

            </div>
          ))}
        </div>
      </div>
    </CloudinaryContext>
  );
}

export default UploadImages;
