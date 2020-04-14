const students = [
    { id: 1, name: "bruce",    age: 40 },
    { id: 2, name: "zoidberg", age: 22 },
    { id: 3, name: "alex",     age: 30},
    { id: 4, name: "alex",     age: 22 }
  ];

  let log = console.log;

  let abcStudents = students.sort((a, b) => {

    log("sorting", a.name, b.name)
if (a.name > b.name) return 1
else if (a.name < b.name) return -1
else return 0

  })
  let sortedStudents = students.sort((a, b) => {

    
if (a.name === b.name){
    if (a.age > b.age) return 1
else if (a.age < b.age) return -1
else return 0
}
  })
  log(students)