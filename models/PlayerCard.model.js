const { Schema, model } = require("mongoose");

const playerCardSchema = new Schema({
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
    required: true,
  },
  specialAttack: {
    type: String,
    required: true,
  },
});

const PlayerCard = model("PlayerCard", playerCardSchema);

module.exports = PlayerCard;
