var express = require("express");
var app = express();

app.get('/', function(req, res) {
res.send("Hi there from express");
});
    
//app.listen(process.env.PORT, function() {
app.listen(3000, function() {    
    console.log("server has started");
});