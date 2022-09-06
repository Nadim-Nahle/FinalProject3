const { all } = require("../app/routes");
const Home = require("../models/home");
const fs = require('fs');

//ADD MOVIE CONTROLLER
async function addHome(req, res) {
  const movie = new Home({ ...req.body, owner: req.user._id });
  try {
    await movie.save();
    res.status(201).send(movie);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

