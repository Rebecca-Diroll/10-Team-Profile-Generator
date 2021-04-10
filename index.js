const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const manager = require("./models/ManagerClass");
const {addEngineer} = require("./utilities/engineer");
const engineer = require("./models/EngineerClass");
const {addIntern} = require("./utilities/intern");
const intern = require("./models/InternClass");
const Engineer = require("./models/EngineerClass");

const team = [];

// Add a team manager
function addManager() {
    inquirer
        .prompt([
            { type: "input", name: "name", message: "Enter team manager's name: ", },
            { type: "input", name: "id", message: "Enter team manager's employee ID: ", },
            { type: "input", name: "email", message: "Enter team manager's email: ", },
            { type: "input", name: "office", message: "Enter team manager's office number: ",},
        ])
        .then (answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
            team.push(manager);
            addTeamMember();
        })
}

// Ask if another team member will be added
function addTeamMember() {
    inquirer
        .prompt([
            { 
                type: "list", 
                name: "addAnother", 
                message: "Add another team member? ",
                choices: [ "Engineer", "Intern", "Finished", ], 
            },
        ])
        .then(val => {
            switch (val.addAnother) {
                case "Engineer":
                    addEngineer().then(answers => {
                        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.office);
                        team.push(manager);
                        addEngineer();
                    });
                    break;
                case "Intern":
                    addIntern();
                    break;
                case "Finished":
                    displayTeam();
            }
        })
}


// Create writeFile function using promises
const writeHTML = util.promisify(fs. writeFile);

function memberTemplate(answers){

    var row5; 

    if (answers.getRole() == "Manager"){
        row5 = answers.getOfficeNumber();
    } else if (answers.getRole() == "Engineer"){
        row5 = answers.getGithub();
    } else if (answers.getRole() == "Intern") {
        row5 = answers.getSchool();
    }

    return   `<div class="card">
    <div class="name">${answers.getName()}</div>
    <div class="role">${answers.getRole()}</div>
    <div class="identity">${answers.getId()}</div>
    <div class="email">${answers.getEmail()}</div>
    <div class="row5">${row5}</div>
</div>`
}

const generateHTML = (answers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Team Profile</title>
</head>
<body>
    <header>My Team</header>
</body>
</html>`;

addManager();

