//Write a function that receives a string and finds
//the first non-repeating character in the string.
//for example :
//“aabbccdee” will return “d”
//“abca” will return “b”

const findNonRepeating = function (str) {
    const charCount = new Map();

    // count each character
    for (const char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // find the first non-repeating character
    for (const char of str) {
        if (charCount.get(char) === 1) {
            return char;
        }
    }
}

console.log(findNonRepeating("aabbccdee"))