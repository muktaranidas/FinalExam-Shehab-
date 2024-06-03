// Parent class Department
class Department {
  // Static variable for the University name
  static universityName = "Daffodil International University";

  // Constructor for the Department class
  constructor(studentName, departmentName, id, cgpa) {
    this.studentName = studentName;
    this.departmentName = departmentName;
    this.id = id;
    this.cgpa = cgpa;
  }

  // Method to display student details
  displayDetails() {
    console.log(`University Name: ${Department.universityName}`);
    console.log(`Student Name: ${this.studentName}`);
    console.log(`Department Name: ${this.departmentName}`);
    console.log(`1D: ${this.id}`);
    console.log(`CGPA: ${this.cgpa}`);
  }
}

// Child class SWE
class SWE extends Department {
  constructor(studentName, id, cgpa) {
    // Call the parent class constructor
    super(studentName, "SWE", id, cgpa);
  }
}

// Child class CSE
class CSE extends Department {
  constructor(studentName, id, cgpa) {
    // Call the parent class constructor
    super(studentName, "CSE", id, cgpa);
  }
}

// Creating an instance of SWE
const student1 = new SWE("Tuktuki", "26552", 3.94);

// Displaying the details of the student
student1.displayDetails();
