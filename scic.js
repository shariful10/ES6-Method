const students = [
    { name: "Shariful", email: "shariful@gmail.com", avg: 56, fiftyPercent: true },
    { name: "Shakib", email: "Shakib@gmail.com", avg: 57, fiftyPercent: false },
    { name: "Rakib", email: "rakib@gmail.com", avg: 42, fiftyPercent: false },
    { name: "Sojib", email: "sojib@gmail.com", avg: 52, fiftyPercent: true },
    { name: "Sunny", email: "sunny@gmail.com", avg: 32, fiftyPercent: false },
    { name: "Saki", email: "jackie@gmail.com", avg: 37, fiftyPercent: true },
    { name: "Jackie", email: "jackie@gmail.com", avg: 57, fiftyPercent: true }
]

const scic = students.filter(s => s.avg >= 50 && s.fiftyPercent === true)
const names = scic.map(st => st.name);
console.log(names);