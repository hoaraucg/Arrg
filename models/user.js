const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
  country: { type: String},
  sex: { type: String},
  race: { type: String},
  ageRange: { type: String},
  political: { type: String},
  relationship: { type: String},
  income: { type: String},
  education: { type: String},
  career: { type: String}, 
  arguments: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: "Argument"
    }
  ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;