const { all } = require("../app/routes");
const Team = require("../models/team");
const fs = require('fs');

//ADD TEAM CONTROLLER
async function addTeam(req, res) {
  const team = new Team({ ...req.body, owner: req.user._id });
  try {
    await team.save();
    res.status(201).send(team);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

//GET TEAM CONTROLLER
async function getTeam(req, res) {
  try {
    const team = await Team.find({ owner: req.user._id });
    if (!team) {
      return res.status(404).send();
    }
    res.status(200).send(team);
  } catch (error) {
    res.status(400).send(error.message);
  }
}



