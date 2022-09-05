const mongoose = require("mongoose");

//USER SCHEMA
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },

    username: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    phoneNumber: {
      type: String,
      min: 6,
      max: 255,
    },
    country: {
      type: String,
      min: 6,
      max: 255,
    },
    city: {
      type: String,
      min: 6,
      max: 255,
    },

    email: {
      type: String,
      required: true,
      min: 6,
      max: 255,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      min: [6, "please choose a stronger password"],
      max: 1024,
    },

    roles: {
      type: [
        {
          type: String,
          enum: ["user", "admin", "premium"],
        },
      ],
      default: ["user"],
    },

    isPremium: {
      type: Boolean,
      default: false,
    },

    url: {
      type: String,
      default: "",
    },

    home: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Home",
      },
    ],
    about: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "About",
      },
    ],
    rodmap: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Roadmap",
      },
    ],
    team: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
      },
    ],
    faq: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Faq",
      },
    ],
  },
  { timestamps: true }
);

//EXPORTING SCHEMA
module.exports = mongoose.model("user", userSchema);
