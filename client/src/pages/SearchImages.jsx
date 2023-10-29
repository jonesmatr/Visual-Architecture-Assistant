import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_IMAGES } from '../graphql/queries'; // Replace with your actual query import

const SearchImages = () => {
  // Execute the query to fetch images
  const { loading, error, data } = useQuery(GET_IMAGES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Data contains the fetched images
  const images = data.images;

  return (
    <div>
      <h2>Images from Database</h2>
      <ul>
        {images.map((image) => (
          <li key={image._id}>
            <img src={image.imageUrl} alt={image.description} />
            <p>Description: {image.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchImages;
