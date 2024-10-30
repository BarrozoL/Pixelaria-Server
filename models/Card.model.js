const { Schema, model } = require("mongoose");

const cardSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  health: {
    type: Number,
    required: true,
  },
  attack: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  attackAnimation: {
    type: String,
  },
  specialAttack: {
    type: String,
  },
  category: {
    type: String,
    enum: ["player", "enemy"],
    required: true,
  },
  style: {
    type: String,
    enum: ["melee", "ranged", "magic"],
  },
  type: {
    type: String,
    enum: ["water", "fire", "earth", "air", "electric", "normal"],
  },
});

const Card = model("Card", cardSchema);

module.exports = Card;
