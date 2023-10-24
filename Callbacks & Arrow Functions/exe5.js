//Create an arrow function called capitalize that receives any string
//and returns it with proper capitalization:

const capitalize = (word) => {
    word = word.toLowerCase();
    word = word.charAt(0).toUpperCase() + word.slice(1);
    console.log(word);
}

capitalize("bOb") // returns Bob
capitalize("TAYLOR") // returns Taylor
capitalize("feliSHIA") // returns Felishia