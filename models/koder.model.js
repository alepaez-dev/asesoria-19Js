const mongoose = require("mongoose");

const koderSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 20,
    required: true
  },
  age: {
    type: Number,
    min: 18,
    max: 150
  },
  gen: {
    type: String,
    required: true
  },
  module: {
    type: String
  },
  hobbies: {
    type: [String]
  },
  sexo: {
    type: String,
    enum: ["f", "m", "o"]
  }
})

const Koder = mongoose.model("koders", koderSchema)

module.exports = Koder