//Write a function called encrypt that receives a string and encrypts it
//by shifting every letter in the string by one to the right
//(in the English alphabet).

const encrypt = function (str) {
    for (let i = 0; i < str.length; i++) {
        str = setCharAt(str,i, String.fromCharCode(str.charCodeAt(i) + 1))
    }
    return str
}

//added function to set char in string
const setCharAt = function(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}

console.log(encrypt("cat"))