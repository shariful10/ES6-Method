const persons = [
    { id: 'ID01', name: 'abul', age: 23},
    { id: 'ID02', name: 'babul', age: 43},
    { id: 'ID03', name: 'habul', age: 54},
    { id: 'ID04', name: 'jabul', age: 29}
]

const info = {};
// info ['name'] = "Shariful";
// console.log(info);
persons.map(p => {
    info[p.id] = p.name;
})
console.log(info.ID03);