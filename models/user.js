const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
  country: { type: String, required: true },
  sex: { type: String, required: true },
  race: { type: String, required: true },
  ageRange: { type: String, required: true },
  political: { type: String, required: true },
  relationship: { type: String, required: true },
  income: { type: String, required: true },
  education: { type: String, required: true },
  career: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

module.exports = User;