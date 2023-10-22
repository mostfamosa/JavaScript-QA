//Write a function called isEven that accepts a number as a parameter and
//checks if the number is even or not. Return true if it is even or false
//if it is odd. Don’t Google this one ;) Use modulo %

const isEven = function (number) {
    if (number % 2 == 0)
        return true
    return false
}



//Write a function that takes in an array of numbers.
//The function should loop through the numbers and 
//(using the function from Exercise 1) print out the odd numbers.

const printOdd = function (array) {
    for (const number of array) {
        if (!isEven(number))
            console.log(number)
    }
}

//Write a JavaScript function that accepts two parameters: one being an array
//of integers, and the other being a number. The function should return true
//or false depending on whether the number exists in the array.

const checkExists = function (arr, number) {
    for (const num of arr) {
        if (num == number)
            return true
    }
    return false
}


//Create an object called calculator.
//It should have two methods: add and subtract
//Both methods take two parameters, and should return the sum/difference
//of both numbers.

const calculator = {
    add: function (x, y) { return x + y },
    subtract: function (x, y) { return x - y }
}

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42

//Complete the following code:

const turnToKing = function (name, money) {
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

const increaseByNameLength = function (money, name) {
    return money * name.length
}

const makeRegal = function(name){
    return "His Royal Highness, "+name
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"