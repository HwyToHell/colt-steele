// iprovements -> see bottom

var express = require("express");
var app = express(),
    port = 3000;

app.get("/", function(req, res) {
    res.send("/ Route");
});


app.get("/speak/:animal", function(req, res) {
    //res.send(req.params);
    var animal = req.params.animal,
        answer = "The animal says ";

    switch (animal) {
        case "pig":
            answer += "Oink";
            break;
        case "cow":
            answer += "Moo";
            break;
        case "dog":
            answer += "Woof";
            break;
        default:
            answer = "unrecognized animal";
    }
    res.send(answer);
});

app.get("/repeat/:string/:number", function(req, res) {
    //res.send(req.params);
    var str = req.params.string,
        n   = parseInt(req.params.number),
        ans = "";
    if (isNaN(n)) {
        ans = "repeat count is not a number";
    } else {
        for(var i = 0; i < n; ++i) {
            ans += str + " ";
        }
    }
    res.send(ans);    
})


app.get("*", function(req, res) {
    res.send("Sorry, page not found ...");
});

app.listen(port, function() {
    console.log(`listening at http://localhost:${port}`);
});

/* alternative for /:speak/:animal route
app.get("/speak/:animal", function(req, res) {
    //res.send(req.params);
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof"
    }

    var animal = req.params.animal.toLowerCase(),
        answer = sounds[animal];
        
    res.send("The " + animal + " says " + answer);
});
*/