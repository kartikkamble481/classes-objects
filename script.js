// // const student = {
// //   fullname: "kartik kamble",
// //   marks: 94.5,
// //   printmarks: function () {
// //     console.log("marks = ", this.marks);
// //   },

// //   calctax() {
// //     console.log("tax rate is 10%");
// //   },
// // };

// // const karan = {
// //   salary: 50000,
// // };

// // karan.__proto__ = student;

// // console.log()

// const student = {
//   calccgpa() {
//     console.log("the cgpa is 1 to 10");
//   },
//   fullname: "kartik kamble",
//   marks: 98.78,

//   printmarks() {
//     console.log("marks = ", this.marks);
//   },
// };

// const student1 = {
//   //   calccgpa: 7.8,
//   fullname: "vaidu",
//   marks: 87.7,
// };

// student1.__proto__ = student;

// const vaiduu = {
//   fullname: "viaduu kamble ",
//   marks: 99.98,
//   calccgpa: 9.7,
// };

// vaiduu.__proto__ = student;

// console.log(student.fullname, student);
// console.log(student1.fullname, student1);
// console.log(vaiduu.fullname, vaiduu);

const student = {
  fullname: "student",
  marks: 98.7,
  cgpa: 6.8,
  rollno: 1,

  printfullname() {
    console.log("full name =", this.fullname);
  },

  printrollno() {
    console.log("Roll no = ", this.rollno);
  },

  printmarks() {
    console.log("marks = ", this.marks);
  },

  printcgpa() {
    console.log("cgpa = ", this.cgpa);
  },
};

const student1 = {
  fullname: "kartik kamble",
  marks: 94.76,
  cgpa: 8.9,
  rollno: 8,
};

const vaidhi = {
  fullname: "vaidahi kamble ",
  marks: 98.96,
  cgpa: 9.8,
  rollno: 20,
};

student1.__proto__ = student;

vaidhi.__proto__ = student;

// console.log("student1", student1);

class toyota {
  brand() {
    brand = this.toyota;
    console.log(this.brand);
  }

  start() {
    console.log("start");
  }

  stop() {
    console.log("stop");
  }

  break() {
    console.log("break");
  }

  exletor() {
    console.log("exletor");
  }
}

let fortuner = new toyota();

console.log(fortuner);

let camry = new toyota();

console.log(camry);
