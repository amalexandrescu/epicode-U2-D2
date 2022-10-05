// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

let isMale = true;
let gender = isMale ? "male" : "female";
console.log(gender);

/*
  An alternative solution:
  let isMale = "male";
  let gender = isMale === "male" ? "male" : "female";
*/

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

let num1 = 5;
let num2 = 3;
if (num1 === 8 || num2 === 8 || num1 + num2 === 8 || num1 - num2 === 8)
  console.log("At least one condition is true");
else console.log("None of the condition is true");

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

let string1 = "Epicode";
let string2 = "School";
let concatString = string1 + string2;
console.log(concatString);

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

let number1 = 13;
let number2 = -6;
let number3 = -1;

console.log("The number before sorting them: ", number1, number2, number3);

console.log("The numbers after sorting them: ");
if (number1 <= number2 && number1 <= number3) {
  if (number2 <= number3) {
    console.log(number1, number2, number3);
  } else if (number2 > number3) {
    console.log(number1, number3, number2);
  }
} else if (number2 <= number1 && number2 <= number3) {
  if (number1 <= number3) {
    console.log(number2, number1, number3);
  } else if (number1 > number3) {
    console.log(number2, number3, number1);
  }
} else if (number3 <= number1 && number3 <= number2) {
  if (number1 <= number2) {
    console.log(number3, number1, number2);
  } else if (number1 > number2) {
    console.log(number3, number2, number1);
  }
}

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

let a = 10;
let b = 3;
let average = (a + b) / 2;
console.log(average);

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

let firstString = "Alexandra";
let secondString = "Alexandrescu";

if (firstString.length > secondString.length) {
  console.log("First string is longer");
} else if (firstString.length < secondString.length) {
  console.log("Second string is longer");
} else {
  console.log("The strings have equal length.");
}

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

let numVar = 10.5;
console.log(Number.isInteger(numVar));

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

let percentage = 20;
let givenNumber = 400;
let result = (givenNumber * percentage) / 100;
console.log(result);

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

let evenNumber = 4;
let oddNumber = 7;
if (evenNumber % 2 === 0) console.log(evenNumber, "is an even number");
else console.log(evenNumber, "is not an even number");

if (oddNumber % 2 === 1) console.log(oddNumber, "is an odd number");
else console.log(oddNumber, "is not an odd number");
