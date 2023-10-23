//Write a better cipher function called secretEncrypt
//Instead of encrypting by shifting one letter to the right, use a secret.
//For example, let’s say the word to encrypt is elephant, and the secret is cab
//The result of secretEncrypt("elephant", "cab") would be hmgsicqu
//Instead of shifting each letter one to the right, we’re always shifting by the
//next letter in cab:
//*At first we shift the first E by c, i.e 3 letters (c is the third letter in the
// alphabet, the first letter of cab)
//*Next we shift the L by 1 letter (a is the first letter in the alphabet,
// second letter of cab)
//*Next we shift the second E by 2 (b is the second letter in the alphabet,
// third letter of cab)
//*Next we shift the P by 3 again, because we’re back at c in our secret
//*And so on
//Naturally, write a secretDecrypt(encryptedMessage, secret) function.

const secretEncrypt = function (word, secret) {
    for (let i = 0; i < word.length; i++) {
        let secretIndex = i % secret.length
        word = setCharAt(word, i, String.fromCharCode(word.charCodeAt(i) + (secret.charCodeAt(secretIndex) - 96)))
    }
    return word
}

const secretDecrypt = function (word, secret) {
    for (let i = 0; i < word.length; i++) {
        let secretIndex = i % secret.length
        word = setCharAt(word, i, String.fromCharCode(word.charCodeAt(i) - (secret.charCodeAt(secretIndex) - 96)))
    }
    return word
}

//added function to set char in string
const setCharAt = function (str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
}

console.log(secretEncrypt("elephant", "cab"))
console.log(secretDecrypt("hmgsicqu", "cab"))