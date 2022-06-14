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
    return this.gitHubName;
  };

  getRole() {
    return "Engineer";
  };

}

module.exports = Engineer;

//!========================= EOF =========================