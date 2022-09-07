const { all } = require("../app/routes");
const Faq = require("../models/faq");
const fs = require('fs');

//ADD FAQ CONTROLLER
async function addFaq(req, res) {
  const faq = new Faq({ ...req.body, owner: req.user._id });
  try {
    await faq.save();
    res.status(201).send(faq);
  } catch (error) {
    res.status(500).send(error.message);
  }
}



