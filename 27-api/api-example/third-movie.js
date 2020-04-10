var express = require("express"),
    request = require("request");

var app = express(),
    port = 3000;

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("search");
});

app.post("/search", function(req, res) {
    searchTerm = req.body.title;
    console.log(searchTerm);
    res.redirect("/result");
});

app.get("/result", function(req, res) {
    var searchTerm = req.query.search;
    //console.log(searchTerm);
    var url = "https://omdbapi.com/?s=" + searchTerm + "&apikey=thewdb";
    //console.log(url);
    request(url , function(error, response, body) {
        if(!error && response.statusCode == 200) {
            var parsedData = JSON.parse(body);
            //res.send(parsedData["Search"]);
            res.render("result", {parsed: parsedData});
        } else {
            console.error('error:', error);
            console.log('statusCode:', response.statusCode);
        }    
    });
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found ...");
});

app.listen(port, function() {
    console.log(`listening at http://localhost:${port}`);
});