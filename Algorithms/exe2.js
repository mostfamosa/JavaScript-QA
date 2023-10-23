//Write some code that takes a string and reverses it:

const reverse = function (str) {

    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed
}

console.log(reverse("dog")) //should return "god"
console.log(reverse("race car")) //should return "rac ecar"