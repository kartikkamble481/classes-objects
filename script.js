const student = {
  name: "kartik kamble",
  DOB: "12/11/2005",
  age: 21,
  printname() {
    console.log("name = ", this.name);
  },
};

console.log(student, student.printname());
console.log("DOB = ", student.DOB);

console.log("age = ", student.age);
