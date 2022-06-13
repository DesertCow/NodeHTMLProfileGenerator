//
//
//
const Employee = require("./employee");


// ?============= Manager -> Employee =============
class Manager extends Employee {

  constructor(empName, empID, empEmail, officeNum) {
    super(empName, empID, empEmail);
    this.officeNum = officeNum;

  }

  getOffice() {
    console.log("Manager Office: " + this.officeNum);
    return this.officeNum;

  };

  getRole() {
    console.log("Role: Manager");
    return "Manager";

  };

}

module.exports = Manager;