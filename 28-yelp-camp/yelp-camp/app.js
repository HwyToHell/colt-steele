var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");
    
var app = express(),
    port = 3000;

var opts_mongoose = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000
}

mongoose.connect("mongodb://localhost:27017/yelp", opts_mongoose).
    catch(function(error) {
        console.log("cannot connect to mongodb, \
please start database server");
    });

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

// schema setup
var campSchema = new mongoose.Schema({
    name: String,
    image: String,
    comment: String
});

var Camp = mongoose.model("Camp", campSchema);


var campgrounds = [
    {name: "Salmon Creek", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        comment: "close to water, lots of mosquitos"},
    {name: "Forrest Glad", image: "https://images.unsplash.com/photo-1537565266759-34bbc16be345?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        comment: "quiet, no restroom, no electricity"},
    {name: "Granite Hill", image: "https://images.unsplash.com/photo-1471115853179-bb1d604434e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=959&q=80",
        comment: "steep hill, hard to reach"},
    {name: "Deep Woods", image: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        comment: "find rest and serenity"},
    {name: "Mountain Lake", image: "https://images.unsplash.com/photo-1560065569-fc53b0b6b94e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
        comment: ""},
    {name: "Meadows", image: "https://images.unsplash.com/photo-1533873984035-25970ab07461?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
        comment: "no comments yet"}
];


Camp.find({}, function(err, campgrounds_from_db ) {
    if(err) {
        console.log(err);
    } else {
        if(campgrounds_from_db.length === 0) {
            console.log("empty db");
            console.log("new campgrounds:");
            campgrounds.forEach(function(camp) {
                Camp.create(camp, function(err, camp) {
                    if(err) {
                        console.log(err);
                    } else {
                        console.log("created:", camp.name);
                    }
                });
            });
        } else {
            console.log("db contains:", campgrounds_from_db.length, "records");     
        }
    }
});


//eval(require('locus'))

/*
Camp.create(campgrounds, function(err, camps) {
    if(err) {
        console.log(err);
    } else {
        console.log("created campgrounds:");
        camps.forEach(function(camp) {
            console.log(camp);
        });
    }
});
*/


app.get("/", function(req, res){
    //res.send("landing page") // debug only
    res.render("landing");
});


// INDEX ROUTE
app.get("/campgrounds", function(req, res){
    // get all campgrounds from db
    Camp.find({}, function(err, campgrounds_from_db ) {
        if(err) {
            console.log(err);
        } else {
            res.render("index", {campgrounds: campgrounds_from_db});
        }
    });
    //res.render("campgrounds", {campgrounds: campgrounds});
});


// NEW ROUTE
app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});


// CREATE ROUTE
app.post("/campgrounds", function(req, res){
    //res.send("post route");
    var name = req.body.name,
        image = req.body.image,
        comment = req.body.comment,
        new_campground = {name: name, image: image, comment: comment};
    // TODO save new campground to db
    Camp.create(new_campground, function(err, newly_created) {
        if(err) {
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
    });
    //campgrounds.push(new_campground);
});


// SHOW ROUTE
app.get("/campgrounds/:id", function(req, res) {
    //res.send("this will be the show page one day");
    Camp.findById(req.params.id, function(err, found_campground) {
        if(err) {
            console.log(err);
        } else {
            res.render("show", { campground: found_campground });
        }
    });

})

app.listen(port, function() {
    console.log(`listening at http://localhost:${port}`);
});