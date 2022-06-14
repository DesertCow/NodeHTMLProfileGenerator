//
// Clayton Skaggs 6-14-22
//
// - npm install inquirer
// - npm install jest


//? Import Statments
const fs = require('fs');
const inquirer = require('inquirer');
// const request = require('request');

const Employee = require("./assets/js/employee");
const Manager = require("./assets/js/manager");
const Intern = require("./assets/js/intern");
const Engineer = require("./assets/js/engineer");

//!===================== HTML Page Elements =====================


// var rootEl = $('#root');


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

        console.log("SCHOOL ANSWERS ##: " + answers.newMemberSchool);

        const newEmp = new Intern(currentUserInput.name, currentUserInput.id, currentUserInput.email, currentUserInput.school);
        finalHTMLArray.push(newEmp);

        console.log("EMP SCHOOL ##: " + newEmp.empSchool);

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
async function generateHTML(final) {

  console.log("Number of Employee(s) = " + final.length);

  fs.appendFile('team.html', `${headerHTML}\n`, () => { });

  // Make Header has been written before adding cards
  await new Promise(resolve => setTimeout(resolve, 1000));

  for (var i = 0; i < final.length; i++) {


    switch (final[i].role) {
      case 'Manager':
        createManagerHTMLCard(final[i]);
        break;
      case 'Engineer':
        createEngineerHTMLCard(final[i]);
        break;
      case 'Intern':
        createInternHTMLCard(final[i]);
        break;
    }

    //Name: final[i].empName
    //Name: final[i].empID
    //Name: final[i].empEmail
    //Name: final[i].officeNum

    // console.log("I =" + i + " || " + final[i].empName);
  }

  //console.log(final);

  // Bug to wait for all writes to complete before closing out file
  await new Promise(resolve => setTimeout(resolve, 1000));

  fs.appendFile('team.html', `${footerHTML}`, () => { });

  console.log(`\x1b[46m==============  team.HTML Created! ============\x1b[0m`);
  console.log(`\x1b[46m=================== Goodbye! ==================\x1b[0m`);

}


// ?============= createManagerHTMLCard =============
function createManagerHTMLCard(manager) {

  let logoLink = "./assets/img/Manager_Icon.png";

  let html = `    <div class="card col managerCard d-flex align-items-center justify-content-center" style="width: 12rem;">
        <h3 class="card-title">${manager.empName}</h3>
          <img class="card-img-top" src="${logoLink}" alt="Manager Type Logo">
            <div class="card-body">
              <h5 class="mb-2">ID:${manager.empID} </h5>
              <h5 class="mb-2"><a href = "mailto: ${manager.empEmail}">${manager.empEmail}</a></h5>
              <h5 class="mb-2">Office:${manager.officeNum} </h5>
            </p>
          </div>
        </div > `


  fs.appendFile('team.html', `${html}\n`, () => { });

};

// ?============= createEngineerHTMLCard =============
function createEngineerHTMLCard(engineer) {

  let logoLink = "./assets/img/ENGR_Icon.png";

  let html = `    <div class="card col managerCard d-flex align-items-center justify-content-center" style="width: 12rem;">
        <h3 class="card-title">${engineer.empName}</h3>
          <img class="card-img-top" src="${logoLink}" alt="Engineer Type Logo">
            <div class="card-body">
              <h5 class="mb-2">ID:${engineer.empID} </h5>
              <h5 class="mb-2"><a href = "mailto: ${engineer.empEmail}">${engineer.empEmail}</a></h5>
              <h5 class="mb-2"><a href ='https://github.com/${engineer.gitHubName} ' target="_blank">${engineer.gitHubName}</a></h5>
              
            </p>
          </div>
        </div > `


  fs.appendFile('team.html', `${html}\n`, () => { });

}


// ?============= createInternHTMLCard =============
function createInternHTMLCard(intern) {

  let University = intern.empSchool;

  let logoLink = "./assets/img/Intern_Icon.png";

  let html = `    <div class="card col managerCard d-flex align-items-center justify-content-center" style="width: 12rem;">
        <h3 class="card-title">${intern.empName}</h3>
          <img class="card-img-top" src="${logoLink}" alt="Intern Type Logo">
            <div class="card-body">
              <h5 class="mb-2">ID:${intern.empID} </h5>
              <h5 class="mb-2"><a href = "mailto: ${intern.empEmail} ">${intern.empEmail} </a></h5>
              <h5 class="mb-2">School: ${University} </h5>
            </p>
          </div>
        </div > `


  fs.appendFile('team.html', `${html}\n`, () => { });

}

// ?============= BASE HTML Blocks =============

let headerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
  <link rel="stylesheet" href="./assets/css/style.css" />
  <link rel="stylesheet" href="./assets/css/reset.css" />
  <title>My Team</title>
</head>
<body>
      <div class="wrapper">
        <header>
          <box class="titleBox d-flex align-items-center justify-content-center">
            <h1>My Team</h1>
          </box>
        </header>
        <teamMembers class="container">
  <div class="row cardAppendRow">`

let footerHTML = `  </div>
      </teamMembers>
        <footer>
          <ul class="footer align-items-center p-3">
            <li>
              <h5>Made by 🌵 Desert-Cow 🐄</h5>
            </li>
            <li>
              <p>&copy; 2022 Monkey See Monkey Do LLC.</p>
            </li>
          </ul>
        </footer>
      </div>
      <script>
        <script src="../Index.js"></script>
      </script>
</body>
</html>`


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