const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const argumentSchema = new Schema({
  type: ["Relationship", "Friendship", "Family", "Workplace", "Politics", "Other"],
  title: { type: String, required: true },
  main: { type: String, required: true },
  sideone: { type: String, required: true },
  sidetwo: { type: String, required: true },
  sideOneVote: {type: Number},
  sideTwoVote: {type: Number},
  totalVotes: {type: Number},
  // date: Date.now()
});

const Argument = mongoose.model("Argument", argumentSchema);

module.exports = Argument;
