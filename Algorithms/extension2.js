//Write a function called findClosest that receives two parameters
//points and point- an array of x, y coordinates, and a single x, y coordinate.
//The function should find a coordinate in points
//that is closest to the coordinate point.

const findClosest = function (points, point) {
    let minDistPoint = calculateDist(points[0], point)
    let result = points[0]
    points.forEach(p => {
        if (calculateDist(p, point) < minDistPoint) {
            minDistPoint = calculateDist(p, point)
            result = p
        }
    });
    return result
}

//return the distance between 2 points
const calculateDist = function (point1, point2) {
    return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2))
}

let pizzaLocations = [
    { x: 6, y: 12 },
    { x: 3, y: 1 },
    { x: 9, y: 0 },
    { x: 4, y: 10 }
]

let homeLocation = { x: 4, y: 2 }

console.log(findClosest(pizzaLocations, homeLocation)) // should return {x: 3, y: 1}