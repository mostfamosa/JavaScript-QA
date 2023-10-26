//Create a StringFormatter module. It should have two functions:
//1. capitalizeFirst - receives a string and returns the string with the first letter uppercased, and the next ones lowercased
//2. toSkewerCase - receives a string and replaces any spaces with a dash

const StringFormatter = function () {
    const capitalizeFirst = function (word) {
        let firstLetter = word.charAt(0).toUpperCase()
        return firstLetter + word.slice(1)
    }

    const toSkewerCase = word => word.replace(" ", "-")

    return {
        capitalizeFirst: capitalizeFirst,
        toSkewerCase: toSkewerCase
    }
}


const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy")) //should return Dorothy
console.log(formatter.toSkewerCase("blue box")) //should return blue-box
