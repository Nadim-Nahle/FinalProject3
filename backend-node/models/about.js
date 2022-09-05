const mongoose = require("mongoose");

//MOVIE SCHEMA
const aboutSchema = new mongoose.Schema({

  title: {
    type: String,
    min: 1,
    max: 255,
  },

  description: {
    type: String,
    min: 1,
    max: 255,
  },

  details: {
    type: String,
    min: 6,
    max: 255,
  },


  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

//EXPORTING SCHEMA
module.exports = mongoose.model("About", aboutSchema);
