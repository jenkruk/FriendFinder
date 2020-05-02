
// Header space for easier readability
var router = require("express").Router();
var friendsData = require("../data/friends");

// Your `apiRoutes.js` file should contain two routes:
  // A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
  router.get("/api/friends", function(req, res) { 
    return res.json(friendsData);
  });

  // A POST route `/api/friends`. This will be used to handle incoming survey results. This route will also be used thandle the compatibility logic. 
  router.post("/api/friends", function(req, res) {

        var newFriend = {
          name: req.body.name,
          photo: req.body.photo,
          scores: []
        };

        var newFriendsScores = [];
        for (var i=0; i < req.body.scores.length; i++){
        // Parse newFriend scores to get integers (javascript returns strings)
          newFriendsScores.push(parseInt(req.body.scores[i]))
        };
        newFriendsScores = newFriend.scores;
    
        // Cross check the new friend entry with the existing ones
        var compare = [];
        for (var i = 0; i < friendsData.length; i++){
        // Check each friend's scores and determine the difference in points
        var comparison = 0;
        for (var c=0; c < newFriendsScores.length; c++){
          // Math.abs returns the absolute value of a number
           comparison += Math.abs(newFriendsScores[c] - friendsData[i].scores[i] );
        }
          
        // Push each comparison between friends to array
        compare.push(comparison);
        console.log(comparison);
        };
       
        
        // Determine the best match using the postion of the match in the friendsData array
        var matchIndex = 0;
        for(var i = 1; i < compare.length; i++){
          // Lower number in comparison difference means better match
          if(compare[i] <= compare[matchIndex]){
            matchIndex = i;
            console.log(matchIndex);
          }
        };
        
        // If 2 friends match to the new friend, then the first result from the friendsData array is chosen
        var friendMatch = friendsData[matchIndex];

        // Reply with a JSON object of the best match
        res.json(friendMatch);
        console.log(friendMatch);
    
        // Push the new friend to the friends data array for storage
        friendsData.push(newFriend);
    
      });

    module.exports = router;