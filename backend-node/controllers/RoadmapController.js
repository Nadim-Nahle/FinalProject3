const { all } = require("../app/routes");
const Roadmap = require("../models/roadmap");
const fs = require('fs');

//ADD ROADMAP CONTROLLER
async function addRoadmap(req, res) {
  const roadmap = new Roadmap({ ...req.body, owner: req.user._id });
  try {
    await roadmap.save();
    res.status(201).send(roadmap);
  } catch (error) {
    res.status(500).send(error.message);
  }
}



