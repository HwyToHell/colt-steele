var express = require("express");
var app = express(),
    port = 3000;

app.get("/", function(req, res) {
    res.send("/ Route");
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found ...");
})

app.listen(port, function() {
    console.log("listening at http://localhost:${port}");
})