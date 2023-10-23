
//To complete our stardom, write a function called printStarSeries
//that receives two parameters: num, and count
//This function should continue to print the stars normally then backwards for as many times as count

const printStarSeries = function (num, count) {
    let result = ""
    for (let i = 0; i < count; i++) {
        for (let i = 1; i <= num; i++) {
            for (let j = 0; j < i; j++) {
                result += "*"  
            }
            result += "\n"
        }
        for (let i = 1; i <= num-1; i++) {
            for (let j = num-1; j > i; j--) {
                result += "*"  
            }
            result += "\n"
        }
    }
    return result
}

console.log(printStarSeries(5,3))