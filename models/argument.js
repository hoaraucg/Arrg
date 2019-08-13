const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const argumentSchema = new Schema({
  type: ["Relationship", "Friendship", "Family", "Workplace", "Politics", "Other"],
  title: { type: String, required: true },
  main: { type: String, required: true },
  sideone: { type: String, required: true },
  sidetwo: { type: String, required: true },
  sideOneVote: {type: [String]},
  sideTwoVote: {type: [String]},
  totalVotes: { type: Number },
  users: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: "User"
    }
  ]
  // date: Date.now()
});

const Argument = mongoose.model("Argument", argumentSchema);

module.exports = Argument;
