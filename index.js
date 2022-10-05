/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/*
The main data types in JS are:
  numbers - a data type which can hold a number between -2^53 and 2^53; it can be an
            integer number (without decimals - ex. 10) or a float number (with decimals
            - ex. 10.5)
  strings - a data type which can hold a text; it can be an empty string too ("")
  booleans - data type which hold the value true or false
  undefined - data type which has been declared but hasn't been assigned any value
  null - data type which empties the assigned value of a variable
  NaN - data type which is considered a number, but doesn't behave like this.
  BigInt
  Symbol
*/

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* 
  A variable is like a container which holds a given value. If you just initialize the
  variable, without assigning it any value, it is "undefined". You have to assign your
  variable a certain value in order to make use of it without any errors. 
*/

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

let firstNumber = 12;
let secondNumber = 20;
let sum = firstNumber + secondNumber;
console.log("The result of the sum is: ", sum);

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

/*
  let x = 12;
*/

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

let name = "John Doe";

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

/* 
  let x = 12;
  let result = 12 - x;
*/

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

let name1 = "john";
let name2 = "John";

if (name1 === name2) {
  console.log("They are equal");
} else {
  console.log("They are not equal");
}

if (name1.toLowerCase() === name2.toLowerCase())
  console.log("Now thay are equal");

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

let x = 7;
console.log("\nThe literal value of x is: seven");

//OR an alternative way

let arrayLiteral = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

for (let i = 0; i < 10; i++) {
  if (x === i) {
    console.log(arrayLiteral[i]);
  }
}

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

//I want to assign to ternaryVar a value of true if the age is correct and a value of false
//if the age is not correct.
let age = 26;
let birthYear = 1996;
let currentYear = 2022;
let ternaryVar = currentYear - age === birthYear ? true : false;
console.log("\n", ternaryVar);
