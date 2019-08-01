const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactarrglist"
);

const userSeed = [
  {
    username: "thisuser1",
    email: "thisuser1@email.com",
    password: "passworduser1",
    date: new Date(Date.now())
  },
  {
    username: "thisuser2",
    email: "thisuser2@email.com",
    password: "passworduser2",
    date: new Date(Date.now())
  },
  {
    username: "thisuser3",
    email: "thisuser3@email.com",
    password: "passworduser3",
    date: new Date(Date.now())
  },
  {
    username: "thisuser3",
    email: "thisuser3@email.com",
    password: "passworduser3",
    date: new Date(Date.now())
  },
  {
    username: "thisuser4",
    email: "thisuser4@email.com",
    password: "passworduser4",
    date: new Date(Date.now())
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " users inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
