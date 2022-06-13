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

let finalHTMLArray = [];

let currentUserInput = {
  "type": "",
  "name": "",
  "id": "",
  "email": "",
  "office": "",
  "gitHub": "",
  "school": "",
}

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

// ?============= getUserInput =============
async function mainMenu() {

  await 1

  inquirer
    .prompt([
      {
        type: 'list',
        name: 'mainMenuChoice',
        choices: ['Add Team Member', 'View Team Members', 'Generate HTML'],
        message: "Please Select from the following options",
      },
    ])
    .then(answers => {


      switch (answers.mainMenuChoice) {
        case 'Add Team Member':
          addTeamMember();
          break;
        case 'View Team Members':
          viewTeamMembers(finalHTMLArray);
          break;
        case 'Generate HTML':
          generateHTML(finalHTMLArray);
          break;
      }

    })

};

// ?============= addTeamMember =============

async function addTeamMember() {

  await 1

  inquirer
    .prompt([
      {
        type: 'list',
        name: 'newMemberType',
        choices: ['Manager', 'Engineer', 'Intern'],
        message: "What type of Employee would you like to add?",
      },
      {
        type: 'input',
        name: 'newMemberName',
        message: "Please Enter Name: ",
      },
      {
        type: 'input',
        name: 'newID',
        message: "Please Enter ID: ",
      },
      {
        type: 'input',
        name: 'newMemberEmail',
        message: "Please Enter Email: ",
      },
    ])
    .then(answers => {

      currentUserInput.type = answers.newMemberType;
      currentUserInput.name = answers.newMemberName;
      currentUserInput.id = answers.newID;
      currentUserInput.email = answers.newMemberEmail;

      switch (answers.newMemberType) {
        case 'Manager':
          newManager();
          break;
        case 'Engineer':
          newEngineer();
          break;
        case 'Intern':
          newIntern();
          break;
      }

    })



}

// ?============= generateHTML =============
function generateHTML(final) {

  console.log("Generaete HTML");
  console.log(`\x1b[46m================ HTML Generated! ==============\x1b[0m`);
  console.log(`\x1b[46m=================== Goodbye! ==================\x1b[0m`);

}



// ?============= newEngineer =============
function newEngineer() {

  inquirer
    .prompt([
      {
        type: 'input',
        name: 'newMemberGitHub',
        message: "Please Enter GitHub UserName: ",
      },
    ])
    .then(answers => {

      currentUserInput.gitHub = answers.newMemberGitHub;

      //console.log("Add new Engineer! = " + currentUserInput.gitHub);
      console.log("BEFORE: ");
      console.log(finalHTMLArray);
      finalHTMLArray.push(currentUserInput);
      console.log(finalHTMLArray);
      console.log("After: ");
      console.log(finalHTMLArray);
      console.log(`\x1b[43m============= New Engineer Created! ===========\x1b[0m`);
      mainMenu();

    })



}

// ?============= newIntern =============
function newIntern() {

  inquirer
    .prompt([
      {
        type: 'input',
        name: 'newMemberSchool',
        message: "Please Enter Current School: ",
      },
    ])
    .then(answers => {

      currentUserInput.school = answers.newMemberSchool;

      //console.log("Add new Intern! = " + currentUserInput.school);

      console.log("BEFORE: ");
      console.log(finalHTMLArray);
      finalHTMLArray.push(currentUserInput);
      console.log("After: ");
      console.log(finalHTMLArray);
      console.log(`\x1b[43m============= New Intern Created! ===========\x1b[0m`);
      mainMenu();

    })

}

// ?============= newManager =============
function newManager() {

  inquirer
    .prompt([
      {
        type: 'input',
        name: 'newMemberOffice',
        message: "Please Enter Office Number: ",
      },
    ])
    .then(answers => {

      currentUserInput.office = answers.newMemberOffice;

      //console.log("Add new Manager! = " + currentUserInput.office);

      //console.log("BEFORE: " + finalHTMLArray);
      finalHTMLArray.push(currentUserInput);
      //console.log("AFTER: " + finalHTMLArray);
      console.log(`\x1b[43m============= New Manager Created! ===========\x1b[0m`);
      mainMenu();

    })

}

// ?============= viewTeamMembers =============
function viewTeamMembers(final) {

  console.log(final);
  mainMenu();
}

function init() {

  //? Testing Export Statments

  // module.exports = {
  //   Employee,
  //   Manager,
  //   Intern,
  //   Engineer
  // };

  module.exports = Manager, Employee, Engineer, Intern;


  console.log(`\x1b[46m=============== Profile Auto-Gen ==============\x1b[0m`);
  console.log(`\x1b[46m                    Hello!                     \x1b[0m`);
  console.log(`\x1b[46mWelcome to the Profile Auto-Gen HTML Generator!\x1b[0m`);

  console.log(`\x1b[43m=============== Init Complete! ================\x1b[0m`);

}

function test() {

  const empNum1 = new Manager('John', 1, 'JOHN@gmail.com', "CH-7 456");
  const empNum2 = new Engineer('Dave', 2, 'DAVE@gmail.com', "DesertCow");
  const empNum3 = new Intern('Pete', 3, 'pistolPete@gmail.com', "Oklahoma State University");

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

mainMenu();
// test();

//*=========== END of MAIN ==========


//!========================= EOF =========================