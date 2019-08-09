const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require("passport");
var bodyParser   = require('body-parser');

const users = require("./routes/api/users");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// BodyParser middleware
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Define API routes here
app.use(routes);
app.use("/api/users", users)

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// DB Config
const db = require("./config/keys").mongoURI;

// Connecting to our Database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactarrglist");

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
