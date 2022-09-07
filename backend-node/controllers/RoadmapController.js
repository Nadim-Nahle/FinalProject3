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

//GET ROADMAP CONTROLLER
async function getRoadmap(req, res) {
  try {
    const roadmap = await Roadmap.find({ owner: req.user._id });
    if (!roadmap) {
      return res.status(404).send();
    }
    res.status(200).send(roadmap);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

//DELETE ROADMAP CONTROLLER
async function deleteRoadmap(req, res) {
  try {
    const roadmap = await Roadmap.findById(req.params.id);
    if (!roadmap) {
      return res.status(404).send();
    }
    await roadmap.remove();
    res.status(200).send({ data: true });
  } catch (error) {
    res.status(400).send(error.message);
  }
}


//UPDATE ROADMAP CONTROLLER
async function updateRoadmap(req, res) {
  try {
    const roadmap = await roadmap.findById(req.params.id);
    if (!roadmap) {
      return res.status(404).send();
    }
    Object.assign(roadmap, req.body);
    roadmap.save();
    res.send({ data: roadmap });
  } catch (error) {
    res.status(400).send(error.message);
  }
}


module.exports = {
  addRoadmap,
  getRoadmap,
  deleteRoadmap,
  updateRoadmap,
};


