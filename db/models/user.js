const mongoose = require("mongoose");


const usermodel = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, default: false },
    role:  [{ type: mongoose.Schema.Types.ObjectId, ref: "role" }],
  });

  module.exports =mongoose.model('User',usermodel)