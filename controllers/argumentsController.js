const db = require("../models");

// Defining methods for the argumentsController
module.exports = {
  findAll: function(req, res) {
    console.log('yes back')
    db.Argument
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => {
        console.log("Test" + dbModel);
        res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Argument
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByType: function (req,res) {
    db.Argument
    .findByType(req.params.type)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Argument
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("results" + req.body.totalVotes)
    db.Argument
      .findOneAndUpdate({ _id: req.params.id }, {
            sideOneVote: req.body.sideOneVote,
            sideTwoVote: req.body.sideTwoVote,
            totalVotes: req.body.totalVotes
          })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Argument
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};