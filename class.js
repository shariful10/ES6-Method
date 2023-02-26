// class Student {
//     name = "Shariful";
//     class = "M.Sc";
//     roll = 5;
// }

// const student1 = new Student();
// console.log(student1.roll);

class Student {
    name;
    roll;
    constructor(name, roll) {
        this.name = name;
        this.roll = roll;
    }
    showDetails(){
        console.log(`My name is: ${this.name}. My roll no. is: ${this.roll}`);
    }
}

const student1 = new Student("Shariful", 5);
const student2 = new Student("Shifat", 15);
student1.showDetails();
student2.showDetails();