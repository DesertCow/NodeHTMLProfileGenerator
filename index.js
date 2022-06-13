//
// Clayton Skaggs 6-14-22
//
// - npm install inquirer
// - npm install jest


//? Import Statments
// const fs = require('fs');
const inquirer = require('inquirer');
// const request = require('request');

const Employee = require("./assets/js/employee");
const Manager = require("./assets/js/manager");
const Intern = require("./assets/js/intern");
const Engineer = require("./assets/js/engineer");

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



//!===================== Functions Section =====================

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

      if ((answers.newMemberName !== "") && (answers.newID !== "") && (answers.newMemberEmail !== "")) {

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

      } else {
        console.log(`\x1b[31m============= ERROR: Empty Input [addTeamMember] ===========\x1b[0m`);
        mainMenu();
      }
    })
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

      if (answers.newMemberGitHub !== "") {

        currentUserInput.gitHub = answers.newMemberGitHub;
        const newEmp = new Engineer(currentUserInput.name, currentUserInput.id, currentUserInput.email, currentUserInput.gitHub);

        finalHTMLArray.push(newEmp);

        console.log(`\x1b[43m============= New Engineer Created! ===========\x1b[0m`);
        mainMenu();

      } else {
        console.log(`\x1b[31m============= ERROR: Empty Input [newEngineer] ===========\x1b[0m`);
        mainMenu();
      }
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

      if (answers.newMemberSchool !== "") {

        currentUserInput.school = answers.newMemberSchool;

        const newEmp = new Intern(currentUserInput.name, currentUserInput.id, currentUserInput.email, currentUserInput.school);
        finalHTMLArray.push(newEmp);

        console.log(`\x1b[43m============= New Intern Created! ===========\x1b[0m`);
        mainMenu();

      } else {
        console.log(`\x1b[31m============= ERROR: Empty Input [newIntern] ===========\x1b[0m`);
        mainMenu();
      }
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

      if (answers.newMemberOffice !== "") {

        currentUserInput.office = answers.newMemberOffice;

        const newEmp = new Manager(currentUserInput.name, currentUserInput.id, currentUserInput.email, currentUserInput.office);
        finalHTMLArray.push(newEmp);

        console.log(`\x1b[43m============= New Manager Created! ===========\x1b[0m`);
        mainMenu();

      }
      else {
        console.log(`\x1b[31m============= ERROR: Empty Input [newManager] ===========\x1b[0m`);
        mainMenu();
      }
    })
}

// ?============= viewTeamMembers =============
function viewTeamMembers(final) {

  console.log(final);
  mainMenu();
}

// ?============= generateHTML =============
function generateHTML(final) {

  console.log("Number of Employee(s) = " + final.length);

  for (var i = 0; i < final.length; i++) {
    console.log("I =" + i + " || " + final[i]);
  }

  console.log(final);
  console.log("Generaete HTML");
  console.log(`\x1b[46m================ HTML Generated! ==============\x1b[0m`);
  console.log(`\x1b[46m=================== Goodbye! ==================\x1b[0m`);

}

// *============= INIT =============
function init() {


  console.log(`\x1b[46m=============== Profile Auto-Gen ==============\x1b[0m`);
  console.log(`\x1b[46m                    Hello!                     \x1b[0m`);
  console.log(`\x1b[46mWelcome to the Profile Auto-Gen HTML Generator!\x1b[0m`);

  console.log(`\x1b[43m=============== Init Complete! ================\x1b[0m`);

}

//!===================== Init ~ Main =====================

//*============== Init ==============
init();

//*============== Main ==============

mainMenu();

//*=========== END of MAIN ==========


//!========================= EOF =========================