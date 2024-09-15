const { Schema, model } = require("mongoose");

const PlayerInventorySchema = new Schema({
  cardId: [{ type: Schema.Types.ObjectId, ref: "PlayerCard" }],
});

const PlayerInventory = model("PlayerInventory", PlayerInventorySchema);

module.exports = PlayerInventory;
