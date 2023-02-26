const petOwner = {
    name: "Abul Khan",
    contact: {
        phone: "0125364856",
        email: "abul@gmail.com"
    },
    pet: {
        name: "Lofie",
        info: {
            color: "Black",
            weight: "1.2kg"
        }
    }
}

console.log(petOwner.pet.name);
console.log(petOwner.dog?.name);