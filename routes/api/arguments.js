const router = require("express").Router();
const argumentsController = require("../../controllers/argumentsController");

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

module.exports = router;