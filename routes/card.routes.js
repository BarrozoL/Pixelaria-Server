const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Card = require("../models/Card.model");
/* const EnemyCard = require("../models/EnemyCard.model"); */

//GET cards
router.get("/cards", (req, res, next) => {
  Card.find()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});

//POST a new card
router.post("/cards", (req, res, next) => {
  const {
    name,
    health,
    attack,
    image,
    attackAnimation,
    specialAttack,
    category,
  } = req.body;

  const newCard = {
    name,
    health,
    attack,
    image,
    attackAnimation,
    specialAttack,
    category,
  };
  Card.create(newCard)
    .then((newCard) => {
      res.status(201).json(newCard);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
