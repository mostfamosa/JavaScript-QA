var validator = require('validator');
const { faker } = require('@faker-js/faker');

//Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)
let email = "shoobert@dylan"
console.log("Is This Email Valid?\n" + email + ":", validator.isEmail(email))




//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
let phone = "786-329-9958"
console.log("Is This US mobile phone Valid?\n" + phone + ":", validator.isMobilePhone(phone, 'en-US'))


//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!"
//Ultimately, it should print "im so excited"

// Clean the text by removing characters in the blacklist
let cleanedText = validator.blacklist(text, blacklist);

// Convert the cleaned text to lowercase
cleanedText = cleanedText.toLowerCase();

console.log(cleanedText);



function makeHuman(number) {
    let humans = [];
    for(let i = 0;i<number;i++){
        humans.push({
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            avatar: faker.image.avatar(),
            company: faker.company.name()
        })
    }
    console.log(humans);
}
