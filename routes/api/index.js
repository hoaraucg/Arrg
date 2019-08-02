const router = require("express").Router();
const argumentRoutes = require("./arguments");

//Test
router.use(function timelog(req,res,next){
    console.log("Time in Arguments index", Date.now())
    next();
})

// Argument routes
router.use("/arguments", argumentRoutes);

module.exports = router;