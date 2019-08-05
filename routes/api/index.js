const router = require("express").Router();
const argumentRoutes = require("./arguments");
const userRoutes = require("./users");

//Test
router.use(function timelog(req,res,next){
    console.log("Time in Arguments index", Date.now())
    next();
})

// Argument routes
router.use("/arguments", argumentRoutes);
router.use("/users", userRoutes);

module.exports = router;