// -------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------
// 46. After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
  // Your solution here
  let rent = d * 40;
  if (d >= 7) {
    return rent - 50;
  } else if (d >= 3) {
    return rent - 20;
  } else {
    return rent;
  }
}
// -------------------------------------------------------------------------------------------------------------------------------------

// 45. There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let sum = yourPoints + classPoints.reduce((x, y) => x + y, 0);
  let avg = sum / (classPoints.length + 1);
  return (yourPoints >= avg) ? true : false;
}


// -------------------------------------------------------------------------------------------------------------------------------------

// 44. This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.



function simpleMultiplication(number) {
  // your code........
  return (number % 2 === 0) ? number * 8 : number * 9;
}


// -------------------------------------------------------------------------------------------------------------------------------------

// 43. I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.



function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((x, y) => x + y, 0) + arr2.reduce((x, y) => x + y, 0);
}
// -------------------------------------------------------------------------------------------------------------------------------------

// 42. You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog, NASM and COBOL) if it is possible and false (0 in Prolog, NASM and COBOL) if not. The input values are always positive.



const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  return (distanceToPump > mpg * fuelLeft) ? false : true;
};
// -------------------------------------------------------------------------------------------------------------------------------------
// 41. Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.

// Sum Numbers
function sum(numbers) {
  "use strict";

  return (numbers.length != 0) ? numbers.reduce((x, y) => x + y, 0) : 0;

};

// -------------------------------------------------------------------------------------------------------------------------------------

// 40. Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
  // Implement me
  return (name[0] === 'R' || name[0] === 'r') ? `${name} plays banjo` : `${name} does not play banjo`;
}

// -------------------------------------------------------------------------------------------------------------------------------------

// 39. Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't
function lovefunc(flower1, flower2) {
  // moment of truth
  return ((flower1 % 2 === 0 && flower2 % 2 != 0) || (flower2 % 2 === 0 && flower1 % 2 != 0)) ? true : false;
}

// -------------------------------------------------------------------------------------------------------------------------------------


// 38. Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0
  } else return n * m;
}




// -------------------------------------------------------------------------------------------------------------------------------------

// 37. Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
  let arr = [];
  if (n) {
    for (n; n > 0; n--) {
      arr.push(n);
    }
  }
  return arr;
};

// -------------------------------------------------------------------------------------------------------------------------------------
// 36. Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
  // your code here
  if (!array.length) return 0;
  else {
    let sum = array.reduce((x, y) => x + y, 0);
    return sum / array.length;
  }
}



// -------------------------------------------------------------------------------------------------------------------------------------

// 35. Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {

  if (weight / (height * height) <= 18.5) {
    return 'Underweight'
  } else if (weight / (height * height) <= 25) {
    return 'Normal'
  } else if (weight / (height * height) <= 30) {
    return 'Overweight'
  } else if (weight / (height * height) > 30) {
    return 'Obese'
  }
}

// 34. A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise:)

function hero(bullets, dragons) {
  //Get Coding!
  return dragons * 2 > bullets ? false : true;
}

// -------------------------------------------------------------------------------------------------------------------------------------

// 33. Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x) {
  let a = Array.from(x, Number);

  for (let i = 0; i < a.length; i++) {
    if (Number(a[i]) < 5) {
      a[i] = 0;
    } else {
      a[i] = 1;
    }
  }
  return a.join("");
}

// -------------------------------------------------------------------------------------------------------------------------------------

// 32. Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
  // Code here
  return str.toUpperCase();
}

// -------------------------------------------------------------------------------------------------------------------------------------

// 31. Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0) return [];

  let positive = 0;
  let negative = 0;

  for (let i = 0, l = input.length; i < l; ++i) {
    if (input[i] > 0) ++positive;
    else negative += input[i];
  }

  return [positive, negative];
}

// -------------------------------------------------------------------------------------------------------------------------------------
// 30. Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

function past(h, m, s) {
  //#Happy Coding! ^_^
  return (h * 3600 + m * 60 + s) * 1000;
}

// -------------------------------------------------------------------------------------------------------------------------------------
// 29. Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

function invert(array) {
  return array.map((x) => -x);
}

// -------------------------------------------------------------------------------------------------------------------------------------
// 28. Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
// Can you help her?

function greet(name) {
  //   checks if name is Johny and greets
  if (name === "Johnny") {
    return "Hello, my love!";
  }
  //   general greeting if name isn't 'Johny'
  return "Hello, " + name + "!";
}

// -------------------------------------------------------------------------------------------------------------------------------------
// 27. Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5" (in COBOL "found the needle at position 6")

function findNeedle(haystack) {
  // testing the presence of 'needle'
  if (haystack.includes("needle")) {
    // since 'needle' is present, reporting its index
    return `found the needle at position ${haystack.indexOf("needle")}`;
  }
}

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
