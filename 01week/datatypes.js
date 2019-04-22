// Write a JavaScript program to display the current day and time.
var today = new Date();
console.log(today);
document.getElementById('date').innerHTML = (today);

// Write a JavaScript program to convert a number to a string.
var num = 5;
var n = num.toString();
console.log(n);
document.getElementById('string').innerHTML = (n);

// Write a JavaScript program to convert a string to the number.
var string = "1000";
var integer = parseInt(string, 10);
console.log(integer);
document.getElementById('number').innerHTML = (integer);

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean
var a = "happy"
if (a !== undefined) {
    console.log("'a' is defined, so 'a' is truthy");
} else {
    console.log(" 'a' isn't truthy");
}
document.getElementById('boolean').innerHTML = (`${a} is defined, so ${a} is truthy`);


// Null
console.log(typeof null);
document.getElementById('null').innerHTML = (typeof null);

// Undefined
console.log(undefined);
document.getElementById('undefined').innerHTML = (undefined);

// Number
console.log(typeof 4);
document.getElementById('integer').innerHTML = (typeof 4);

// NaN
console.log(0 / 0);
document.getElementById('nan').innerHTML = (0/0);

// String
console.log(typeof 'coding');
document.getElementById('quote').innerHTML = (typeof 'coding');

// Write a JavaScript program that adds 2 numbers together.
var scoreOne = 5;
var scoreTwo = 10;
var total = (scoreOne + scoreTwo);

console.log(total);
document.getElementById('add').innerHTML = (total);

// Write a JavaScript program that runs only when 2 things are true.
var stringOne = "Yes";
var stringTwo = "Yes";
if (stringOne === stringTwo) {
    console.log("They are both true");
}
document.getElementById('twoTrue').innerHTML = ("They are both true");

// Write a JavaScript program that runs when 1 of 2 things are true.
var a = 10;
var b = 10;
if (a === b) {
    console.log("'a' and 'b' are true");
} else {
    console.log("'a' isn't true");
}
document.getElementById('oneTrue').innerHTML = (`${a} isn't true`);

// Write a JavaScript program that runs when both things are not true.
var a = "off";
var b = "on";
var compare = (a === b)
if (compare === false) {
    console.log("'a' and 'b' are false");
}
document.getElementById('false').innerHTML = (`${a} and ${b} are false`);

