const mongoose = require("mongoose");

const todoModel = new mongoose.Schema({
  name: { type: String, required: true },
  isDel: { type: Boolean, default: false },
  createby: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});
module.exports = mongoose.model("Todo", todoModel);
