var express = require("express");
var app = express();

app.get('/', function(req, res) {
    res.send("Hi there from express");
});

app.get('/bye', function(req, res) {
    res.send("Goodbye");
});


app.get('*', function(req, res) {
    res.send("I am a star");
});
    
app.listen(3000, function() {
    console.log("server has started");
});