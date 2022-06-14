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

  // Method that returns Name
  getName() {
    console.log("Name = " + this.empName);
    return this.empName;

  };

  getEmail() {
    console.log("Email = " + this.empEmail);
    return this.empEmail;

  };

  getID() {
    console.log("ID = " + this.empID);
    return this.empID;

  };

  getRole() {
    console.log("ERROR: Not Assigned (Manager, Engineer, Inter)");
    return;

  };

}

module.exports = Employee;

//!========================= EOF =========================