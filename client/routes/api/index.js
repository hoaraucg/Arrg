const router = require("express").Router();
const argumentRoutes = require("./arguments");

// Argument routes
router.use("/arguments", argumentRoutes);

module.exports = router;