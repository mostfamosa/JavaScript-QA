//Write a function called jumble that receives two arrays
//, and returns a third that is a jumbled form of the first two:

const colors = ["red", "indigo", "white", "teal", "yellow"];
const foods = ["bread", "cheese", "cucumber"];

const jumble = function (arr1, arr2) {
    let jumbledArr = new Set()
    let jumbledArrSize = arr1.length + arr2.length
    while (jumbledArr.size != jumbledArrSize) {
        let item1 = pickRandomItemInArray(arr1)
        if (!jumbledArr.has(item1)) {
            if (item1 !== undefined) {
                jumbledArr.add(item1)
                arr1 = pop(arr1, item1)
            }
        }

        let item2 = pickRandomItemInArray(arr2)
        if (!jumbledArr.has(item2)) {
            if (item2 !== undefined) {
                jumbledArr.add(item2)
                arr2 = pop(arr2, item2)
            }
        }
    }

    return jumbledArr
}

const pickRandomItemInArray = function (arr) {
    if (arr.length != 0)
        return arr[Math.floor(Math.random() * arr.length)]
}

const pop = function (array, value) {
    for (var i in array) {
        if (array[i] == value) {
            array.splice(i, 1);
            break;
        }
    }
    return array
}

console.log(jumble(colors, foods))
// could return: ["cheese",teal","cucumber","red","bread","yellow","white","indigo"]