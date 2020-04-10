var faker = require("faker");

console.log("===================");
console.log("Welcome to my shop!");
console.log("===================");

function printItems(n) {
    for(var i = 0; i < n; ++i) {
        console.log(faker.fake("{{commerce.product}} - ${{commerce.price}}"));
    }
}

printItems(10);