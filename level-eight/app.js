// -------------------------------------------------------------------------------------------------------------------------------------



// -------------------------------------------------------------------------------------------------------------------------------------
// 193. You have an award-winning garden and every day the plants need exactly 40mm of water. You created a great piece of JavaScript to calculate the amount of water your plants will need when you have taken into consideration the amount of rain water that is forecast for the day. Your jealous neighbour hacked your computer and filled your code with bugs.

// Your task is to debug the code before your plants die!



function rainAmount(mm) {
  if (mm < 40) {
    return `You need to give your plant ${40 - mm}mm of water`
  }
  else {
    return "Your plant has had more than enough water for today!"
  }
}
// -------------------------------------------------------------------------------------------------------------------------------------


// 192. You task is to implement an simple interpreter for the notorious esoteric language HQ9+ that will work for a single character input:

// If the input is 'H', return 'Hello World!'
// If the input is 'Q', return the input
// If the input is '9', return the full lyrics of 99 Bottles of Beer. It should be formatted like this:
// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.
// 98 bottles of beer on the wall, 98 bottles of beer.
// Take one down and pass it around, 97 bottles of beer on the wall.
// 97 bottles of beer on the wall, 97 bottles of beer.
// Take one down and pass it around, 96 bottles of beer on the wall.
// ...
// ...
// ...
// 2 bottles of beer on the wall, 2 bottles of beer.
// Take one down and pass it around, 1 bottle of beer on the wall.
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take one down and pass it around, no more bottles of beer on the wall.
// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.


function HQ9(code) {
  //finish me
  let lyrics = `99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.
98 bottles of beer on the wall, 98 bottles of beer.
Take one down and pass it around, 97 bottles of beer on the wall.
97 bottles of beer on the wall, 97 bottles of beer.
Take one down and pass it around, 96 bottles of beer on the wall.
96 bottles of beer on the wall, 96 bottles of beer.
Take one down and pass it around, 95 bottles of beer on the wall.
95 bottles of beer on the wall, 95 bottles of beer.
Take one down and pass it around, 94 bottles of beer on the wall.
94 bottles of beer on the wall, 94 bottles of beer.
Take one down and pass it around, 93 bottles of beer on the wall.
93 bottles of beer on the wall, 93 bottles of beer.
Take one down and pass it around, 92 bottles of beer on the wall.
92 bottles of beer on the wall, 92 bottles of beer.
Take one down and pass it around, 91 bottles of beer on the wall.
91 bottles of beer on the wall, 91 bottles of beer.
Take one down and pass it around, 90 bottles of beer on the wall.
90 bottles of beer on the wall, 90 bottles of beer.
Take one down and pass it around, 89 bottles of beer on the wall.
89 bottles of beer on the wall, 89 bottles of beer.
Take one down and pass it around, 88 bottles of beer on the wall.
88 bottles of beer on the wall, 88 bottles of beer.
Take one down and pass it around, 87 bottles of beer on the wall.
87 bottles of beer on the wall, 87 bottles of beer.
Take one down and pass it around, 86 bottles of beer on the wall.
86 bottles of beer on the wall, 86 bottles of beer.
Take one down and pass it around, 85 bottles of beer on the wall.
85 bottles of beer on the wall, 85 bottles of beer.
Take one down and pass it around, 84 bottles of beer on the wall.
84 bottles of beer on the wall, 84 bottles of beer.
Take one down and pass it around, 83 bottles of beer on the wall.
83 bottles of beer on the wall, 83 bottles of beer.
Take one down and pass it around, 82 bottles of beer on the wall.
82 bottles of beer on the wall, 82 bottles of beer.
Take one down and pass it around, 81 bottles of beer on the wall.
81 bottles of beer on the wall, 81 bottles of beer.
Take one down and pass it around, 80 bottles of beer on the wall.
80 bottles of beer on the wall, 80 bottles of beer.
Take one down and pass it around, 79 bottles of beer on the wall.
79 bottles of beer on the wall, 79 bottles of beer.
Take one down and pass it around, 78 bottles of beer on the wall.
78 bottles of beer on the wall, 78 bottles of beer.
Take one down and pass it around, 77 bottles of beer on the wall.
77 bottles of beer on the wall, 77 bottles of beer.
Take one down and pass it around, 76 bottles of beer on the wall.
76 bottles of beer on the wall, 76 bottles of beer.
Take one down and pass it around, 75 bottles of beer on the wall.
75 bottles of beer on the wall, 75 bottles of beer.
Take one down and pass it around, 74 bottles of beer on the wall.
74 bottles of beer on the wall, 74 bottles of beer.
Take one down and pass it around, 73 bottles of beer on the wall.
73 bottles of beer on the wall, 73 bottles of beer.
Take one down and pass it around, 72 bottles of beer on the wall.
72 bottles of beer on the wall, 72 bottles of beer.
Take one down and pass it around, 71 bottles of beer on the wall.
71 bottles of beer on the wall, 71 bottles of beer.
Take one down and pass it around, 70 bottles of beer on the wall.
70 bottles of beer on the wall, 70 bottles of beer.
Take one down and pass it around, 69 bottles of beer on the wall.
69 bottles of beer on the wall, 69 bottles of beer.
Take one down and pass it around, 68 bottles of beer on the wall.
68 bottles of beer on the wall, 68 bottles of beer.
Take one down and pass it around, 67 bottles of beer on the wall.
67 bottles of beer on the wall, 67 bottles of beer.
Take one down and pass it around, 66 bottles of beer on the wall.
66 bottles of beer on the wall, 66 bottles of beer.
Take one down and pass it around, 65 bottles of beer on the wall.
65 bottles of beer on the wall, 65 bottles of beer.
Take one down and pass it around, 64 bottles of beer on the wall.
64 bottles of beer on the wall, 64 bottles of beer.
Take one down and pass it around, 63 bottles of beer on the wall.
63 bottles of beer on the wall, 63 bottles of beer.
Take one down and pass it around, 62 bottles of beer on the wall.
62 bottles of beer on the wall, 62 bottles of beer.
Take one down and pass it around, 61 bottles of beer on the wall.
61 bottles of beer on the wall, 61 bottles of beer.
Take one down and pass it around, 60 bottles of beer on the wall.
60 bottles of beer on the wall, 60 bottles of beer.
Take one down and pass it around, 59 bottles of beer on the wall.
59 bottles of beer on the wall, 59 bottles of beer.
Take one down and pass it around, 58 bottles of beer on the wall.
58 bottles of beer on the wall, 58 bottles of beer.
Take one down and pass it around, 57 bottles of beer on the wall.
57 bottles of beer on the wall, 57 bottles of beer.
Take one down and pass it around, 56 bottles of beer on the wall.
56 bottles of beer on the wall, 56 bottles of beer.
Take one down and pass it around, 55 bottles of beer on the wall.
55 bottles of beer on the wall, 55 bottles of beer.
Take one down and pass it around, 54 bottles of beer on the wall.
54 bottles of beer on the wall, 54 bottles of beer.
Take one down and pass it around, 53 bottles of beer on the wall.
53 bottles of beer on the wall, 53 bottles of beer.
Take one down and pass it around, 52 bottles of beer on the wall.
52 bottles of beer on the wall, 52 bottles of beer.
Take one down and pass it around, 51 bottles of beer on the wall.
51 bottles of beer on the wall, 51 bottles of beer.
Take one down and pass it around, 50 bottles of beer on the wall.
50 bottles of beer on the wall, 50 bottles of beer.
Take one down and pass it around, 49 bottles of beer on the wall.
49 bottles of beer on the wall, 49 bottles of beer.
Take one down and pass it around, 48 bottles of beer on the wall.
48 bottles of beer on the wall, 48 bottles of beer.
Take one down and pass it around, 47 bottles of beer on the wall.
47 bottles of beer on the wall, 47 bottles of beer.
Take one down and pass it around, 46 bottles of beer on the wall.
46 bottles of beer on the wall, 46 bottles of beer.
Take one down and pass it around, 45 bottles of beer on the wall.
45 bottles of beer on the wall, 45 bottles of beer.
Take one down and pass it around, 44 bottles of beer on the wall.
44 bottles of beer on the wall, 44 bottles of beer.
Take one down and pass it around, 43 bottles of beer on the wall.
43 bottles of beer on the wall, 43 bottles of beer.
Take one down and pass it around, 42 bottles of beer on the wall.
42 bottles of beer on the wall, 42 bottles of beer.
Take one down and pass it around, 41 bottles of beer on the wall.
41 bottles of beer on the wall, 41 bottles of beer.
Take one down and pass it around, 40 bottles of beer on the wall.
40 bottles of beer on the wall, 40 bottles of beer.
Take one down and pass it around, 39 bottles of beer on the wall.
39 bottles of beer on the wall, 39 bottles of beer.
Take one down and pass it around, 38 bottles of beer on the wall.
38 bottles of beer on the wall, 38 bottles of beer.
Take one down and pass it around, 37 bottles of beer on the wall.
37 bottles of beer on the wall, 37 bottles of beer.
Take one down and pass it around, 36 bottles of beer on the wall.
36 bottles of beer on the wall, 36 bottles of beer.
Take one down and pass it around, 35 bottles of beer on the wall.
35 bottles of beer on the wall, 35 bottles of beer.
Take one down and pass it around, 34 bottles of beer on the wall.
34 bottles of beer on the wall, 34 bottles of beer.
Take one down and pass it around, 33 bottles of beer on the wall.
33 bottles of beer on the wall, 33 bottles of beer.
Take one down and pass it around, 32 bottles of beer on the wall.
32 bottles of beer on the wall, 32 bottles of beer.
Take one down and pass it around, 31 bottles of beer on the wall.
31 bottles of beer on the wall, 31 bottles of beer.
Take one down and pass it around, 30 bottles of beer on the wall.
30 bottles of beer on the wall, 30 bottles of beer.
Take one down and pass it around, 29 bottles of beer on the wall.
29 bottles of beer on the wall, 29 bottles of beer.
Take one down and pass it around, 28 bottles of beer on the wall.
28 bottles of beer on the wall, 28 bottles of beer.
Take one down and pass it around, 27 bottles of beer on the wall.
27 bottles of beer on the wall, 27 bottles of beer.
Take one down and pass it around, 26 bottles of beer on the wall.
26 bottles of beer on the wall, 26 bottles of beer.
Take one down and pass it around, 25 bottles of beer on the wall.
25 bottles of beer on the wall, 25 bottles of beer.
Take one down and pass it around, 24 bottles of beer on the wall.
24 bottles of beer on the wall, 24 bottles of beer.
Take one down and pass it around, 23 bottles of beer on the wall.
23 bottles of beer on the wall, 23 bottles of beer.
Take one down and pass it around, 22 bottles of beer on the wall.
22 bottles of beer on the wall, 22 bottles of beer.
Take one down and pass it around, 21 bottles of beer on the wall.
21 bottles of beer on the wall, 21 bottles of beer.
Take one down and pass it around, 20 bottles of beer on the wall.
20 bottles of beer on the wall, 20 bottles of beer.
Take one down and pass it around, 19 bottles of beer on the wall.
19 bottles of beer on the wall, 19 bottles of beer.
Take one down and pass it around, 18 bottles of beer on the wall.
18 bottles of beer on the wall, 18 bottles of beer.
Take one down and pass it around, 17 bottles of beer on the wall.
17 bottles of beer on the wall, 17 bottles of beer.
Take one down and pass it around, 16 bottles of beer on the wall.
16 bottles of beer on the wall, 16 bottles of beer.
Take one down and pass it around, 15 bottles of beer on the wall.
15 bottles of beer on the wall, 15 bottles of beer.
Take one down and pass it around, 14 bottles of beer on the wall.
14 bottles of beer on the wall, 14 bottles of beer.
Take one down and pass it around, 13 bottles of beer on the wall.
13 bottles of beer on the wall, 13 bottles of beer.
Take one down and pass it around, 12 bottles of beer on the wall.
12 bottles of beer on the wall, 12 bottles of beer.
Take one down and pass it around, 11 bottles of beer on the wall.
11 bottles of beer on the wall, 11 bottles of beer.
Take one down and pass it around, 10 bottles of beer on the wall.
10 bottles of beer on the wall, 10 bottles of beer.
Take one down and pass it around, 9 bottles of beer on the wall.
9 bottles of beer on the wall, 9 bottles of beer.
Take one down and pass it around, 8 bottles of beer on the wall.
8 bottles of beer on the wall, 8 bottles of beer.
Take one down and pass it around, 7 bottles of beer on the wall.
7 bottles of beer on the wall, 7 bottles of beer.
Take one down and pass it around, 6 bottles of beer on the wall.
6 bottles of beer on the wall, 6 bottles of beer.
Take one down and pass it around, 5 bottles of beer on the wall.
5 bottles of beer on the wall, 5 bottles of beer.
Take one down and pass it around, 4 bottles of beer on the wall.
4 bottles of beer on the wall, 4 bottles of beer.
Take one down and pass it around, 3 bottles of beer on the wall.
3 bottles of beer on the wall, 3 bottles of beer.
Take one down and pass it around, 2 bottles of beer on the wall.
2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.
1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.


  `




  if (code === 'H') return 'Hello World!';
  else if (code === 'Q') return code;
  else if (code === '9') return lyrics;
  else return undefined;
}







