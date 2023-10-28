const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

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
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
      },
  },
};

module.exports = resolvers;
