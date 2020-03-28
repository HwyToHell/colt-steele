// avoid html display isssues on chrome (doesn't display until popup has been closed)
window.setTimeout(function() {
    // put code in here
}, 500);


function printReverse(arr) {
    for(var i = arr.length - 1; i >= 0; --i) {
        console.log(arr[i]);
    }
}

function isUniform(arr) {
    var uniform = true;
    var firstValue = arr[0];
    if (firstValue == undefined)
        return false; 
    arr.forEach(function(actValue) {
        if (firstValue !== actValue) {
            uniform = false;
            // false cannot returned here, 
            //  as it only returns form inner function arr.forEach
        }
    })
    return uniform;
}

function isUniform(arr) {
    var first = arr[0];
    if(first == undefined)
        return false;

    for(var i = 0; i < arr.length; ++i) {
        if(arr[i] !== first) {
            return false;
        }
    }
    return true;
}

function sumArray(arr) {
    var sum = 0;
    arr.forEach(function(value) { sum += value}  );
    return sum;
}

function max(arr) {
    var max = 0;
    arr.forEach(function(value) { 
        if (value > max) {
            max = value;
        }
    });
    return max;    
}

function myForEach(arr, func) {
    for(var i = 0; i < arr.length; ++i) {
        func(arr[i]);
    }
}

// add prototype
Array.prototype.myForEach = function(func) {
    for(var i = 0; i < this.length; ++i) {
        func(this[i]);
    }
}