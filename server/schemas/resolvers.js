const { User, Image } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const cloudinary = require("cloudinary").v2; // Import Cloudinary

//configure cloudinary
cloudinary.config({
  cloud_name: 'dbindi09a',
  api_key: '849987797231149',
  api_secret: 'Yu3f24mkLIGhQq1T7Fg96LsFZCw',
  secure: true,
}
);
    


const resolvers = {
  Query: {///this query is crashing app////
    images: async (_, __, context) => {
      if (!context.user) {
        throw new AuthenticationError('You must be logged in to view images.');
      }
      return Image.find({ uploadedBy: context.user._id }).sort({ createdAt: -1 });
    },
    image: async (_parent, { imageId }) => {
      return Image.findOne({ _id: imageId });
    },
    users: async () => {
      return User.find();
    },
    contractors: async () => {
      // This is a placeholder. You might want to add filtering logic or other criteria
      // to select only specific users as contractors, depending on your application's logic.
      return User.find();
  },
  userProfile: async (_, __, context) => {
    if (!context.user) {
      throw new AuthenticationError('You must be logged in to view your profile.');
    }
  
    // Find the user by their ID and populate the workImages field
    const user = await User.findById(context.user._id).populate('workImages');
  
    // Filter out any null values from the workImages array
    if (user && user.workImages) {
      user.workImages = user.workImages.filter(image => image != null && image.imageUrl);
    }
  
    return user;
  },
  
  },

  Mutation: {

    login: async (parent, args, context) => {
      const { email, password } = args;
      const user = await User.findOne({ email: email });
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },

    addUser: async (_parent, args) => {
      console.log(args);
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    updateProfilePic: async (_, { imageUrl }, context) => {
      if (!context.user) {
          throw new AuthenticationError('You must be logged in to update your profile picture.');
      }

      const updatedUser = await User.findByIdAndUpdate(
          context.user._id,
          { profilePic: imageUrl },
          { new: true }
      );

      if (!updatedUser) {
          throw new Error('Failed to update profile picture.');
      }

      return updatedUser;
  },

  updateBio: async (_, { bio }, context) => {
    if (!context.user) {
        throw new AuthenticationError('You must be logged in to update your bio.');
    }

    const updatedUser = await User.findByIdAndUpdate(
        context.user._id,
        { bio: bio },
        { new: true }
    );

    if (!updatedUser) {
        throw new Error('Failed to update bio.');
    }

    return updatedUser;
 },

    addImage: async (_, { imageUrl, description, tags }, context) => {
      try {
        // Check if the user is authenticated (you can add your authentication logic here)
        if (!context.user) {
          throw new AuthenticationError(
            "You must be logged in to upload an image"
          );
        }
        // Create a new Image document in your database with the Cloudinary URL
        const newImage = await Image.create({
          imageUrl,
          description,
          tags,
          // uploadedBy:  "653d08b98870be171c6d0b55",
          uploadedBy: context.user._id 
          // Assign the user who uploaded the image
          // Add other fields as needed
        });
        console.log('Newly created image:', newImage);
        return newImage;
      } catch (error) {
        throw new Error("Failed to upload image: " + error.message);
      }
    },

    addWorkImage: async (_, { imageUrl, description }, context) => {
      if (!context.user) {
        throw new AuthenticationError("You must be logged in to add a work image.");
      }
      
      // Check if imageUrl is not null
      if (!imageUrl) {
        throw new Error("Image URL must be provided.");
      }
      
      // Create the image document
      const image = await Image.create({
        imageUrl,
        description,
        uploadedBy: context.user._id,
      });
    
      // Verify image was created with a non-null imageUrl
      if (!image || !image.imageUrl) {
        throw new Error("Failed to create a work image with a valid URL.");
      }
    
      // Add the image to the user's workImages
      const user = await User.findByIdAndUpdate(
        context.user._id,
        { $push: { workImages: image._id } },
        { new: true }
      );
    
      if (!user) {
        throw new Error("Failed to add work image to your profile.");
      }
    
      return image;
    },
    

    deleteWorkImage: async (_, { imageId }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You must be logged in to delete a work image.');
      }
  
      // Find the work image by ID and ensure the logged-in user is the owner
      const image = await Image.findOne({ _id: imageId, uploadedBy: context.user._id });
      if (!image) {
        throw new Error('Work image not found or you do not have permission to delete it.');
      }
  
      // Delete the work image from Cloudinary
      const result = await cloudinary.uploader.destroy(image.imageUrl);
      if (result.result !== "ok") {
        // If deletion from Cloudinary fails, do not proceed to database deletion
        throw new Error('Failed to delete work image from Cloudinary.');
      }
  
      // Remove the work image from the user's workImages array
      const updatedUser = await User.findByIdAndUpdate(
        context.user._id,
        { $pull: { workImages: image._id } },
        { new: true }
      );
  
      if (!updatedUser) {
        // If user update fails, consider how you want to handle this situation
        throw new Error('Failed to update user work images.');
      }
  
      // Proceed to delete the work image document from the database
      await Image.deleteOne({ _id: imageId });
  
      return image;
    },

    deleteImage: async (_, { imageId }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You must be logged in to delete an image.');
      }

      // Find the image by ID and ensure the logged-in user is the owner
      const image = await Image.findOne({ _id: imageId, uploadedBy: context.user._id });
      if (!image) {
        throw new Error('Image not found or you do not have permission to delete this image.');
      }

      // Delete the image from Cloudinary
      const result = await cloudinary.uploader.destroy(image.imageUrl);

      if (result.result === "ok") {
        // Image deleted successfully, remove from database
        await Image.deleteOne({ _id: imageId });
        return image;
      } else {
        // Image deletion failed
        throw new Error('Failed to delete image from Cloudinary.');
      }
    },
  },
};


module.exports = resolvers;
