const router = require("express").Router();
const argumentRoutes = require("./arguments");

// Book routes
router.use("/arguments", argumentRoutes);

module.exports = router;