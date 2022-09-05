const mongoose = require("mongoose");

//MOVIE SCHEMA
const roadmapSchema = new mongoose.Schema({

  grandopening: {
    type: String,
    min: 1,
    max: 255,
  },

  greatbenefits: {
    type: String,
    min: 1,
    max: 255,
  },


  earlyaccess: {
    type: String,
    min: 6,
    max: 255,
  },

  newmerch: {
    type: String,
    min: 6,
    max: 255,
  },

  holdersranking: {
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
module.exports = mongoose.model("Roadmap", roadmapSchema);
