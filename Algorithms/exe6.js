//Write a function getLetter such that there is a 60% chance
//of getting A, 10% chance of getting B, etc.
//Given the following data:

const rawDist = {
    A: 60,
    B: 10,
    C: 10,
    D: 20
}

const getLetter = function () {
    const arrayFromRawDist = [];
    //build an array that has 60 A, 10 B ...
    //then pick randomly from it
    for (const key in rawDist) {
        if (rawDist.hasOwnProperty(key)) {
            const letter = key;
            const count = rawDist[key];

            for (let i = 0; i < count; i++) {
                arrayFromRawDist.push(letter);
            }
        }
    }
    return pickRandomItemInArray(arrayFromRawDist)
}

const pickRandomItemInArray = function (arr) {
    if (arr.length != 0)
        return arr[Math.floor(Math.random() * arr.length)]
}

console.log(getLetter())