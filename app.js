// -------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------
// 26. Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]

function maps(x) {
  return x.map((i) => 2 * i);
}

// -------------------------------------------------------------------------------------------------------------------------------------
// 25. Implement a function which convert the given boolean value into its string representation.
// Note: Only valid inputs will be given.

function booleanToString(b) {
  //your code here
  return b.toString();
}
// -------------------------------------------------------------------------------------------------------------------------------------

// 24. Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

function abbrevName(name) {
  let nameArr = name.split(" ");
  let initialOne = nameArr[0].slice(0, 1);
  let initialTwo = nameArr[1].slice(0, 1);
  return initialOne.toUpperCase() + "." + initialTwo.toUpperCase();
}

// -------------------------------------------------------------------------------------------------------------------------------------
// 23. Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

function digitize(n) {
  //code here
  return Array.from(String(n), Number).reverse();
}

// 22.
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
// [Make sure you type the exact thing I wrote or the program may not execute properly]

function greet(name) {
  //your code here
  return `Hello, ${name} how are you doing today?`;
}

// -------------------------------------------------------------------------------------------------------------------------------------

// 21. Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2) {
  // Code
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
  }
}

// -------------------------------------------------------------------------------------------------------------------------------------
// 20. Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

var stringToNumber = function (str) {
  // put your code here
  let num = Number(str);
  return num;
};

// -------------------------------------------------------------------------------------------------------------------------------------

// 19. Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year) {
  // Finish this :)
  let thisCentury = 0;
  if (year % 100 === 0) {
    thisCentury = year / 100;
  } else {
    thisCentury = Math.ceil(year / 100);
  }
  return thisCentury;
}

// -------------------------------------------------------------------------------------------------------------------------------------
// 18. Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

function litres(time) {
  return Math.floor(time * 0.5);
}

// -------------------------------------------------------------------------------------------------------------------------------------

// 17. Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let count = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      count += 1;
    }
  }
  return count;
}

// -------------------------------------------------------------------------------------------------------------------------------------

// 16. Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
  return x.split(" ").join("");
}

// -------------------------------------------------------------------------------------------------------------------------------------
// 15. Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i] * numbers[i];
  }
  return sum;
}

// -------------------------------------------------------------------------------------------------------------------------------------
// 14. Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

// var summation = function (num) {
//   // Code here
//   let sum = 0;
//   for (let i = 0; i <= num; i++) {
//     sum += i;
//   }
//   return sum;
// };

const summation = (n) => (n * (n + 1)) / 2;

// // -------------------------------------------------------------------------------------------------------------------------------------
// 13. Given an array of integers your solution should find the smallest integer.
// For example:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smallest = args[0];
    for (let i = 0; i <= args.length; i++) {
      if (args[i] < smallest) {
        smallest = args[i];
      }
    }
    return smallest;
  }
}

// -------------------------------------------------------------------------------------------------------------------------------------

// 12.Write a function called repeatStr which repeats the given string string exactly n times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
function repeatStr(n, s) {
  let str = "";
  for (k = 0; k < n; k++) {
    str = `${str}${s}`;
  }
  return str;
}
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
