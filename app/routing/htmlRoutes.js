// Header space for easier readability
    var router = require("express").Router();
    var path = require("path");

//  Your `htmlRoutes.js` file should include two routes
    //  A GET Route to `/survey` which should display the survey page.
    //  A default, catch-all route that leads to `home.html` which displays the home page. 

    router.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))  
    });
    
    // Order matters!  If this was above survey - it would be successful
    // and therefore never get to survey
    router.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))  
    });

    module.exports = router;