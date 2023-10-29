const cloudActions = require('../utils/cloudinary'); // Adjust the path as needed

// Controller function for handling image uploads
async function uploadImage(req, res) {
  const imageUrl = "https://example.com/path/to/image.jpg"; // Replace with your image URL

  try {
    const result = await cloudActions.upload(imageUrl);
    console.log('Image uploaded successfully:', result);
    // Handle the result (e.g., store the Cloudinary URL in your database)
    res.status(200).json({ message: 'Image uploaded successfully' });
  } catch (error) {
    console.error('Image upload failed:', error);
    // Handle the error
    res.status(500).json({ error: 'Image upload failed' });
  }
}

module.exports = {
  uploadImage,
};
