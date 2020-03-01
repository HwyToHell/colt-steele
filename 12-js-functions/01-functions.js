var first = prompt("enter number");

if(isEven(first)) {
    console.log("is even");
} 
else {
    console.log("is odd");
}


console.log("factorial:" + factorial(first));

/*
function isEven(number)  {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}*/

// shorter
function isEven(num) {
    return num % 2 === 0;
}

// recursive version
function factorial(n) {

    if (n <= 1) {
        return 1;
    } else {
        return factorial(n-1) * n;
    }
}


var str = prompt("enter kebab name");

console.log(kebabToSnake(str));

function kebabToSnake(str) {
    return str.replace(/-/g, "_");
}