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