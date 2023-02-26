class Person {
    name;
    age;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    showDetails(){
        console.log(`My name is: ${this.name}. My age is: ${this.age}`);
    }
}

class Student extends Person{
    subject;
    roll;
    constructor(name, age, subject, roll) {
        super(name, age);
        this.subject = subject;
        this.roll = roll;
    }
    showDetails(){
        console.log(this.name, this.age, this.subject, this.roll);
    }
}

class Teacher extends Person {
    faculty;
    designation;
    constructor(name, age, faculty, designation) {
        super(name, age);
        this.faculty = faculty;
        this.designation = designation;
    }
    showDetails(){
        console.log(this.name, this.age, this.faculty, this.designation);
    }
}

const st = new Student("Shariful", 27, "CSE", "5");
const tec = new Teacher("Boltu", 46, "CSE", "Lecturer");
st.showDetails();
tec.showDetails();