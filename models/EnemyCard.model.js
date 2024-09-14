const { Schema, model } = require("mongoose");

const enemyCardSchema = new Schema({
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
});

const EnemyCard = model("EnemyCard", enemyCardSchema);

module.exports = EnemyCard;
