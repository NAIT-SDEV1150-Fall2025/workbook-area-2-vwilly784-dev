console.log('Lesson 03 starter loaded');

// Instructor TODO: 
// 1. Declare variables using var, let, const
// 2. Log their types with console.log(typeof …)
// 3. Try built-in functions: alert(), prompt(), parseInt(), toString()
// 4. Manipulate values and observe results in the console

// Student TODO: 
// Prompt the user for their name and age
// Log a greeting message using the provided name and age
// Semi colons indicate the end of a line in javascript. 
const greeting = "Hello, World!"; //This is string
let count = 3.0; //This is a float
var name = "victoria"; //this is a boolean, in that it's in lower case
console.log(name, count, greeting);
var n=1;
console.log(n); //the process of declaring variable with 'var' is called 'hoisting' and it allows you to use the variable before it's declared.
console.log(typeof 2);
//alert("Welcome to the Demo!");
const userName = prompt('Enter your name:');
const continueDemo = confirm(`Hi ${userName} , shall we conntinue the demo?`);//back tics need to be used here instead of regular quotes
const strNumber = '42';
const parsedNumber = parseInt(strNumber,10);
console.log(`Parsed "${strNumber}" to number: ${parsedNumber}`);
const actualString = parsedNumber.toString();
console.log(actualString);


