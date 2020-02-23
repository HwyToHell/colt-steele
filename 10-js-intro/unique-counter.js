var uniqueInteger = (function() {
    var counter = 0;
    return function() { return counter++; }
}());

console.log("Unique counter");

var a = uniqueInteger();
var b = uniqueInteger();
console.log("first ID:", a);
console.log("second ID:", b);