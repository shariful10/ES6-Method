const person = {
    name: "Abul Khan",
    age: 34,
    contact: {
        phone: "023548672",
        email: "abul@gmail.com"
    },
    education: {
        schoolName: "Codna High School",
        subjects: [
            {name: "Physics", marks: 87},
            {name: "Chymistry", marks: 78},
            {name: "Biology", marks: 96}
        ]
    }
}

// const name = person["name"];
const value = "name";
const name = person[value];
console.log(name);