// 3. Convert a Number to a String!
// 134 -> '134'
function numberToString(num) {
  // Return a string of the number here!
  return num.toString();
}


// 2. Very simple, given an integer or a floating-point number, find its opposite.
// Examples:
// 1: -1
// 14: -14
// -34: 34
  
function opposite(number) {
    //your code here
    if(number){
      return ( number * (-1) );
    }else {
      return 0;
    }
  }

// 1. Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
    return (number % 2 ) ? "Odd" : "Even" ;
}