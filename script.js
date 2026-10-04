// const student = {
//   fullname: "kartik kamble",
//   marks: 94.5,
//   printmarks: function () {
//     console.log("marks = ", this.marks);
//   },

//   calctax() {
//     console.log("tax rate is 10%");
//   },
// };

// const karan = {
//   salary: 50000,
// };

// karan.__proto__ = student;

// console.log()

const student = {
  calccgpa() {
    console.log("the cgpa is 1 to 10");
  },
  fullname: "kartik kamble",
  marks: 98.78,

  printmarks() {
    console.log("marks = ", this.marks);
  },
};

const student1 = {
  //   calccgpa: 7.8,
  fullname: "vaidu",
  marks: 87.7,
};

student1.__proto__ = student;

const vaiduu = {
  fullname: "viaduu kamble ",
  marks: 99.98,
  calccgpa: 9.7,
};

vaiduu.__proto__ = student;
