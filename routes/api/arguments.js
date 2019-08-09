const router = require("express").Router();
const argumentsController = require("../../controllers/argumentsController");
const voteController = require("../../controllers/voteController");


// Matches with "/api/arguments"
router.route("/")
  .get(argumentsController.findAll)
  .post(argumentsController.create);

// Matches with "/api/arguments/:id"
router
  .route("/:id")
  .get(argumentsController.findById)
  .put(argumentsController.update)
  .delete(argumentsController.remove);

  //Matches with "/api/arguments/:type"
router
.route("/:type")
.get(argumentsController.findByType)
.put(argumentsController.update)
.delete(argumentsController.remove);


  // router.route("/vote").put(voteController.update)

module.exports = router;