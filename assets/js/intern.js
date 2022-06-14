//
//
//
const Employee = require("./employee");


// ?============= Intern -> Employee =============
class Intern extends Employee {

  constructor(empName, empID, empEmail, empSchool) {
    super(empName, empID, empEmail);
    this.empSchool = empSchool;
    this.role = "Intern";
  }

  getSchool() {
    return this.empSchool;
  };

  getRole() {
    return "Intern";
  };

}

module.exports = Intern;

//!========================= EOF =========================