// -------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------
// 85. Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"
function peopleWithAgeDrink(old) {
  if(old>=21){
    return 'drink whisky';
  }else if(old>=18 && old <21){
    return 'drink beer';
  }else if(old>=14 && old< 18){
    return 'drink coke';
  }else if(old<14){
    return 'drink toddy';
  }
};

// -------------------------------------------------------------------------------------------------------------------------------------
// 84. Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// Example:
// move(3, 6) should equal 15
function move(position, roll) {
  // return the new position
  return position + roll + roll;
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 83. Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".
function hoopCount(n) {
  //your code goes here
  if (n < 10) {
    return 'Keep at it until you get it';
  } else if (n >= 10) {
    return 'Great, now move on to tricks';
  }
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 82. Unfinished Loop - Bug Fixing #1
function createArray(number) {
  let newArray = [];

  for (let counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }

  return newArray;
}


// -------------------------------------------------------------------------------------------------------------------------------------
// 81.Now you have to write a function that takes an argument and returns the square of it.
// Write the "square"-function here
const square = num => num * num;

// -------------------------------------------------------------------------------------------------------------------------------------
// 80. When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.
function switchItUp(number) {
  //Write your own Code!
  switch (number) {
    case 0: return 'Zero';
      break;
    case 1: return 'One';
      break;
    case 2: return 'Two';
      break;
    case 3: return 'Three';
      break;
    case 4: return 'Four';
      break;
    case 5: return 'Five';
      break;
    case 6: return 'Six';
      break;
    case 7: return 'Seven';
      break;
    case 8: return 'Eight';
      break;
    case 9: return 'Nine';
      break;
  }
}

// -------------------------------------------------------------------------------------------------------------------------------------
// 79.All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
  //your function here
  let beastArr = beast.split('');
  let dishArr = dish.split('');
  return (beastArr[0] === dishArr[0] && beastArr[beastArr.length - 1] === dishArr[dishArr.length - 1]) ? true : false;
}

// -------------------------------------------------------------------------------------------------------------------------------------
// 78. You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
function getAge(inputString) {
  // return the girl's correct age as an integer. Happy coding :)
  let answer = inputString.split('');
  return Number(answer[0]);
}

// -------------------------------------------------------------------------------------------------------------------------------------
// 77. Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).


function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
  let difference = dadYearsOld - sonYearsOld;
  if (dadYearsOld === 2 * sonYearsOld) {
    return 0;
  }
  for (let i = 0; i <= difference; i++) {
    if ((dadYearsOld - i) === 2 * (sonYearsOld)) {
      return i;
    } else if (i === difference) {
      for (let j = 0; j <= 100; j++) {
        if ((dadYearsOld + j) === 2 * (sonYearsOld)) {
          return j;
        }
      }
    }
  }
}

//function twiceAsOld(dadYearsOld, sonYearsOld) {
//  return Math.abs(dadYearsOld - 2 * sonYearsOld);
//}
// -------------------------------------------------------------------------------------------------------------------------------------
// 76. Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade(s1, s2, s3) {
  // Code here
  let avg = (s1 + s2 + s3) / 3;
  if (avg < 60) {
    return 'F';
  } else if (avg >= 60 && avg < 70) {
    return 'D';
  } else if (avg >= 70 && avg < 80) {
    return 'C';
  } else if (avg >= 80 && avg < 90) {
    return 'B';
  } else if (avg >= 90 && avg <= 100) {
    return 'A';
  }
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 75. The Story:
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// Usage Examples:
// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting
function enough(cap, on, wait) {
  // your code here
  if (wait <= cap - on) return 0;
  else return (wait - (cap - on));
}

// -------------------------------------------------------------------------------------------------------------------------------------

// 74. Messi goals function
//   Messi is a soccer player with goals in three leagues:

//   LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

//   Note: the input will always be valid.

// For example:

// 5, 10, 2  -- > 17

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  // code goes here
  return laLigaGoals + championsLeagueGoals + copaDelReyGoals;
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 73. Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!
function doubleChar(str) {
  // Your code here
  let first = str.split('');
  let output = [];
  for (let i = 0; i <= first.length; i++) {
    output.push(first[i]);
    output.push(first[i])
  }
  return output.join('');
}

// -------------------------------------------------------------------------------------------------------------------------------------
// 72.
// Competition	Goals
// La Liga	43
// Champions League	10
// Copa del Rey	5
// Task
// Create these three variables and store the appropriate values using the table above:
// laLigaGoals
// championsLeagueGoals
// copaDelReyGoals
// Create a fourth variable named totalGoals that stores the sum of all of Messi's goals for this year.
let laLigaGoals = 43;
let championsLeagueGoals = 10
let copaDelReyGoals = 5;

let totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;

// -------------------------------------------------------------------------------------------------------------------------------------
// 71. The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
function cockroachSpeed(s) {
  //Good Luck!
  return Math.floor(s * 100000 / 3600);
}


// -------------------------------------------------------------------------------------------------------------------------------------
// 70. Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
function sumArray(array) {
  if (array == null) {
    return 0;
  } else if (array.length <= 2) {
    return 0;
  } else {
    let max = Math.max(...array);
    console.log(max)
    let min = Math.min(...array);
    console.log(min)
    let total = array.reduce((acc, cur) => acc + cur, 0);
    console.log(total)
    console.log(total - max - min)
    return total - max - min;
  }
}


// -------------------------------------------------------------------------------------------------------------------------------------

