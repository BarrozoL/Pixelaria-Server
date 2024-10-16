const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/User.model");
const PlayerCard = require("../models/PlayerCard.model");

//get player info
router.get("/player/:playerId", (req, res, next) => {
  const { playerId } = req.params;

  User.findById(playerId)
    .populate("inventory")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
    });
});

//add a card to player inventory
router.put("/player/inventory", (req, res, next) => {
  const { playerId } = req.body;
  const { cardId } = req.body;

  User.findByIdAndUpdate(playerId, {
    $push: { inventory: cardId },
  })

    .then((response) => {
      res.status(200).json({ message: "Card added to inventory successfully" });
    })
    .catch((err) => next(err));
});

module.exports = router;