// -------------------------------------------------------------------------------------------------------------------------------------





// 191. Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

function trueOrFalse(val) {
  if (val) return `true`;
  else return `false`;
}


// -------------------------------------------------------------------------------------------------------------------------------------


// 190. You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

// Finally, return the padded string.

function padIt(str, n) {
  //coding here
  let i = 0
  while (i < n) {
    if (i % 2 === 0) {
      str = `*${str}`;
    } else if (i % 2 === 1) {
      str = `${str}*`;
    }
    i++;
  }
  return str;
}

// -------------------------------------------------------------------------------------------------------------------------------------
// 189. Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

function take(arr, n) {
  // Your code here
  if (n <= arr.length) {
    return arr.slice(0, n);
  } else {
    if (arr.length === 0) {
      return [];
    } if (n > arr.length) {
      return arr;
    }
  }
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 188. misson 1: I've create three function, and defined some global variables, please select some variables that can make up the name of the function, and return them(Please note the uppercase and lowercase letters are different).

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// misson 2: After misson 1 finished. you should click "Attempt" to see my three questions, and write the answer in function answer1, answer2,answer3

// If everything is right, click "Submit" again to submit your code pass this kata.


let a1 = "A", a2 = "a", b1 = "B", b2 = "b", c1 = "C", c2 = "c", d1 = "D", d2 = "d", e1 = "E", e2 = "e", n1 = "N", n2 = "n"
function Dad() {
  //select some variable to combine "Dad"
  return d1 + a2 + d2;
}
function Bee() {
  //select some variable to combine "Bee"
  return b1 + e2 + e2;
}
function banana() {
  //select some variable to combine "banana"
  return b2 + a2 + n2 + a2 + n2 + a2;
}

//answer some questions if you finished works above
function answer1() {
  //the answer should be "yes" or "no"
  return "no";
}
function answer2() {
  //the answer should be "yes" or "no"
  return "no";
}
function answer3() {
  //the answer should be "yes" or "no"
  return "yes";
}


// -------------------------------------------------------------------------------------------------------------------------------------

// 187. I've written five function equal1,equal2,equal3,equal4,equal5, defines six global variables v1 v2 v3 v4 v5 v6, every function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.


let v1 = 50; v2 = 100, v3 = 150, v4 = 200, v5 = 2, v6 = 250
function equal1() {
  let a = v1
  let b = v1
  return a + b;
}
//Please refer to the example above to complete the following functions
function equal2() {
  let a = v3  //set number value to a
  let b = v1 //set number value to b
  return a - b;
}
function equal3() {
  let a = v1 //set number value to a
  let b = v5 //set number value to b
  return a * b;
}
function equal4() {
  let a = v4  //set number value to a
  let b = v5  //set number value to b
  return a / b;
}
function equal5() {
  let a = v6  //set number value to a
  let b = v3  //set number value to b
  return a % b;
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 186. Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

// Task
// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8


function pipeFix(numbers) {
  let max = Math.max(...numbers);
  let min = Math.min(...numbers);
  let arr = [];
  for (let i = min; i < max + 1; i++) {
    arr.push(i);
    console.log(i);
  }
  return arr;
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 185. An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"

function contamination(text, char) {
  // Code here ;)
  let arr = text.split('');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = char;
  }
  return arr.join('');
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 184. Coding in function grabDoll. function accept 1 parameter:dolls. it's a string array, a list of some dolls.

// You need traverse dolls by using for loop. If element is "Hello Kitty" or "Barbie doll", you should push it to a bag(bag is an array, I've defined in the function); if it's other strings, we should use continue skip it.

// When the bag has three element, bag is full. You should use break jump out the loop; If bag is not full, you should traverse dolls until the last element.

// Return the bag after for loop finished.

// You should use for, break and continue in your code. otherwise, your solution may not pass this kata.

function grabDoll(dolls) {
  let bag = [];
  //coding here
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
      if (bag.length === 3) {
        break;
      } else {
        bag.push(dolls[i]);
      }
    } continue;
  }
  return bag;
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 183. Get ASCII value of a character.

// For the ASCII table you can refer to http://www.asciitable.com/

function getASCII(c) {
  return c.charCodeAt(0);
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 182. This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

// Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7). "^1" should not be truncated when exponent = 2.

// For example:

// derive(7, 8)
// In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7", the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.

// derive(7, 8) --> this should output "56x^7" 
// derive(5, 9) --> this should output "45x^8" 

function derive(coefficient, exponent) {
  return `${coefficient * exponent}x^${exponent - 1}`;
}
// Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7). "^1" should not be truncated when exponent = 2.

// For example:

// derive(7, 8)
// In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7", the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.

// derive(7, 8) --> this should output "56x^7" 
// derive(5, 9) --> this should output "45x^8" 

// -------------------------------------------------------------------------------------------------------------------------------------
// 181. Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.

// snoopy.bark(); // return "Woof"
// scoobydoo.bark(); // undefined
// Use method prototypes to enable all Dogs to bark.

function Dog(breed) {
  this.breed = breed;
}

let snoopy = new Dog("Beagle");

snoopy.bark = function () {
  return "Woof";
};

let scoobydoo = new Dog("Great Dane");
scoobydoo.bark = function () {
  return 'Woof';
};
// -------------------------------------------------------------------------------------------------------------------------------------

// 180. Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

// "..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

// Good Luck!



const calculateAge = (bornIn, testIn) => testIn < bornIn ? (Math.abs(testIn - bornIn) === 1 ? `You will be born in ${bornIn - testIn} year.` : `You will be born in ${bornIn - testIn} years.`) : (testIn === bornIn ? `You were born this very year!` : (Math.abs(testIn - bornIn) === 1 ? `You are ${testIn - bornIn} year old.` : `You are ${testIn - bornIn} years old.`));

// -------------------------------------------------------------------------------------------------------------------------------------
// 179. The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

// Examples
// numberToPower(3,2)  // -> 9 ( = 3 * 3 )
// numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10,6) // -> 1000000
// Note: Math.pow and some other Math functions like eval() and ** are disabled.


function numberToPower(number, power) {
  // Code here
  let result = number;

  if (power === 0) {
    return 1;
  } else {
    for (let i = 1; i < power; i++) {
      result *= number;
    }

    return result;
  }
}

// -------------------------------------------------------------------------------------------------------------------------------------
// 178. Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

// multiply(3)==15 // 3 * 5¹
// multiply(10)==250 // 10 * 5²
// multiply(200)==25000 // 200 * 5³
// multiply(0)==0 // 0 * 5¹
// multiply(-3)==-15 // -3 * 5¹


function multiply(number) {
  //your code here
  let abs = number > -1 ? number : -1 * number;
  let digits = abs.toString().length;
  return number * Math.pow(5, digits);
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 177. In javascript, Array is one of basic data types. Define an empty array can use var arr=new Array() or var arr=[]

// Array has an attribute: length, if there is an array named arr, using arr.length to know how many elements are contained in the array.

// Each element in the array has an index, use arr[index] to get the value of element.

// index always start from 0, so the first element of array is arr[0], the last element of array is arr[arr.length-1].

// If we want to add new elements to the array, you can use the array method: push(). It can add an element to the end of the array. Instead, if we want to remove the last element of the array, you can use the array method: pop(). for example:

// var arr=[1,2,3];     //define an array arr contains elements 1 2 3
// arr.push(4);         //add element 4 to arr
// console.log(arr)     //[1,2,3,4]
// arr.pop();           //remove the last element from arr
// console.log(arr)     //[1,2,3]
// Task
// I've written five function, each function receives a parameter: arr(an array), you should code something with arr.

//     1. getLength(arr)    should return length of arr
//     2. getFirst(arr)     should return the first element of arr
//     3. getLast(arr)      should return the last element of arr
//     4. pushElement(arr)  should push an element to arr, and then return arr
//     5. popElement(arr)   should pop an element from arr, and then return arr
// When you have finished the work, click "Run Tests" to see if your code is working properly.

function getLength(arr) {
  //return length of arr
  return arr.length;
}
function getFirst(arr) {
  //return the first element of arr
  return arr[0];
}
function getLast(arr) {
  //return the last element of arr
  return arr[arr.length - 1];
}
function pushElement(arr) {
  var el = 1;
  //push el to arr
  arr.push(el);
  return arr;
}
function popElement(arr) {
  //pop an element from arr
  arr.pop();
  return arr;
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 176. Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

function getDrinkByProfession(param) {
  switch (param.toLowerCase()) {
    case "jabroni":
      return "Patron Tequila";
      break;
    case "school counselor":
      return "Anything with Alcohol";
      break;
    case "programmer":
      return "Hipster Craft Beer";
      break;
    case "bike gang member":
      return "Moonshine";
      break;
    case "politician":
      return "Your tax dollars";
      break;
    case "rapper":
      return "Cristal";
      break;
    default:
      return "Beer";
      break;
  }
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 175. You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

// Let's look at a few examples:

// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
const index = (array, n) => array.length - 1 >= n ? Math.pow(array[n], n) : -1;
// -------------------------------------------------------------------------------------------------------------------------------------
// 174. This Kata is intended as a small challenge for my students

// All Star Code Challenge #18

// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:

// The first argument can be an empty string
// The second string argument will always be of length 1
function strCount(str, letter) {
  //code here
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count += 1;
    }
  }
  return count;
}
// -------------------------------------------------------------------------------------------------------------------------------------
//  173. DESCRIPTION:
// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
function cockroachSpeed(s) {

  //Good Luck

  return Math.floor((s * (100000 / 3600)));
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 172. Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false
let isSquare = function (n) {
  return Number.isInteger(Math.sqrt(n));
}
// -------------------------------------------------------------------------------------------------------------------------------------

// 171. Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"
function printArray(array) {
  //show me the code!
  return array.join(',');
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 170. For every good kata idea there seem to be quite a few bad ones!

//In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.


function well(x) {
  let count = 0;
  for (let k of x) {
    if (k === 'good') {
      count++;
    }
  }
  if (count < 1) {
    return 'Fail!'
  } else if (count < 3) {
    return 'Publish!'
  } else return 'I smell a series!'
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 169. Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"
function nameShuffler(str) {
  //Shuffle It
  return str.split(' ').reverse().join(' ');
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 168. Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  // your code here
  return (x.toLowerCase() === x.split('').reverse().join('').toLowerCase()) ? true : false;
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 167. I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that
let humanYearsCatYearsDogYears = function (humanYears) {
  // Your code here!
  let arr = [];
  let catYrs = 0;
  let dogYrs = 0;
  let originalHumanYrs = humanYears;
  if (humanYears > 0) {
    catYrs += 15;
    dogYrs += 15;
    humanYears -= 1;
    if (humanYears > 0) {
      catYrs += 9;
      dogYrs += 9;
      humanYears -= 1;
      if (humanYears > 0) {
        for (; humanYears > 0; humanYears--) {
          catYrs += 4;
          dogYrs += 5;
        }
      }
    }
  }
  arr.push(originalHumanYrs);
  arr.push(catYrs);
  arr.push(dogYrs);
  return arr;
}

// -------------------------------------------------------------------------------------------------------------------------------------
// 166. Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
function powersOfTwo(n) {
  let result = [];
  for (let i = 0; i < n + 1; i++) {
    result.push(Math.pow(2, i))
  }
  return result
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 165. In JavaScript, there is a special case where strict comparison of the same variable returns false! Try to find out what must be done to get such result!

// var x = something;
// x === x // returns false!
// Write a function which will return value for which strict comparison will give false!


function findStrangeValue() {
  // your code!
  return NaN;
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 164. Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

// "Rating not recognised" in Javascript, Python and Ruby...
// ...or null in Java
// ...or -1 in C#
// Because you're a nice person, you always round up the tip, regardless of the service.
function calculateTip(amount, rating) {
  if (rating.toLowerCase() === 'terrible') {
    return 0;
  } else if (rating.toLowerCase() === 'poor') {
    return Math.ceil(amount * 0.05);
  } else if (rating.toLowerCase() === 'good') {
    return Math.ceil(amount * 0.1);
  } else if (rating.toLowerCase() === 'great') {
    return Math.ceil(amount * 0.15);
  } else if (rating.toLowerCase() === 'excellent') {
    return Math.ceil(amount * 0.2);
  } else return 'Rating not recognised';
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 163. Nodejs package.json
// Node applications require a file named package.json on the root of the project.

// You can create this file manually or have the command npm init to assist you in this process.

// The fields name and version are mandatory.
const configuration = {
  "name": "codewars",
  "description": "this package imports top 10 questions from codewars",
  "version": "1.0.0"
};

// -------------------------------------------------------------------------------------------------------------------------------------
// 162. Create a function that takes a number as an argument and returns a grade based on that number.

// Score	Grade
// Anything greater than 1 or less than 0.6	"F"
// 0.9 or greater	"A"
// 0.8 or greater	"B"
// 0.7 or greater	"C"
// 0.6 or greater	"D"
// Examples:
// grader(0)   should be "F"
// grader(1.1) should be "F"
// grader(0.9) should be "A"
// grader(0.8) should be "B"
// grader(0.7) should be "C"
// grader(0.6) should be "D"

function grader(score) {
  if (score < 0.6) {
    return 'F';
  } else if (score < 0.7) {
    return 'D';
  } else if (score < 0.8) {
    return 'C';
  } else if (score < 0.9) {
    return 'B';
  } else if (score <= 1) {
    return 'A';
  } else if (score > 1) {
    return 'F';
  }
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 161. You can print your name on a billboard ad. Find out how much it will cost you. Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

//You can not use multiplier "*" operator.

//If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a letter).
function billboard(name, price = 30) {
  let num = name.length;
  let cost = 0;
  for (let i = 0; i < name.length; i++) {
    cost += price;
  }
  return cost;
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 160. Coding in function pickIt, function accept 1 parameter:arr, it's a number array, we need traverse arr by using for loop, if element is odd number, push it to array odd, if it's a even number, push it to array even.
//I've defined two array odd and even in the function, and also wrote the return statement. your work is write a for loop.


function pickIt(arr) {
  let odd = [], even = [];
  //coding here
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i])
    } else {
      odd.push(arr[i])
    }
  }
  return [odd, even];
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 159. There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

// Examples
// mango(3, 3) ==> 6    # 2 mangoes for 3 = 6; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for 5 = 30; +3 mangoes for free

function mango(quantity, price) {
  let freeMangoes = Math.floor(quantity / 3);
  return (quantity - freeMangoes) * price;
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 158. You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

// Write a simple function to check if the string contains the word hallo in different languages.

// These are the languages of the possible people you met the night before:

// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish
function validateHello(greetings) {
  return greetings.toLowerCase().includes('hello') || greetings.toLowerCase().includes('ciao') || greetings.toLowerCase().includes('salut') || greetings.toLowerCase().includes('hallo') || greetings.toLowerCase().includes('hola') || greetings.toLowerCase().includes('ahoj') || greetings.toLowerCase().includes('czesc');
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 159. You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.

// if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

// Example:
// calculator(1,2,"+"); //=> result will be 3
// calculator(1,2,"&"); //=> result will be "unknown value"
// calculator(1,"k","*"); //=> result will be "unknown value"
function calculator(a, b, sign) {
  if (sign === '+') {
    return a + b;
  } else if (sign === '-') {
    return a - b;
  } else if (sign === '*') {
    return a * b;
  } else if (sign === '/') {
    return a / b;
  } else return 'unknown value';

}
// -------------------------------------------------------------------------------------------------------------------------------------
// 158. Complete function howManydays, function accept 1 parameters:month, means the month of year, different month has different days (refer to the following table), return a number that how many days in this month(month is always greater than 0, less than or equal to 12).

// +---------------+-------------+
// |    month      |    days     |
// +---------------+-------------+
// |1,3,5,7,8,10,12|     31      |
// +---------------+-------------+
// |4,6,9,11       |     30      |
// +---------------+-------------+
// |2              |     28      |  (Do not consider the leap year)
// +---------------+-------------+
// little tips: Use default for most of the cases can reduce your work.

// When you have finished the work, click "Run Tests" to see if your code is working properly.
function howManydays(month) {
  var days;
  switch (month) {
    case 1:
      return 31;
    case 2:
      return 28;
    case 3:
      return 31;
    case 4:
      return 30;
    case 5:
      return 31;
    case 6:
      return 30;
    case 7:
      return 31;
    case 8:
      return 31;
    case 9:
      return 30;
    case 10:
      return 31;
    case 11:
      return 30;
    case 12:
      return 31;
  }
  return days;
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 157. Write a function that always returns 5

// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

// Good luck :)


function unusualFive() {
  return 'fever'.length;
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 156. Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.
function correct(string) {
  let split = string.split('');

  for (let i = 0; i < split.length; i++) {
    if (split[i] === '5') {
      split[i] = 'S';
    } else if (split[i] === '0') {
      split[i] = 'O';
    } else if (split[i] === '1') {
      split[i] = 'I';
    }
  }
  return split.join('');
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 155. There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).


function pillars(numPill, dist, width) {
  // your code here
  if (numPill === 2) {
    return dist * 100;
  } else if (numPill > 2) {
    return ((numPill - 1) * dist * 100) + ((numPill - 2) * width);
  } else return 0;
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 154. Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!


function sayHello(name, city, state) {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 153. When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"
function position(letter) {
  //Write your own Code!
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  return `Position of alphabet: ${alpha.indexOf(letter) + 1}`;
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 152. Time to test your basic knowledge in functions! Return the odds from a list:

// [1, 2, 3, 4, 5]  -->  [1, 3, 5]
// [2, 4, 6]        -->  []
function odds(values) {
  // arrow it
  return values.filter(x => x % 2 != 0);
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 151. This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL
function array(arr) {
  //Good luck

  let array = arr.split(',');
  if (array.length >= 3) {
    array.shift();
    array.pop();
    return array.join(' ')
  } else return null;
}

// -------------------------------------------------------------------------------------------------------------------------------------
// 150. We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]
// Note: The parameter is optional. So you have to give it a default value.
const arr = N => {
  let array = []
  if (N) {
    for (let i = 0; i < N; i++) {
      array.push(i);
    }
    return array;
  } else return [];
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 149. A variation of determining leap years, assuming only integers are used and years can be negative and positive.

// Write a function which will return the days in the year and the year entered in a string. For example:

// yearDays(2000) returns "2000 has 366 days"
// There are a few assumptions we will accept the year 0, even though there is no year 0 in the Gregorian Calendar.

// Also the basic rule for validating a leap year are as follows

// Most years that can be divided evenly by 4 are leap years.

// Exception: Century years are NOT leap years UNLESS they can be evenly divided by 400.

// So the years 0, -64 and 2016 will return 366 days. Whilst 1974, -10 and 666 will return 365 days.


function yearDays(year) {
  //your code here
  if (year % 4 === 0) {
    if (year % 10 === 0) {
      if (year % 400 === 0) {
        return `${year} has 366 days`
      }
      return `${year} has 365 days`
    }
    return `${year} has 366 days`
  } else return `${year} has 365 days`
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 148. Everybody knows the classic "half your age plus seven" dating rule that a lot of people follow (including myself). It's the 'recommended' age range in which to date someone.


// minimum age <= your age <= maximum age #Task

// Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.

// This equation doesn't work when the age <= 14, so use this equation instead:

// min = age - 0.10 * age
// max = age + 0.10 * age
// You should floor all your answers so that an integer is given instead of a float (which doesn't represent age). Return your answer in the form [min]-[max]
function datingRange(age) {
  //return min-max
  return age > 14 ? (`${Math.floor(age / 2 + 7)}-${Math.floor((age - 7) * 2)}`) : (`${Math.floor(age - (0.10 * age))}-${Math.floor(age + (0.10 * age))}`)
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 147. You have to write a function that describe Leo:

// function leo(oscar) {

// }
// if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
// if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
// if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
// if it was over 88 you should return "Leo got one already!"
function leo(oscar) {
  if (oscar === 86) {
    return "Not even for Wolf of wallstreet?!"
  } else if (oscar > 86 && oscar < 88) {
    return "When will you give Leo an Oscar?"
  } else if (oscar === 88) {
    return "Leo finally won the oscar! Leo is happy"
  } else if (oscar > 88) return "Leo got one already!"

  else return 'When will you give Leo an Oscar?'
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 146. Combine strings function
// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

// Example:

// combineNames('James', 'Stevens')
// returns:

// 'James Stevens'

// Create the combineNames function here
const combineNames = (firstName, lastName) => `${firstName} ${lastName}`
// -------------------------------------------------------------------------------------------------------------------------------------

// 145. Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

// Please use the following function names:

// addition = add

// multiply = multiply

// division = divide (both integer and float divisions are accepted)

// modulus = mod

// exponential = exponent

// subtraction = subt

// Note: All math operations will be: a (operation) b


function add(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function mod(a, b) {
  return a % b;
}

function exponent(a, b) {
  return Math.pow(a, b);
}

function subt(a, b) {
  return a - b;
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 144. Create a function that takes a string and an integer (n).

// The function should return a string that repeats the input string n number of times.

// If anything other than a string is passed in you should return "Not a string"

// Example
// "Hi", 2 --> "HiHi"
// 1234, 5 --> "Not a string"
var repeatIt = function (str, n) {
  //   checking if input is string
  let out = '';
  if (typeof (str) === 'string') {
    for (let i = 0; i < n; i++) {
      out = out.concat(str)
    }
    return out;
  } return 'Not a string'
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 143. You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"
// Happy coding!
function reverse(string) {
  //your code here
  return string.split(' ').reverse().join(' ')
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 142. You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'
function defineSuit(card) {
  // good luck
  if (card.split('').includes('♣')) return 'clubs';
  else if (card.split('').includes('♦')) return 'diamonds';
  else if (card.split('').includes('♥')) return 'hearts';
  else return 'spades';
}
// -------------------------------------------------------------------------------------------------------------------------------------

// 141. The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.

// The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.

// Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.

// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";

function chromosomeCheck(sperm) {
  return sperm.split('').includes('Y') ? `Congratulations! You're going to have a son.` : `Congratulations! You're going to have a daughter.`
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 140. Create a function called _if which takes 3 arguments: a boolean value bool and 2 functions (which do not take any parameters): func1 and func2

// When bool is truth-ish, func1 should be called, otherwise call the func2.
function _if(bool, func1, func2) {
  if (bool) func1();
  else func2();
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 139. Find Mean
// Find the mean (average) of a list of numbers in an array.

// Information
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

// For an example list of 1, 3, 5, 7

// 1. Add all of the numbers

// 1+3+5+7 = 16
// 2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

// 16/4 = 4
// 3. The mean (or average) of this list is 4
let findAverage = function (nums) {
  return nums.reduce((sum, cur) => sum += cur, 0) / nums.length
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 138. Add the value "codewars" to the websites array.
// After your code executes the websites array should == ["codewars"]

// The websites array has already been defined for you using the following code:

// var websites = [];
// add the value "codewars" to the already defined websites array

websites.push('codewars');
// -------------------------------------------------------------------------------------------------------------------------------------
// 137. Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

// number	price (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90
function saleHotdogs(n) {
  if (n < 5) {
    return n * 100;
  } else if (n >= 5 && n < 10) {
    return n * 95;
  } else if (n >= 10) {
    return n * 90;
  }
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 136. This is the first step to understanding FizzBuzz.

// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

// Your expected output is an array of positive integers from 1 to n (inclusive).

// Your job is to write an algorithm that gets you from the input to the output.
function preFizz(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 135. Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"
function replace(s) {
  //coding and coding....
  return s.split('').map(x => {
    if (x === 'a' || x === 'A' || x === 'e' || x === 'E' || x === 'i' || x === 'I' || x === 'o' || x === 'O' || x === 'u' || x === 'U') {
      return x = '!';
    } else {
      return x;
    }
  }).join('');
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 134. Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

function include(arr, item) {
  // ...
  return arr.includes(item);
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 133. Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

// Write a function that given a floor in the american system returns the floor in the european system.

// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

// Basements (negatives) stay the same as the universal level.
function getRealFloor(n) {
  return n < 13 ? (n < 1 ? n : n - 1) : n - 2;
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 132. I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

// Can you figure out what's wrong here?
function swapValues(args) {
  let temp = args[0];
  args[0] = args[1];
  args[1] = temp;
  let newArr = [];
  newArr.push(args[1]);
  newArr.push(args[0]);
  return newArr;
}
// -------------------------------------------------------------------------------------------------------------------------------------

// 131. add the value "codewars" to the websites array 1,000 times
let websites = [];

for (let i = 0; i < 1000; i++) {
  websites.push('codewars');
}

// -------------------------------------------------------------------------------------------------------------------------------------
// 130. It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
function bonusTime(salary, bonus) {
  // your code here
  bonus ? salary *= 10 : salary;
  return `£${salary}`;
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 129. Arrow style Functions
// Come here to practice the Arrow style functions Not much else to say good luck!
// Details
// You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.

// Examples
// These are example of how to convert a number to an ascii Character:
// Javascript => String.fromCharCode(97) // a
// C# => Tools.FromCharCode(97) // a


const ArrowFunc = function (arr) {
  return arr.map(num => String.fromCharCode(num)).join(''); //Complete this function
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 128. Write a function that returns the total surface area and volume of a box as an array: [area, volume]


function getSize(width, height, depth) {
  let surArea = 2 * ((width * height) + (width * depth) + (height * depth));
  let vol = (width * height * depth);
  let arr = [];
  arr.push(surArea);
  arr.push(vol);
  return arr;
}


// -------------------------------------------------------------------------------------------------------------------------------------
// 127. Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]
function between(a, b) {
  // your code here
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 126. find the reaminder
function remainder(n, m) {
  // Divide the larger argument by the smaller argument and return the remainder
  return n > m ? (m != 0 ? n % m : NaN) : (n != 0 ? m % n : NaN)

}
// -------------------------------------------------------------------------------------------------------------------------------------
// 125. Write a function that will check if two given characters are the same case.
// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1
// 'A' and 'C' returns 1
// 'b' and 'G' returns 0
// 'B' and 'g' returns 0
// '0' and '?' returns -1

function sameCase(a, b) {
  let index = 0;
  //   checking for small case a and both case b
  if (a.charCodeAt(index) >= 97 && a.charCodeAt(index) <= 122) {
    if (b.charCodeAt(index) >= 97 && b.charCodeAt(index) <= 122) {
      return 1;
    } else if (b.charCodeAt(index) >= 65 && b.charCodeAt(index) <= 90) {
      return 0;
    }
  }
  //   checking for large case a and both case b
  if (a.charCodeAt(index) >= 65 && a.charCodeAt(index) <= 90) {
    if (b.charCodeAt(index) >= 65 && b.charCodeAt(index) <= 90) {
      return 1;
    } else if (b.charCodeAt(index) >= 97 && b.charCodeAt(index) <= 122) {
      return 0;
    }
  }
  //   if either of the two are not a letter return -1
  if ((a.charCodeAt(index) < 65 || (a.charCodeAt(index) > 90 && a.charCodeAt(index) < 97) || a.charCodeAt(index) > 122) || ((b.charCodeAt(index) < 65 || (b.charCodeAt(index) > 90 && b.charCodeAt(index) < 97) || b.charCodeAt(index) > 122))) {
    return -1;
  }
}

// clever solution
function sameCase(a, b) {
  //   const alpha = 'abcdefghijklmnopqrstuvwxyz'
  //   if(!alpha.includes(a.toLowerCase()) || !alpha.includes(b.toLowerCase())) return -1

  //   const checkCase = x => {
  //     if(x === x.toLowerCase()) return 'lower'
  //     if(x === x.toUpperCase()) return 'upper'
  //   }

  //   return checkCase(a) === checkCase(b) ? 1 : 0
  // }

  // -------------------------------------------------------------------------------------------------------------------------------------
  // 124. Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

  // I love you
  // a little
  // a lot
  // passionately
  // madly
  // not at all
  // When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

  // Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

  function howMuchILoveYou(nbPetals) {
    // your code
    if (nbPetals % 6 === 1) {
      return 'I love you'
    } else if (nbPetals % 6 === 2) {
      return 'a little'
    } else if (nbPetals % 6 === 3) {
      return 'a lot'
    } else if (nbPetals % 6 === 4) {
      return 'passionately'
    } else if (nbPetals % 6 === 5) {
      return 'madly'
    } else if (nbPetals % 6 === 0) {
      return 'not at all'
    }
  }

  // clever solution
  const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
  ]

  function howMuchILoveYou(n) {
    return phrases[(n - 1) % phrases.length]
  }

  // -------------------------------------------------------------------------------------------------------------------------------------
  // 123. A western man is trying to find gold in a river. To do that, he passes a bucket through the river's soil and then checks if it contains any gold. However, he could be more productive if he wrote an algorithm to do the job for him.

  // So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false.
  function checkTheBucket(bucket) {
    //your code here
    return bucket.includes('gold') ? true : false;
  }


  // -------------------------------------------------------------------------------------------------------------------------------------
  // 122. Task
  // Given a number N, determine if the sum of N consecutive numbers is odd or even.

  // If the sum is definitely an odd number, return Odd.
  // If the sum is definitely an even number, return Even.
  // If the sum can be either odd or even ( depending on which first number you choose ), return Either.
  // Examples
  // Odd_or_Even(1) should return Either, because the sum can be odd or even.
  // Odd_or_Even(6) should return Odd, because 6 consecutive numbers contain 3 odd and 3 even numbers, so their sum is always odd.
  // Odd_or_Even(8) should return Even, because 8 consecutive numbers contain 4 odd and 4 even numbers, so their sum is always even.
  // Note
  // const ODD = "Odd";
  // const EVEN = "Even";
  // const EITHER = "Either";
  function oddOrEven(n) {
    //   return ODD || EVEN || EITHER ;


    if (n % 2 === 0) {
      if ((n / 2) % 2 === 0) {
        return 'Even'
      } else return 'Odd'
    } else if (n % 2 != 0) {

      return 'Either'
    }

  }
  // -------------------------------------------------------------------------------------------------------------------------------------
  // 121. Write a script that will check to see if the player has achieved at least 100 points in his class. If so, he enters the qualifying stage.


  function playerRankUp(points) {
    return points >= 100 ? "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up." : false;
  }
  // -------------------------------------------------------------------------------------------------------------------------------------
  // 120. Template Strings
  // Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
  // Task
  // Your task is to return the correct string using the Template String Feature.
  // Input
  // Two Strings, no validation is needed.
  // Output
  // You must output a string containing the two strings with the word ```' are '```
  // Reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings

  let TempleStrings = function (obj, feature) {
    return `${obj} are ${feature}`;
  }

  // -------------------------------------------------------------------------------------------------------------------------------------
  // 119. This function should test if the factor is a factor of base.

  // Return true if it is a factor or false if it is not.

  // About factors
  // Factors are numbers you can multiply together to get another number.

  // 2 and 3 are factors of 6 because: 2 * 3 = 6

  // You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
  // You can use the mod operator (%) in most languages to check for a remainder
  // For example 2 is not a factor of 7 because: 7 % 2 = 1

  // Note: base is a non-negative number, factor is a positive number.



  function checkForFactor(base, factor) {
    // code here
    return base % factor === 0 ? true : false;
  }
  // -------------------------------------------------------------------------------------------------------------------------------------
  // 118. Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

  // The Task
  // Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
  // Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.



  function greet(language) {
    langDB = {
      english: 'Welcome',
      czech: 'Vitejte',
      danish: 'Velkomst',
      dutch: 'Welkom',
      estonian: 'Tere tulemast',
      finnish: 'Tervetuloa',
      flemish: 'Welgekomen',
      french: 'Bienvenue',
      german: 'Willkommen',
      irish: 'Failte',
      italian: 'Benvenuto',
      latvian: 'Gaidits',
      lithuanian: 'Laukiamas',
      polish: 'Witamy',
      spanish: 'Bienvenido',
      swedish: 'Valkommen',
      welsh: 'Croeso'
    }

    if (langDB[language]) {
      return `${langDB[language]}`
    } else return `Welcome`
  }
  // -------------------------------------------------------------------------------------------------------------------------------------
  // 117. Your task is to find the first element of an array that is not consecutive.

  // By not consecutive we mean not exactly 1 larger than the previous element of the array.

  // E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

  // If the whole array is consecutive then return null2.

  // The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

  // If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

  // 1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )



  function firstNonConsecutive(arr) {
    if (arr.length < 2) {
      return null
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i + 1] !== arr[i] + 1) {
        return arr[i + 1];
      } else if (i + 2 === arr.length) {
        // we've to do i+2 because we're checking for (i+1)th item in (i)th iteration
        return null;
      } else if (arr.length === 0) {
        return null;
      }
    }
  }
  // -------------------------------------------------------------------------------------------------------------------------------------
  // 116. Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

  // Some cases:
  // [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

  // [68, -1, 1, -7, 10, 10] => [-1, 10]

  // [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

  function multipleOfIndex(array) {
    return array.filter((item, index) => item % index === 0);

    // let output = [];
    // for (let i = 1; i < array.length; i++) {
    //   if (Math.abs(array[i] % i) === 0) {
    //     output.push(array[i])
    //   }
    // }
    // return output;
  }

  // -------------------------------------------------------------------------------------------------------------------------------------
  // 115. In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

  // For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

  // Your function will be tested with pre-made examples as well as random ones.

  // If you can, try writing it in one line of code.

  function findDifference(a, b) {
    //loading...
    //   let volTwo = b.reduce((acc, x) =>
    //     acc = acc * Number(x), 1)
    //   let volOne = a.reduce((acc, x) =>
    //     acc = acc * Number(x), 1)

    //   return Math.abs(volOne - volTwo);

    // one liner solution

    return Math.abs(
      (a.reduce((acc, x) => acc = acc * Number(x), 1)) - (b.reduce((acc, x) => acc = acc * Number(x), 1)));
  }
  // -------------------------------------------------------------------------------------------------------------------------------------
  // 114. Finish the uefaEuro2016() function so it return string just like in the examples below:

  // uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
  // uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
  // uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."
  function uefaEuro2016(teams, scores) {
    // your code...
    if (scores[0] > scores[1]) {
      return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
    } else if (scores[1] > scores[0]) {
      return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
    } else if (scores[0] === scores[1]) {
      return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
    }
  }
  // -------------------------------------------------------------------------------------------------------------------------------------
  // 114. To find the volume (centimeters cubed) of a cuboid you use the formula:

  // volume = Length * Width * Height

  // But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

  // It's up to you to find out whether the cuboid has equal sides (= is a cube).

  // Return true if the cuboid could have equal sides, return false otherwise.

  // Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

  // Note: the sides must be integers
  const cubeChecker = function (volume, side) {
    if (side > 0) {
      return (side * side * side === volume) ? true : false;
    } else return false;
  };

  // -------------------------------------------------------------------------------------------------------------------------------------
  // 112. Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

  // To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().
  function add(a, b) {
    // code
    return (String(a).charCodeAt(0) === String(b).charCodeAt(0)) ? true : false;
  }
  // -------------------------------------------------------------------------------------------------------------------------------------
  // 111. It is easy to join two strings together like this string1 + string2.

  // Another way to get the desired result would be with string1.concat(string2)

  // ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.

  // + , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!

  // If one of the arguments is a number your code must coerce it into being a string.


  function joinStrings(string1, string2) {
    // code here
    return `${string1} ${string2}`;
  }
  // -------------------------------------------------------------------------------------------------------------------------------------
  // 110. Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

  // This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

  // This function should return a number (final grade). There are four types of final grades:

  // 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
  // 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
  // 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
  // 0, in other cases
  // Examples(Inputs-->Output):

  // 100, 12 --> 100
  // 99, 0 --> 100
  // 10, 15 --> 100

  // 85, 5 --> 90

  // 55, 3 --> 75

  // 55, 0 --> 0
  // 20, 2 --> 0
  // *Use Comparison and Logical Operators.


  function finalGrade(exam, projects) {
    if (exam > 90 || projects > 10) {
      return 100;
    } else if (exam > 75 && projects >= 5) {
      return 90;
    } else if (exam > 50 && projects >= 2) {
      return 75;
    } else {
      return 0;
    }
  }

  // -------------------------------------------------------------------------------------------------------------------------------------
  // 109. Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

  Example:

  // ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

  // None of the arrays will be empty, so you don't have to worry about that!



  function removeEveryOther(arr) {
    //your code here
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        newArr.push(arr[i])
      }
    }
    return newArr;
  }
  // an optimised solution would be to use filter method -> filter(item, index) on the array

  // function removeEveryOther(arr){
  //   return arr.filter(function(elem, index) {
  //     return index % 2 === 0;
  //   });
  // }

  // -------------------------------------------------------------------------------------------------------------------------------------
  // 108. Task
  // Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
  // In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
  // Consider an Example :
  // With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

  // 1 * (2 + 3) = 5
  // 1 * 2 * 3 = 6
  // 1 + 2 * 3 = 7
  // (1 + 2) * 3 = 9
  // So the maximum value that you can obtain is 9.

  // Notes
  // The numbers are always positive.
  // The numbers are in the range (1  ≤  a, b, c  ≤  10).
  // You can use the same operation more than once.
  // It's not necessary to place all the signs and brackets.
  // Repetition in numbers may occur .
  // You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.

  function expressionMatter(a, b, c) {
    let first = a * (b + c);
    let second = a * b * c;
    let third = a + (b * c);
    let fourth = (a + b) * c;
    let fifth = a + b + c;
    return Math.max(first, second, third, fifth, fourth);
  }
  // -------------------------------------------------------------------------------------------------------------------------------------
  // 107. altERnaTIng cAsE <=> ALTerNAtiNG CaSe
  // Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

  // "hello world".toAlternatingCase() === "HELLO WORLD"
  // "HELLO WORLD".toAlternatingCase() === "hello world"
  // "hello WORLD".toAlternatingCase() === "HELLO world"
  // "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
  // "12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
  // "1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
  // "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
  // As usual, your function/method should be pure, i.e. it should not mutate the original string.
  String.prototype.toAlternatingCase = function () {
    // Define your method here :)

    let arr = this.split('');
    let alternateArr = [];
    arr.map(x => {
      (x === x.toUpperCase()) ? alternateArr.push(x.toLowerCase()) : alternateArr.push(x.toUpperCase());
    })
    return alternateArr.join('');

  }
  // -------------------------------------------------------------------------------------------------------------------------------------
  // 106. Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

  // For example (Input --> Output)

  // "Yes" --> "Yes?"
  // "No?" --> "No?"

  function ensureQuestion(s) {
    // Code here
    return (s.endsWith('?')) ? s : `${s}?`;
  }
  // -------------------------------------------------------------------------------------------------------------------------------------
  // 105. Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

  // Example: (Input1, Input2 -->Output)

  // "4",  "5" --> "9"
  // "34", "5" --> "39"
  // "", "" --> "0"
  // "2", "" --> "2"
  // "-5", "3" --> "-2"
  // Notes:

  // If either input is an empty string, consider it as zero.

  // Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)


  function sumStr(a, b) {
    if (a.length === 0) {
      return (Number(b) + 0).toString();
    } else if (b.length === 0) {
      return (Number(a) + 0).toString();
    } else if (a.length === 0 && b.length === 0) {
      return '0';
    } else {
      return (Number(b) + Number(a)).toString();
    }
  }
  // -------------------------------------------------------------------------------------------------------------------------------------
  // 104. Complete the function which returns the weekday according to the input number:

  // 1 returns "Sunday"
  // 2 returns "Monday"
  // 3 returns "Tuesday"
  // 4 returns "Wednesday"
  // 5 returns "Thursday"
  // 6 returns "Friday"
  // 7 returns "Saturday"
  // Otherwise returns "Wrong, please enter a number between 1 and 7"
  function whatday(num) {

    // put your code here

    if (num === 1) {
      return 'Sunday';
    } else if (num === 2) {
      return 'Monday';
    } else if (num === 3) {
      return 'Tuesday';
    } else if (num === 4) {
      return 'Wednesday';
    } else if (num === 5) {
      return 'Thursday';
    } else if (num === 6) {
      return 'Friday';
    } else if (num === 7) {
      return 'Saturday';
    } else {
      return 'Wrong, please enter a number between 1 and 7';
    }

  }
  // -------------------------------------------------------------------------------------------------------------------------------------
  // 103. Prolog:
  // This kata series was created for friends of mine who just started to learn programming. Wish you all the best and keep your mind open and sharp!

  // Task:
  // Write function typeValidation that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.

  // Examples:
  // typeValidation(42, "number");   // => true
  // typeValidation("42", "number"); // => false
  function typeValidation(variable, type) {
    // Your code should be here ;)
    return (typeof (variable) === type);
  }
  // -------------------------------------------------------------------------------------------------------------------------------------
  // 102. Return the type of the sum of the two arguments


  function typeOfSum(a, b) {
    // good luck
    return typeof (a + b);
  }
  // -------------------------------------------------------------------------------------------------------------------------------------
  // 101. Exclusive "or" (xor) Logical Operator
  // Overview
  // In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:

  // false xor false == false // since both are false
  // true xor false == true // exactly one of the two expressions are true
  // false xor true == true // exactly one of the two expressions are true
  // true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
  // Task
  // Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.
  function xor(a, b) {
    // TODO: Program Me
    return ((a === true && b === false) || (b === true && a === false)) ? true : false;
  }


  // -------------------------------------------------------------------------------------------------------------------------------------
  // 100. Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".


  function problem(x) {
    //your code here
    return (typeof (x) === 'string') ? "Error" : x * 50 + 6;
  }
  // -------------------------------------------------------------------------------------------------------------------------------------
  // 99. Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

  // Example:

  // get_char(65)
  // should return:

  // 'A'
  function getChar(c) {
    // ...
    return String.fromCharCode(c);
  }

  // -------------------------------------------------------------------------------------------------------------------------------------
  // 98. Inspired by the development team at Vooza, write the function that

  // accepts the name of a programmer, and
  // returns the number of lightsabers owned by that person.
  // The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

  // Note: your function should have a default parameter.

  // For example(Input --> Output):

  // "anyone else" --> 0
  // "Zach" --> 18
  function howManyLightsabersDoYouOwn(name) {
    return (name === 'Zach') ? 18 : 0;
  }
  // -------------------------------------------------------------------------------------------------------------------------------------
  // 97. Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!', else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.
  function apple(x) {
    return (x * x > 1000) ? `It's hotter than the sun!!` : `Help yourself to a honeycomb Yorkie for the glovebox.`;
  }
  // -------------------------------------------------------------------------------------------------------------------------------------
  // 96. Fix the variables assigments so that this code stores the string 'devLab' in the variable name.

  let a = "dev"
  let b = "Lab"

  let name = `${a}${b}`

  // -------------------------------------------------------------------------------------------------------------------------------------
  // 95. Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

  // Examples
  // "hello"     -->  "hll"
  // "codewars"  -->  "cdwrs"
  // "goodbye"   -->  "gdby"
  // "HELLO"     -->  "HELLO"
  // don't worry about uppercase vowels
  // y is not considered a vowel for this kata

  function shortcut(string) {
    let stringArr = string.split('');
    let result = [];
    stringArr.map(x => {
      if (!(x === 'a' || x === 'A' || x === 'e' || x === 'E' || x === 'i' || x === 'I' || x === 'o' || x === 'O' || x === 'u' || x === 'U')) {
        result.push(x);
      }

    })
    return result.join('');
  }
  // -------------------------------------------------------------------------------------------------------------------------------------
  // 94. In this kata you will create a function that takes in a list and returns a list with the reverse order.

  // Examples (Input -> Output)
  // * [1, 2, 3, 4]  -> [4, 3, 2, 1]
  // * [9, 2, 0, 7]  -> [7, 0, 2, 9]
  function reverseList(list) {
    return list.reverse();
  }
  // -------------------------------------------------------------------------------------------------------------------------------------
  // 93. Palindrome strings
  // A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

  // Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

  // Examples
  // isPalindrome("anna")   ==> true
  // isPalindrome("walter") ==> false
  // isPalindrome(12321)    ==> true
  // isPalindrome(123456)   ==> false
  function isPalindrome(line) {
    return (line.split('').reverse().join('') === line) ? true : false;
  }
  // -------------------------------------------------------------------------------------------------------------------------------------
  // 92. Christmas is coming and many people dreamed of having a ride with Santa's sleigh. But, of course, only Santa himself is allowed to use this wonderful transportation. And in order to make sure, that only he can board the sleigh, there's an authentication mechanism.

  // Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" (yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D), the return value must be true. Otherwise it should return false.

  // Examples:

  // var sleigh = new Sleigh();
  // sleigh.authenticate("Santa Claus", "Ho Ho Ho!"); // must return TRUE

  // sleigh.authenticate("Santa", "Ho Ho Ho!"); // must return FALSE
  // sleigh.authenticate("Santa Claus", "Ho Ho!"); // must return FALSE
  // sleigh.authenticate("jhoffner", "CodeWars"); // Nope, even Jake is not allowed to use the sleigh ;)
  function Sleigh() { }

  Sleigh.prototype.authenticate = function (name, password) {
    return (name === 'Santa Claus' && password === 'Ho Ho Ho!') ? true : false;
  };
  // -------------------------------------------------------------------------------------------------------------------------------------
  // 91. Grasshopper - Function syntax debugging
  // A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.
  function main(verb, noun) {
    return verb + noun
  }
  // -------------------------------------------------------------------------------------------------------------------------------------
  // 90. Fix the function
  // I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

  // Can you help me fix the function?
  function addFive(num) {
    return Number(num) + 5
  }
  // -------------------------------------------------------------------------------------------------------------------------------------
  // 89. We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

  // You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

  // All values will be positive integers or floats, or zero.
  function plural(n) {
    // ...
    return (n === 1) ? false : true;
  }
  // -------------------------------------------------------------------------------------------------------------------------------------
  // 88. Debugging sayHello function
  // The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

  // Example output:

  // Hello, Mr. Spock
  function sayHello(name) {
    return `Hello, ${name}`;
  }
  // -------------------------------------------------------------------------------------------------------------------------------------
  // 87. In this Kata we are passing a number (n) into a function.

  // Your code will determine if the number passed is even (or not).

  // The function needs to return either a true or false.

  // Numbers may be positive or negative, integers or floats.

  // Floats with decimal part non equal to zero are considered UNeven for this kata.
  function testEven(n) {
    //Your awesome code here!
    return (n % 2 === 0) ? true : false;
  }
  // -------------------------------------------------------------------------------------------------------------------------------------
  // 86. The wide-mouth frog is particularly interested in the eating habits of other creatures.

  // He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

  // When he meets the alligator, it then makes a tiny mouth.

  // Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide


  function mouthSize(animal) {
    // code here
    return (animal.toLowerCase() === 'alligator') ? 'small' : 'wide';

  }
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
    if (old >= 21) {
      return 'drink whisky';
    } else if (old >= 18 && old < 21) {
      return 'drink beer';
    } else if (old >= 14 && old < 18) {
      return 'drink coke';
    } else if (old < 14) {
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
