const mongoose = require("mongoose");

//MOVIE SCHEMA
const teamSchema = new mongoose.Schema({

  picture: {
    type: String,
    default: "",
  },

  name: {
    type: String,
    min: 1,
    max: 255,
  },

  description: {
    type: String,
    min: 1,
    max: 255,
  },


  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

//EXPORTING SCHEMA
module.exports = mongoose.model("Team", teamSchema);
