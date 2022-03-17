// 7.

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
