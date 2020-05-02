
// Header space for easier readability
var route = require("express").Router();
var friends = require("../data/friends");

// Your `apiRoutes.js` file should contain two routes:
  // A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
  route.get("/api/friends", function(req, res) { 
    return res.json(friends);
  });

  // A POST route `/api/friends`. This will be used to handle incoming survey results. This route will also be used thandle the compatibility logic. 
  route.post("/api/friends",function(req,res){
    var user = req.body.scores
    var bestMatch;
    var prevDiff=10000;
    for (var i = 0; i < friends.length; i++) {
        var currentScore = friends[i].scores
        var totalDifference = 0
        for (var j = 0; j < user.length; j++) {
            var diff = Math.abs(user[j] - currentScore[j]);
            console.log(diff);
            totalDifference += diff;
        }
        if(totalDifference<prevDiff){
            prevDiff=totalDifference
            bestMatch=friends[i]
        }
        console.log("*****************************")
        console.log("Total Difference", totalDifference);
    }
    friends.push(req.body);
    console.log("Your Best Friend is",bestMatch );
    res.json(bestMatch);
});

    module.exports = route;