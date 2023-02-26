const Students = [
    {
        student1: {
            name: 'Abul',
            age: '17',
            isMale: true,
            education: {
                class: 7,
                subjects: ['Bangla', ' English',' Math'],
                school: 'Codonpur high school',
            }
        },
        student2: {
            name: 'Jorina',
            age: '19',
            isMale: false,
            education: {
                class: 6,
                subjects: ['Bangla', ' English',' Math'],
                school: 'Modonpur high school',
            }
        },
        student3: {
            name: 'Habul',
            age: '15',
            isMale: true,
            education: {
                class: 9,
                subjects: ['Bangla', ' English',' Math'],
                school: 'Donpur high school',
            }
        }
    }
]

Students.map(student => {
    for (const i in student) {
        const {name, age, isMale, education} = student[i];
        const {subjects} = education;
        const information = `
        Name: ${name}
        Age: ${age}
        Gender: ${isMale === true ? 'Male' : 'Female'}
        School: ${education.school}
        Class: ${education.class}
        Subjects: ${subjects.map(s => s)}
        `;
        console.log(information);
    }
})