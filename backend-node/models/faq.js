const mongoose = require("mongoose");

//MOVIE SCHEMA
const faqSchema = new mongoose.Schema({

  questions: {
    type: String,
    min: 1,
    max: 255,
  },

  answers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Answers",
    },
  ],


  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

//EXPORTING SCHEMA
module.exports = mongoose.model("Faq", faqSchema);
