
// Header space for easier readability
var router = require("express").Router();
var friends = require("../data/friends");

// Your `apiRoutes.js` file should contain two routes:
    // A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
    // A POST route `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

  // Displays all of the friends
  router.get("/api/friends", function(req, res) { 
    return res.json(friends);
  });

  router.post("/api/friends", function(req, res) {
    console.log(req.body.scores);
    // req.body is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriend = req.body; // returns the JSON as an array of objects

    var friendsComparison = [];
    var totalDifference = 0;

    // loop through the friends scores
    for(var i = 0; i < friends.scores.length; i++) {  
      friends.scores[i] = friends.scores[i];

    // loop through the newFriend's scores
    for(var i = 0; i < newFriend.scores.length; i++) {  
      newFriend.scores[i] = parseInt(newFriend.scores[i]);
    }
 
   
    return res.json(friends[i]);
  });

    module.exports = router;
