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