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

//GET FAQ CONTROLLER
async function getFaq(req, res) {
  try {
    const faq = await Faq.find({ owner: req.user._id });
    if (!faq) {
      return res.status(404).send();
    }
    res.status(200).send(faq);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

//DELETE FAQ CONTROLLER
async function deleteFaq(req, res) {
  try {
    const faq = await Faq.findById(req.params.id);
    if (!faq) {
      return res.status(404).send();
    }
    await faq.remove();
    res.status(200).send({ data: true });
  } catch (error) {
    res.status(400).send(error.message);
  }
}




module.exports = {
  addFaq,
  getFaq,
  deleteFaq,
  updateFaq,
};


