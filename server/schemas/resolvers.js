const { User, Image } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const cloudinary = require('cloudinary').v2; // Import Cloudinary


const resolvers = {
  Query: {
    // images: async () => {
    //   return Image.find().sort({ createdAt: -1 });
    // },

    // image: async (parent, { imageId }) => {
    //   return Image.findOne({ _id: imagaeId });
    // },
  },

  Mutation: {
    login: async (parent, args, context) => {
      const { email, password } = args;
      const user = await User.findOne({ email: email });
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      return { token, user };
      },
  addUser: async (parent, args) => {
    console.log(args);
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
      },

      uploadImage: async (_, { image, description, tags }, context) => {
        try {
          // Check if the user is authenticated (you can add your authentication logic here)
          if (!context.user) {
            throw new AuthenticationError('You must be logged in to upload an image');
          }
  
          // Upload the base64 encoded image to Cloudinary
          const result = await cloudinary.uploader.upload(image, {
            folder: 'your-upload-folder', // Specify your folder in Cloudinary
            // Other Cloudinary options as needed
          });
  
          // Create a new Image document in your database with the Cloudinary URL
          const newImage = await Image.create({
            imageUrl: result.secure_url,
            description,
            tags,
            uploadedBy: context.user._id, // Assign the user who uploaded the image
            // Add other fields as needed
          });
  
          return newImage;
        } catch (error) {
          throw new Error('Failed to upload image: ' + error.message);
        }
      },
    },
  };
  


module.exports = resolvers;