// 69. Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
function removeExclamationMarks(s) {
  return s.split('!').join('');
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 68. Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.
function sumMix(x) {
  return x.reduce((a, b) => a + Number(b), 0)
}


// -------------------------------------------------------------------------------------------------------------------------------------
// 67. You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, update_light('green') should return 'yellow'.

// Note: Use "" instead of '' in C++.


function updateLight(current) {

  if (current === 'green') {
    return 'yellow'
  } else if (current === 'yellow') {
    return 'red'
  } else if (current === 'red') {
    return 'green'
  }

}
// -------------------------------------------------------------------------------------------------------------------------------------
// 66. Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
  if (0 < month && month < 4) {
    return 1;
  } else if (3 < month && month < 7) {
    return 2;
  } else if (6 < month && month < 10) {
    return 3;
  } else {
    return 4;
  }
}

// -------------------------------------------------------------------------------------------------------------------------------------
// 65. Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

const rps = (p1, p2) => {
  if ((p1 === 'scissors' && p2 === 'paper') || (p1 === 'rock' && p2 === 'scissors') || (p1 === 'paper' && p2 === 'rock')) {
    return "Player 1 won!";
  } else if ((p2 === 'scissors' && p1 === 'paper') || (p2 === 'rock' && p1 === 'scissors') || (p2 === 'paper' && p1 === 'rock')) {
    return "Player 2 won!";
  } else {
    return "Draw!";
  }
};
// -------------------------------------------------------------------------------------------------------------------------------------


// 64. Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

// Examples:

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

function countBy(x, n) {
  let z = [];
  for (let i = 1; i < n + 1; i++) {
    z.push(x * i)
  }
  return z;
}

// -------------------------------------------------------------------------------------------------------------------------------------

// 63. If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num) {
  //your code here
  let str = "";
  for (let i = 1; i < num + 1; i++) {
    str += `${i} sheep...`
  }
  return str;
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 62. Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
  // your code here
  let points = 0;
  games.map(eachResult => {
    let curScore = eachResult.split(':')
    if (curScore[0] > curScore[1]) {
      points += 3;
    } else if (curScore[0] === curScore[1]) {
      points += 1;
    }

  })
  return points;
}

// -------------------------------------------------------------------------------------------------------------------------------------
// 61. You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example:

// monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// monkeyCount(1) // --> [1]
function monkeyCount(n) {
  // your code here
  let arr = [];
  for (let i = 1; i < n + 1; i++) {
    arr.push(i);
  }
  return arr;
}

// -------------------------------------------------------------------------------------------------------------------------------------

// 60. The function is not returning the correct values. Can you figure out why?

// Example (Input --> Output ):

// 3 --> "Earth"
function getPlanetName(id) {
  var name;
  switch (id) {
    case 1:
      name = 'Mercury'
      break;
    case 2:
      name = 'Venus'
      break;
    case 3:
      name = 'Earth'
      break;
    case 4:
      name = 'Mars'
      break;
    case 5:
      name = 'Jupiter'
      break;
    case 6:
      name = 'Saturn'
      break;
    case 7:
      name = 'Uranus'
      break;
    case 8:
      name = 'Neptune'
      break;
  }

  return name;
}

// -------------------------------------------------------------------------------------------------------------------------------------

// 59. Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

function setAlarm(employed, vacation) {
  return (employed && !vacation) ? true : false;
}

// -------------------------------------------------------------------------------------------------------------------------------------


// 58. Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

// -------------------------------------------------------------------------------------------------------------------------------------

// 57. You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle


function otherAngle(a, b) {
  return 180 - a - b;
}

// -------------------------------------------------------------------------------------------------------------------------------------
// 56. Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great
function smash(words) {
  return words.join(' ');
};
// -------------------------------------------------------------------------------------------------------------------------------------
// 55. Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

// A few cases:


// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false

// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true

// (4, 1, 4)     ->  true
(15, -5, 3) -> true

function isDivideBy(number, a, b) {
  // good luck
  return (number % a === 0 && number % b === 0) ? true : false;
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 54. You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// area_or_perimeter(6, 10) --> 32
// area_or_perimeter(3, 3) --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

const areaOrPerimeter = function (l, w) {
  return (l === w) ? l * w : 2 * (l + w)
};
// -------------------------------------------------------------------------------------------------------------------------------------
// 53. Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'


function greet(name, owner) {
  // easily solvable using a ternary operator
  return name === owner ? `Hello boss` : `Hello guest`;
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 52. Write a function to split a string and convert it into an array of words.

// Examples (Input -> Output):
// * "Robin Singh" ==> ["Robin", "Singh"]

// * "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
function stringToArray(string) {

  return string.split(' ');

}
// -------------------------------------------------------------------------------------------------------------------------------------
// 51. Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Notes
// You may consider that there will not be any empty arrays/vectors.


var min = function (list) {
  let min = list[0];
  list.forEach(item => {
    if (item < min) {
      min = item;
    }
  })
  return min;
}

var max = function (list) {
  let max = list[0];
  list.forEach(item => {
    if (item > max) {
      max = item;
    }
  })
  return max;
}

// -------------------------------------------------------------------------------------------------------------------------------------
// 50. You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

function check(a, x) {
  // will use includes array method
  return (a.includes(x) || a.includes(x.toString())) ? true : false;

}
// -------------------------------------------------------------------------------------------------------------------------------------
// 49. Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  return dna.split('T').join('U')
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 48.Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  //   checking for empty array or null
  let count = 0;
  let sum = 0;
  if (input == null || input.length === 0) {
    return [];
  } else {
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        count++;
      } else if (input[i] < 0) {
        sum = sum + input[i];
      } else if (input[i] === 0) {
        // nothing
      }

    }
    return [count, sum]
  }

}

// -------------------------------------------------------------------------------------------------------------------------------------

// 47.  Write here your multiply-function

const multiply = (numOne, numTwo) => {
  return numOne * numTwo;
}

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
