// -------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------
// 12. Write a function to test if the sum of all elements of an array is even or odd
function oddOrEven(array) {
        //enter code here
        if (array.length > 0) {
                let sum = array.reduce((acc, x) => acc + x, 0);
                return sum % 2 === 0 ? 'even' : 'odd';
        }
        return 'even'

}

// -------------------------------------------------------------------------------------------------------------------------------------
// 11. Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {
        //Code here
        let lowest = numbers[0];
        let secondLowest = numbers[1];
        for (let i = 0; i < numbers.length; i++) {
                if (numbers[i] < lowest) {
                        secondLowest = lowest;
                        lowest = numbers[i];
                }
                if (numbers[i] > lowest && numbers[i] < secondLowest) {
                        secondLowest = numbers[i];
                }
        }
        return lowest + secondLowest;
}


// -------------------------------------------------------------------------------------------------------------------------------------

// 10. Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// // If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"




// -------------------------------------------------------------------------------------------------------------------------------------
// 9. Write a function loopArr that loops array in a specified direction by some number of steps.

// By "looping array" it means removing elements from start and adding them to end of array one-by-one (if direction is "left") or removing from end and adding them to start one by-one (if direction is "right").

// Function should accept three arguments:

// array - non-empty array of elements of any type;
// direction - 'left' or 'right' - tells how to loop array;
// steps - number of steps to loop array (less or equal to array size);
// Examples:

// loopArr([1, 5, 87, 45, 8, 8], 'left', 2);
// should produce result: [87, 45, 8, 8, 1, 5]

// loopArr([1, 5, 87, 45, 8, 8], 'right', 2);
// should produce result: [8, 8, 1, 5, 87, 45]

function loopArr(arr, direction, steps) {
        for (let i = 0; i < steps; i++) {
                if (direction === 'left') {
                        let item = arr.shift();
                        arr.push(item);
                } else if (direction === 'right') {
                        let item = arr.pop();
                        arr.unshift(item);
                }
        }
        return arr;
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 8. Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

//(In this case, all triangles must have surface greater than 0 to be accepted).
function isTriangle(a, b, c) {
        if (a > 0 && b > 0 && c > 0) {
                return ((a + b + c - Math.max(a, b, c)) > Math.max(a, b, c)) ? true : false;

        } else return false;
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 7. Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
function getSum(a, b) {
        let sum = 0;
        console.log(a, b);
        if (a != b) {
                let i = (a > b ? b : a)
                let j = a > b ? a : b;
                for (i; i <= j; i++) {
                        sum = sum + i;
                }

                return sum;
        } else return a;
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 6. String will never be empty and you do not need to account for different data types.

function findShort(s) {
        let arr = s.split(' ');
        let shortest = 9999;
        arr.forEach(x => {
                if (x.length < shortest) {
                        shortest = x.length;
                }
        })
        return shortest;
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 5. You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

function getMiddle(s) {
        if (s.length % 2 === 0) {
                return `${s[s.length / 2 - 1]}${s[s.length / 2]}`;
        } else return `${s[Math.floor(s.length / 2)]}`;
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 4. In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"function getMiddle(s) {
if (s.length % 2 === 0) {
        return `${s[s.length / 2 - 1]}${s[s.length / 2]}`;
} else return `${s[Math.floor(s.length / 2)]}`;
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.
function highAndLow(numbers) {
        // ...
        let array = numbers.split(' ')
        let max = array[0];
        let min = array[0];
        if (array.length > 1) {
                for (let i = 0; i < array.length; i++) {
                        if (Number(array[i]) > max) {
                                max = Number(array[i]);
                        } else if (Number(array[i]) < min) {
                                min = Number(array[i]);
                        }
                }
        } else return `${Number(array[0])} ${Number(array[0])}`
        return `${max} ${min}`;
}
// -------------------------------------------------------------------------------------------------------------------------------------
// 3. Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
        let str = String(num);
        let digits = str.split('');
        let output = [];
        digits.map(x => {
                let square = Number(x) * Number(x);
                output.push(square);
        })
        return Number(output.join(''));
}

// -------------------------------------------------------------------------------------------------------------------------------------

// 2. Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


function disemvowel(str) {
        let lettersArray = str.split('');
        let vowelLess = lettersArray.filter(x => x !== 'a' && x !== 'e' && x !== 'i' && x !== 'o' && x !== 'u' && x !== 'A' && x !== 'E' && x !== 'I' && x !== 'O' && x !== 'U');

        return vowelLess.join('');
}

// -------------------------------------------------------------------------------------------------------------------------------------

// 1. Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {

        // enter your majic here
        let arr = str.split('');
        let vowelsCount = 0;
        arr.map(x => {
                if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
                        vowelsCount += 1;
                }
        })

        return vowelsCount;
}
