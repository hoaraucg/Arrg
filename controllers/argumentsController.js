const db = require("../models");

// Defining methods for the argumentsController
module.exports = {
  findAll: function(req, res) {
    // console.log('yes back')
    db.Argument
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => {
        // console.log("Test" + dbModel);
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
    //set req.params id

    console.log(req.body)
    db.Argument
      .create(req.body)
      .then(dbModel => {res.json(dbModel)
        console.log(dbModel._id)
        return db.User.findOneAndUpdate({ name: req.body.user }, {$push: {arguments: dbModel._id}}, {new: true});
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    // db.Argument
    //   .findOneAndUpdate({ _id: req.params.id }, {  
    //         totalVotes: req.body.totalVotes
    //       })
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
    // console.log("side one vote controller ", req.body.sideOneVote)
    if (req.body.sideOne){
      db.Argument
      .findOneAndUpdate({ _id: req.params.id }, {
            $push: {sideOneVote: req.body.user
          }, $set: { totalVotes: req.body.totalVotes}  })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  
  }
else {
  db.Argument
      .findOneAndUpdate({ _id: req.params.id }, {
            $push: {sideTwoVote: req.body.user
          }, $set: { totalVotes: req.body.totalVotes}  })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
}
},
  remove: function(req, res) {
    db.Argument
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};