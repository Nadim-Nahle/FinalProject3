const { all } = require("../app/routes");
const Nft = require("../models/nft");
const fs = require('fs');

//ADD NFT CONTROLLER
async function addNft(req, res) {
  const nft = new Nft({ ...req.body, owner: req.user._id });
  try {
    await nft.save();
    res.status(201).send(nft);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

//GET NFT CONTROLLER
async function getNft(req, res) {
  try {
    const nft = await Nft.find({ owner: req.user._id });
    if (!nft) {
      return res.status(404).send();
    }
    res.status(200).send(nft);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

