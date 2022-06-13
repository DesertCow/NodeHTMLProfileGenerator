//
//
//
const Employee = require("./employee");


// ?============= Intern -> Employee =============
class Intern extends Employee {

  constructor(empName, empID, empEmail, empSchool) {
    super(empName, empID, empEmail);
    this.empSchool = empSchool;

  }

  getSchool() {
    console.log("Intern School = " + this.empSchool);
    return this.empSchool;

  };

  getRole() {
    console.log("Role: Intern");
    return "Intern";

  };

}

module.exports = Intern;