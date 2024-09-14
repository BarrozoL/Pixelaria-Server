const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const PlayerCard = require("../models/PlayerCard.model");
const EnemyCard = require("../models/EnemyCard.model");

//GET player cards
router.get("/cards/player-cards", (req, res, next) => {
  PlayerCard.find()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});

//CREATE and POST a new player card
router.post("/cards/player-cards", (req, res, next) => {
  const { name, health, attack, image, attackAnimation, specialAttack } =
    req.body;

  const newPlayerCard = {
    name,
    health,
    attack,
    image,
    attackAnimation,
    specialAttack,
  };
  PlayerCard.create(newPlayerCard)
    .then((newCard) => {
      res.status(201).json(newCard);
    })
    .catch((err) => {
      next(err);
    });
});

//ENEMY ROUTES

//GET enemy cards
router.get("/cards/enemy-cards", (req, res, next) => {
  EnemyCard.find()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});

//CREATE and POST a new enemy
router.post("/cards/enemy-cards", (req, res, next) => {
  const { name, health, attack, image } = req.body;

  const newEnemyCard = {
    name,
    health,
    attack,
    image,
  };
  EnemyCard.create(newEnemyCard)
    .then((newCard) => {
      res.status(201).json(newCard);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
