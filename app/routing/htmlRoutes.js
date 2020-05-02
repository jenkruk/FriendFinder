// Header space for easier readability

    var router = require("express").Router();
    var path = require("path");

    // GET Route to `/survey`
    router.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))  
    });
    
    // A default, catch-all route that leads to `home.html`
    // Order matters!  If this was above survey - it would be successful
    // and therefore never get to survey
    router.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))  
    });

    module.exports = router;