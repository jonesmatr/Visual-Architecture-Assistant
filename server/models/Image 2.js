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