const { all } = require("../app/routes");
const Home = require("../models/home");
const fs = require('fs');

//ADD HOME CONTROLLER
async function addHome(req, res) {
  const home = new Home({ ...req.body, owner: req.user._id });
  try {
    await home.save();
    res.status(201).send(home);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

//GET HOME CONTROLLER
async function getHome(req, res) {
  try {
    const home = await Home.find({ owner: req.user._id });
    if (!home) {
      return res.status(404).send();
    }
    res.status(200).send(home);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

//DELETE HOME CONTROLLER
async function deleteHome(req, res) {
  try {
    const home = await Home.findById(req.params.id);
    if (!home) {
      return res.status(404).send();
    }
    await home.remove();
    res.status(200).send({ data: true });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

//DELETE MOVIE CONTROLLER
async function deleteHome(req, res) {
  try {
    const movie = await Home.findById(req.params.id);
    if (!movie) {
      return res.status(404).send();
    }
    await movie.remove();
    res.status(200).send({ data: true });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

//UPDATE HOME CONTROLLER
async function updateHome(req, res) {
  try {
    const home = await Home.findById(req.params.id);
    if (!home) {
      return res.status(404).send();
    }
    Object.assign(home, req.body);
    home.save();
    res.send({ data: home });
  } catch (error) {
    res.status(400).send(error.message);
  }
}


module.exports = {
  addHome,
  getHome,
  deleteHome,
  updateHome,
};


