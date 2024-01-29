const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { playerRoles, gamePlayerRoles } = require('../config/roles');

const playerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    socketId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    clientId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    avatar: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      enum: Object.values(playerRoles),
    },
    gamePlayRole: {
      type: String,
      enum: Object.values(gamePlayerRoles),
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
playerSchema.plugin(toJSON);
playerSchema.plugin(paginate);

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
playerSchema.statics.isNameTaken = async function (name, excludeUserId) {
  const player = await this.findOne({ name, _id: { $ne: excludeUserId } });
  return !!player;
};

/**
 * @typedef Player
 */
const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
