//rite a function called printInLoop that receives a single parameter:
//words - an array of strings.
//The function should print each word in words continually until you stop the program. 

const printInLoop = function (array) {
    while (true) {
        for (let i = 0; i < array.length; i++) {
            console.log(array[i])
        }
    }
}

printInLoop(["down", "the", "rabbit", "hole"])
