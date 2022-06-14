//
//
//

// ?============= Employee CLASS =============
class Employee {

  constructor(empName, empID, empEmail) {
    this.empName = empName;
    this.empID = empID;
    this.empEmail = empEmail;
  }

  getName() {
    return this.empName;

  };

  getEmail() {
    return this.empEmail;

  };

  getID() {
    return this.empID;

  };

  getRole() {
    console.log("ERROR: Not Assigned (Manager, Engineer, Inter)");
    return;

  };

}

module.exports = Employee;

//!========================= EOF =========================