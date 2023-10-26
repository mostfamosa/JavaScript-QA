people_info = [
    {
        name: "guido",
        profession: "bungalow builder",
        age: 17,
        country: "canaland",
        city: "sydurn",
        catchphrase: "what a piece of wood!"
    },
    {
        name: "petra",
        profession: "jet plane mechanic",
        age: 31,
        country: "greenmark",
        city: "bostork",
        catchphrase: "that's my engine, bub"
    },
    {
        name: "damian",
        profession: "nursery assistant",
        age: 72,
        country: "zimbia",
        city: "bekyo",
        catchphrase: "with great responsibility comes great power"
    }
]

const capitalize = function (str) {
    let capitalizedStr = ""
    capitalizedStr += str[0].toUpperCase(); //add the first letter of the str, capitalized
    capitalizedStr += str.slice(1) //add the rest of str normallyreturn capitalizedStr
    return capitalizedStr
}

const getAge = function (age) {
    if (age < 21)
        return "Underage!."
    else if (age > 55)
        return "55+ years old."
    else return age + " years old."
}


const getSummary = function (person) {
    let summary = ""
    summary += capitalize(person.name)
    summary += ` is ${getAge(person.age)} ` //Yes - you can put a function call inside the tick quotes!
    summary += `He's ${capitalize(person.profession)}, `
    summary += `from ${capitalize(person.city)}, ${capitalize(person.country)}.`
    summary += `\n${capitalize(person.name)} loves to say:\"${capitalize(person.catchphrase)}\".\n`
    return summary
}


people_info.forEach(person => {
    console.log(getSummary(person))
});