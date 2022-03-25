// -------------------------------------------------------------------------------------------------------------------------------------

// 11. In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// function makeNegative(num) {
//   // Code?
//   return num <= 0 ? num : num * -1;
// }

function makeNegative(num) {
  return -Math.abs(num);
}

// -------------------------------------------------------------------------------------------------------------------------------------

// 10. It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
function removeChar(str) {
  //You got this!
  let arr = [...str];
  arr.shift();
  arr.pop();
  return arr.join("");
}

// -------------------------------------------------------------------------------------------------------------------------------------

// 9. Sum of positives
// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let sum = 0;
  for (i = 0; i <= arr.length; i++) {
    if (arr[i] >= 0) {
      sum += arr[i];
    } else {
      continue;
    }
  }
  return sum;
}

// -------------------------------------------------------------------------------------------------------------------------------------

// 8.Convert boolean values to strings 'Yes' or 'No'.
// Write a function that returns 'Yes' if boolean value if true and 'No' if boolean value is false
function boolToWord(bool) {
  //...
  if (bool) {
    return "Yes";
  } else {
    return "No";
  }
}

// -------------------------------------------------------------------------------------------------------------------------------------

// 7.Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// function solution(str) {
//   let arr = [...str];
//   let revArr = [];

//   revArr = arr.reverse();
//   return revArr.join("");
// }
function solution(str) {
  return str.split("").reverse().join("");
}

// -------------------------------------------------------------------------------------------------------------------------------------

// 6. Given a non-empty array of integers, return the result of multiplying the values together in order.
// Example:[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// function grow(x) {
//   let result = 1;
//   for (i = 0; i < x.length; i++) {
//     result *= x[i];
//   }
//   return result;
// }

const grow = (x) => x.reduce((prv, cur) => prv * cur);

// -------------------------------------------------------------------------------------------------------------------------------------

// 5.Code as fast as you can! You need to double the integer and return it.

function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i * 2;
}

// -------------------------------------------------------------------------------------------------------------------------------------

// 4. Make a simple function called greet that returns the most-famous "hello world!".
// Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of? What is a "hello world" solution you would want to show your friends?

// Write a function "greet" that returns "hello world!"
// function greet(){
//   return `hello world!`;
// }

const greet = () => {
  return `hello world!`;
};

// -------------------------------------------------------------------------------------------------------------------------------------

// 3. Convert a Number to a String!
// 134 -> '134'

function numberToString(num) {
  // Return a string of the number here!
  return num.toString();
}

// -------------------------------------------------------------------------------------------------------------------------------------

// 2. Very simple, given an integer or a floating-point number, find its opposite.
// Examples:
// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
  //your code here
  if (number) {
    return number * -1;
  } else {
    return 0;
  }
}

// -------------------------------------------------------------------------------------------------------------------------------------

// 1. Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even";
}
