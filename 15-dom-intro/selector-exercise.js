console.log("js runs ...")

var p;

window.setTimeout(function() {
    
    // id = unique identfier
    var p1 = document.getElementById("first");
    console.log("by id", p1);

    // all tag elements in node list
    var p2 = document.getElementsByTagName("p");
    console.log("by tag name", p2[0]);

    // first found element
    var p3 = document.querySelector(".special");
    console.log("selector .class", p3);
    
    // all found elements as node list
    var p4 = document.querySelectorAll(".special")[0];
    console.log("selector all", p4);

    
    // adds style class    
    p4.classList.add("big");



    p = p1;

}, 500);