//
//
//
const Employee = require("./employee");


// ?============= Manager -> Employee =============
class Manager extends Employee {

  constructor(empName, empID, empEmail, officeNum) {
    super(empName, empID, empEmail);
    this.officeNum = officeNum;
    this.role = "Manager";
  }

  getOffice() {
    return this.officeNum;
  };

  getRole() {
    return "Manager";
  };

}

module.exports = Manager;

//!========================= EOF =========================