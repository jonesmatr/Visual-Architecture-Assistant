const { Schema, model } = require('mongoose');

const imageSchema = new Schema(
  {
    imageUrl: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User', // Assuming your user model is named 'User'
    },
    tags: [
      {
        type: String,
        trim: true,
      }
    ],
    uploadedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    
  }
);
const Image = model('Image', imageSchema);

module.exports = Image;