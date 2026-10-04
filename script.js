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

// class toyota {
//   constructor(brand) {
//     console.log("creating new car model");
//     this.brand = brand;
//   }

//   start() {
//     console.log("start");
//   }

//   stop() {
//     console.log("stop");
//   }

//   break() {
//     console.log("break");
//   }

//   exletor() {
//     console.log("exletor");
//   }
// }

// let fortuner = new toyota("fortuner");
// console.log(fortuner);

// let camry = new toyota("camry");
// console.log(camry);

class BMW {
  constructor(brand) {
    console.log("creating new car model");
    this.brand = brand;
  }

  start() {
    console.log("start the car");
  }

  stop() {
    console.log("stop the car");
  }

  break() {
    console.log("break");
  }
}

let m5 = new BMW("m5");
console.log(m5);

let m4 = new BMW("m4");
console.log(m4);

class audi {
  constructor(brand) {
    console.log("creating new car model");
    this.brand = brand;
  }
  start() {
    console.log("star the car");
  }

  stop() {
    console.log("stop the car");
  }
}

let x1 = new audi("x1");
console.log(x1);

class studentprofile {
  constructor(name, rollno, email) {
    console.log("creating new student profile");
    this.name = name;
    this.rollno = rollno;
    this.email = email;
  }

  year() {
    console.log("MCA - I year");
  }

  clgname() {
    console.log("YSPM collage satara");
  }

  address() {
    console.log("satara, mumbai pune haiway");
  }
}

let kartik = new studentprofile("kartik", 8, "kartikkamble481@gmail.com");

console.log(kartik);

let prasad = new studentprofile("Prasad Dodke ", 45, "prasaddodke34@gmail.com");

console.log(prasad);

class studentinfo {
  constructor(name, rollNo, email, mobNo) {
    console.log("creating new student profile");
    this.name = name;
    this.rollNo = rollNo;
    this.email = email;
    this.mobNo = mobNo;
  }

  collageName() {
    console.log(
      "collage Name = YSPM satara (yashodha institute and tecnology campus satara)",
    );
  }

  address() {
    console.log(" Satara , Mumbai Pune haiway satara");
  }

  pincode() {
    console.log("415311");
  }
}

let kritii = new studentinfo("kritii", 8, "kritii0812@gmail.com", 9373679857);

console.log(kritii);

//  INHERITANCE IN CLASSES & OBJECTS

// class person {
//   eat() {
//     console.log("eat");
//   }

//   sleep() {
//     console.log("sleep");
//   }

//   work() {
//     console.log("do nothing");
//   }
// }

// class engineear extends person {
//   work() {
//     console.log("solve problems , build something");
//   }
// }

// let ovii = new engineear();

// console.log(ovii);

// class doctor extends person {
//   work() {
//     console.log("solve peciant problems , stay helhty");
//   }
// }

// let vaiduu = new doctor();

// console.log(vaiduu.sleep());

//  EXAMPLE 2 (INHERITANCE)

class car {
  constructor(brand) {
    console.log("creating a new car model ");
    this.brand = brand;
  }
  start() {
    console.log("start the car ");
  }

  stop() {
    console.log("stop the car ");
  }

  break() {
    console.log("press the break and stop the car");
  }
}

class toyota extends car {
  work() {
    console.log("feel link MAFIYA");
  }
}

let fortunerr = new toyota("fortuner");

console.log(fortunerr);

let indover = new toyota("indover");

console.log(indover);

class mercdies extends car {
  wokr() {
    console.log("feel like lugeries");
  }
}

let m6 = new mercdies("m6");

console.log(m6);

// super(); keyword use

class person {
  constructor(name, branch) {
    this.name = name;
    this.branch = branch;
    // console.log("name =", name);
    // console.log("branch = ", branch);
  }

  eat() {
    console.log("eat");
  }

  sleep() {
    console.log("sleep");
  }
}

class Engineear extends person {
  constructor(name, branch) {
    super(name, branch);
    // this.name = name;
  }

  work() {
    console.log("solve ptoblem and build something ");
  }
}

let engg1 = new Engineear("kartik", "AIML");
console.log(engg1);

// PRACTICE SET 1 IN CLASSES AND OBJECTS

// Q1 = You are crreating a website for your collage. create a class user with 2 properties ,  name & email. it also have method called viewData() that allows user to view website data .

let DATA = "secret information";

class user {
  constructor(name, email, branch) {
    this.name = name;
    this.email = email;
    this.brach = branch;
  }

  viewDATA() {
    this.data = DATA;
  }

  collageName() {
    console.log("YSPM collage satara");
  }
}

let s1 = new user("kartik kamble", "kartikkamble481@gmail.com", "MCA-I");

console.log(s1);

// Q2 = create a new class called Admin which inherit from user add a new method called editData to admin that allows website data.

class admin extends user {
  constructor(name, email, branch) {
    super(name, email, branch);
  }
  viewDATA() {
    this.data = "some value";
  }
}

let admin1 = new admin("komal", "komal@gnail.com", "HCL");

console.log(admin1);

// PERSONAL PRACTICE

// OBJECTS IN JS

const instaprofile = {
  userid: "@kartyaa_08",
  bio: "every painfull switchvation is a beatifull destiny",
  username: "KARTIK",
};

const kriti = {
  userid: "@kritii_08",
  bio: "every painfull switchvation is a beatifull destiny",
  username: "KRITII",
};

kriti.__proto__ = instaprofile;

console.log(kriti);

// CLASS IN JS

class instagramprofile {
  constructor(name) {
    this.name = name;
  }
  id(name) {
    this.id = name;
  }

  username() {
    this.username = name;
  }

  bio() {
    console.log("OVIIIXII");
    console.log("risk is better than regret");
  }
}

let kartikk = new instagramprofile("@kartik");

console.log(kartikk);

class oviii extends instagramprofile {}

let oviiii = new oviii("OVIII");

console.log(oviiii);
