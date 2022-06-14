//
//
//
const Employee = require("./employee");


// ?============= Engineer -> Employee =============
class Engineer extends Employee {

  constructor(empName, empID, empEmail, gitHubName) {
    super(empName, empID, empEmail);
    this.gitHubName = gitHubName;
    this.role = "Engineer";

  }

  getGitHubName() {
    console.log("Engieer GitHub = " + this.gitHubName);
    return this.gitHubName;

  };

  getRole() {
    console.log("Role: Engineer");
    return "Engineer";

  };

}

module.exports = Engineer;

//!========================= EOF =========================