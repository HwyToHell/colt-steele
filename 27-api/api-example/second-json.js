var request = (require)('request');

console.log("fake data from jsonplaceholder");

console.log("full data set");
request("https://jsonplaceholder.typicode.com/users", function(error, response, body) {
    // locus freezes at the following line for debugging
    // eval(require('locus'));
    if(!error && response.statusCode == 200) {
        var parsedData = JSON.parse(body);
        console.log(parsedData[0].name + ' lives in ' + parsedData[0].address.city);
    } else {
        console.error('error:', error);
        console.log('statusCode:', response.statusCode);
    }
});

console.log("first record");
request("https://jsonplaceholder.typicode.com/users/1", function(error, response, body) {
    // locus freezes at the following line for debugging
    // eval(require('locus'));
    if(!error && response.statusCode == 200) {
        var parsedData = JSON.parse(body);
        console.log(`${parsedData.name} lives in ${parsedData.address.city}`);
    } else {
        console.error('error:', error);
        console.log('statusCode:', response.statusCode);
    }
});