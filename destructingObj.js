const person = {
    name: "Hero Alom",
    age: 34,
    phone: "01756842385",
    address: "Bogura",
    p: [1, 2, 3, 4]
}

const {p} = person;
const [n] = p;
console.log(n);

// const person2 = {...person};
// person2.isMale = true;
// console.log(person);

// const {name, address:thikana,...baki} = person;
// console.log(name, thikana,baki);