// Header space for easier readability

// Your `apiRoutes.js` file should contain two routes:
    // A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
    // A POST route `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

var express= require("express");

var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// route that sends the user to the survey page

  // Displays all of the friends
  app.get("/api/friends", function(req, res) {
    return res.json(survey);
  });

  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newreservation = req.body;

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });