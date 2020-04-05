var express = require("express");
var bodyParser = require("body-parser");
var app = express(),
    port = 3000,
    friends = [ "Holger", "Carla", "Andreas", "Kerstin" ];

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.send("Home");
});

app.post("/addfriend", function(req, res) {
    console.log(req.body.name);
    friends.push(req.body.name);
    res.redirect("/friends");
})

app.get("/friends", function(req, res) {
    res.render("friends", {friends: friends});
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found ...");
});

app.listen(port, function() {
    console.log(`listening at http://localhost:${port}`);
});
