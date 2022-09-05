const mongoose = require("mongoose");

//MOVIE SCHEMA
const home = new mongoose.Schema({

  name: {
    type: String,
    min: 1,
    max: 255,
  },

  logo: {
    type: String,
    min: 1,
    max: 255,
  },

  catchphrase: {
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
module.exports = mongoose.model("Home", homeSchema);
