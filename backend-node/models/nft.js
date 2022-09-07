const mongoose = require("mongoose");

//MOVIE SCHEMA
const nftSchema = new mongoose.Schema({

  picture: {
    type: String,
    default: "",
  },

  price: {
    type: String,
    min: 1,
    max: 255,
  },

  number: {
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
module.exports = mongoose.model("Nft", nftSchema);
