const mongoose = require("mongoose");

const userMembershipSchema =
  new mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      membership: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Membership",
        required: true,
      },
paymentId: {
  type: String,
},

amount: {
  type: Number,
  default: 0,
},
      startDate: {
        type: Date,
        default: Date.now,
      },

      expiryDate: {
        type: Date,
        required: true,
      },

      status: {
        type: String,
        default: "Active",
      },
    },
    {
      timestamps: true,
    }
  );

module.exports = mongoose.model(
  "UserMembership",
  userMembershipSchema
);