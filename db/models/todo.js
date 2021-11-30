const mongoose = require("mongoose");

const todoModel = new mongoose.Schema({
  name: { type: String, required: true },
  isDel: { type: Boolean, default: true },
  createby:  [{ type: mongoose.Schema.Types.ObjectId, ref:"user" }],
});
module.exports =mongoose.model('Todo',todoModel)
