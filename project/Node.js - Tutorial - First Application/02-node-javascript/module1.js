function myFunction() {
    console.log('Function was created');
}

var myString = 'string';

module.exports.myFunction = myFunction; // every file have module object
module.exports.myString = myString;