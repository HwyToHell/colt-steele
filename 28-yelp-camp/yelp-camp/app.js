var express = require("express");
var bodyParser = require("body-parser");

var app = express(),
    port = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    //res.send("landing page")
    res.render("landing");
});

var campgrounds = [
    {name: "campground 1", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"},
    {name: "campground 2", image: "https://images.unsplash.com/photo-1537565266759-34bbc16be345?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}
];

app.get("/campgrounds", function(req, res){

    res.render("campgrounds", {campgrounds: campgrounds});
});

app.get("/campgrounds/new" ,function(req, res){
    res.render("new.ejs");
});


app.post("/campgrounds", function(req, res){
    //res.send("post route");
    var name = req.body.name,
        image = req.body.image,
        newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.listen(port, function() {
    console.log(`listening at http://localhost:${port}`);
});