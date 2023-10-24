//How would you fix the getData and displayData code from above,
//to make sure we get the data before we display it?
//Make sure to try this out before checking here, for the solution.
//Note: You will see Going to display [object Object]
//, this is because you cannot concatenate an object or array to a string.

let users = []

const getData = function () {
    setTimeout(function () {
        users = [{ name: "Rick" }, { name: "Morty" }]
        console.log("Got users")
        displayData()
    }, 3000);
}

const displayData = function () {
    console.log("Going to display: " + users)
    for (user of users) {
        console.log(user.name)
    }
}

getData(displayData)
