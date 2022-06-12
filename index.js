//
// Clayton Skaggs 6-14-22
//
// - npm install inquirer
// - npm install jest


//? Import Statments
// const fs = require('fs');
const inquirer = require('inquirer');
// const request = require('request');

//!===================== Variable Decleration =====================




//!===================== Functions Section =====================

// ?============= FunctionNAME =============

//*############## Description ##############

// ?============= FunctionNAME =============

//*############## Description ##############


// ?============= FunctionNAME =============
//*############## Description ##############



// ?============= FunctionNAME =============

//*############## Description ##############
//*####################### Description ###########################
//*####################### Description ###########################



//!===================== Class Section =====================

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

// ?============= Engineer -> Employee =============
class Engineer extends Employee {

  constructor(empName, empID, empEmail, gitHubName) {
    super(empName, empID, empEmail);
    this.gitHubName = gitHubName;

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



function init() {


  console.log(`\x1b[46m=============== Profile Auto-Gen ==============\x1b[0m`);
  console.log(`\x1b[46m                    Hello!                     \x1b[0m`);
  console.log(`\x1b[46mWelcome to the Profile Auto-Gen HTML Generator!\x1b[0m`);

  console.log(`\x1b[43m=============== Init Complete! ================\x1b[0m`);

}

function test() {

  const empNum1 = new Manager('John', 001, 'JOHN@gmail.com', "CH-7 456");
  const empNum2 = new Engineer('Dave', 002, 'DAVE@gmail.com', "DesertCow");
  const empNum3 = new Intern('Pete', 003, 'pistolPete@gmail.com', "Oklahoma State University");

  empNum1.getName();
  empNum1.getEmail();
  empNum1.getID();
  empNum1.getRole();
  empNum1.getOffice();
  console.log(`\x1b[43m===============================================\x1b[0m`);
  empNum2.getName();
  empNum2.getEmail();
  empNum2.getID();
  empNum2.getGitHubName();
  empNum2.getRole();
  console.log(`\x1b[43m===============================================\x1b[0m`);
  empNum3.getName();
  empNum3.getEmail();
  empNum3.getID();
  empNum3.getRole();
  empNum3.getSchool();



}


//!===================== Init ~ Main =====================

//*============== Init ==============
init();

//*============== Main ==============

test();

console.log(`\x1b[46m=================== Goodbye! ==================\x1b[0m`);
//*=========== END of MAIN ==========


//!========================= EOF =========================