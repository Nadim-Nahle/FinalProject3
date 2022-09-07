const { all } = require("../app/routes");
const About = require("../models/about");
const fs = require('fs');

//ADD ABOUT CONTROLLER
async function addAbout(req, res) {
  const about = new About({ ...req.body, owner: req.user._id });
  try {
    await about.save();
    res.status(201).send(about);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

//GET ABOUT CONTROLLER
async function getAbout(req, res) {
  try {
    const about = await About.find({ owner: req.user._id });
    if (!about) {
      return res.status(404).send();
    }
    res.status(200).send(about);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

//DELETE ABOUT CONTROLLER
async function deleteAbout(req, res) {
  try {
    const about = await About.findById(req.params.id);
    if (!about) {
      return res.status(404).send();
    }
    await about.remove();
    res.status(200).send({ data: true });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

//DELETE ABOUT CONTROLLER
async function deleteAbout(req, res) {
  try {
    const movie = await About.findById(req.params.id);
    if (!movie) {
      return res.status(404).send();
    }
    await movie.remove();
    res.status(200).send({ data: true });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

//UPDATE ABOUT CONTROLLER
async function updateAbout(req, res) {
  try {
    const about = await About.findById(req.params.id);
    if (!about) {
      return res.status(404).send();
    }
    Object.assign(about, req.body);
    about.save();
    res.send({ data: about });
  } catch (error) {
    res.status(400).send(error.message);
  }
}


module.exports = {
  addAbout,
  getAbout,

};


