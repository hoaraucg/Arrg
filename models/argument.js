const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const argumentSchema = new Schema({
  title: { type: String, required: true },
  main: { type: String, required: true },
  sideone: { type: String, required: true },
  sidetwo: { type: String, required: true }
});

const Argument = mongoose.model("Argument", argumentSchema);

module.exports = Argument;