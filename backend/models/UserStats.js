const mongoose = require("mongoose");

const userStatsSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      unique: true,
    },

    goal: {
      type: String,
      default: "",
    },

    fitnessScore: {
      type: Number,
      default: 0,
    },

    benchPR: {
      type: Number,
      default: 0,
    },

    squatPR: {
      type: Number,
      default: 0,
    },

    deadliftPR: {
      type: Number,
      default: 0,
    },

    bodyWeight: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "UserStats",
  userStatsSchema
);