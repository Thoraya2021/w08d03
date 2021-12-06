const mongoose = require("mongoose");

const todoModel = new mongoose.Schema({
  name: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
  createby:  [{ type: mongoose.Schema.Types.ObjectId, ref:"user" }],
});
module.exports =mongoose.model('Todo',todoModel)
