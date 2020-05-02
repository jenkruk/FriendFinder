// Header space for easier readability
// This is a basic server boilerplate

// Require npm packages
var express= require("express");
var path = require("path");

// Sets up the Express App
var app = express();
// allows heroku to pick port first
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true })); // creates ability to use (places response in) req.body
app.use(express.json());

app.use(express.static("./app/public"));

var apiRoutes = require("./app/routing/apiRoutes.js");
app.use(apiRoutes);

// could also write below as: app.use(require("./app/routing/htmlRoutes.js");
// below is more common
// listed after the apiRoutes (on line 19 & 20) because the catch-all(*) at the end of htmlRoutes
var htmlRoutes = require("./app/routing/htmlRoutes.js");
app.use(htmlRoutes); 

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  })