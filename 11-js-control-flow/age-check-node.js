const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Enter age: ", function(ageInput) {
    //console.log(ageInput);
    //console.log(`${ageInput}`);
    checkAge(ageInput);

    rl.close();
});

/*
var age = prompt("enter age");
if (age < 0) { alert("Error, age must be greater than 0!")}
else if (age % 2 === 0) { alert("Your age is even")}
else if (age == 21) { alert("Happy 21st birthday!")}
else { alert("Your age is odd")}
*/

function checkAge(age) {
    if (age < 0) { console.log("Error, age must be greater than 0!")}
    else if (age % 2 === 0) { console.log("Your age", age, "is even")}
    else if (age == 21) { console.log("Happy 21st birthday!")}
    else { console.log("Your age", age, "is odd")} 
    return;
}