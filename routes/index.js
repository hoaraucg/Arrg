const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

//Test
router.use(function timelog(req,res,next){
  console.log("Time in API index", Date.now())
  next();
})

// API Routes
router.use("/api", apiRoutes);



// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;