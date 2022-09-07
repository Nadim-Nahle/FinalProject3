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




