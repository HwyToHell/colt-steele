var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");
    
var app = express(),
    port = 3000;

var opts_mongoose = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect("mongodb://localhost:27017/yelp", opts_mongoose);
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

// schema setup
var campSchema = new mongoose.Schema({
    name: String,
    image: String
});

var Camp = mongoose.model("Camp", campSchema);
/*Camp.create(
    {
        name: "Granite Hill",
        image: "https://images.unsplash.com/photo-1537565266759-34bbc16be345?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    }, function(err, camp) {
        if(err) {
            console.log(err);
        } else {
            console.log("campground created");
            console.log(camp);
        }
    });
*/
app.get("/", function(req, res){
    //res.send("landing page") // debug only
    res.render("landing");
});

var campgrounds = [
    {name: "campground 1", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"},
    {name: "campground 2", image: "https://images.unsplash.com/photo-1537565266759-34bbc16be345?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"},
    {name: "campground 3", image: "https://images.unsplash.com/photo-1471115853179-bb1d604434e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=959&q=80"},
    {name: "campground 4", image: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"},
    {name: "campground 5", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"},
    {name: "campground 6", image: "https://images.unsplash.com/photo-1537565266759-34bbc16be345?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}
];

app.get("/campgrounds", function(req, res){
    // get all campgrounds from db
    Camp.find({}, function(err, campgrounds_from_db ) {
        if(err) {
            console.log(err);
        } else {
            res.render("campgrounds", {campgrounds: campgrounds_from_db});
        }
    });
    //res.render("campgrounds", {campgrounds: campgrounds});
});

app.get("/campgrounds/new" ,function(req, res){
    res.render("new.ejs");
});


app.post("/campgrounds", function(req, res){
    //res.send("post route");
    var name = req.body.name,
        image = req.body.image,
        new_campground = {name: name, image: image};
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

app.listen(port, function() {
    console.log(`listening at http://localhost:${port}`);
});