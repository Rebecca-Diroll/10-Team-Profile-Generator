const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const util = require("util");

const Manager = require("./models/ManagerClass");
const Engineer = require("./models/EngineerClass");
const Intern = require("./models/InternClass");

const addEngineer = require("./utilities/engineer");
const addIntern = require("./utilities/intern");

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
            role = "Team Manager";
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
                        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                        role = "Engineer"
                        team.push(engineer);
                        addTeamMember();
                    });
                    break;
                case "Intern":
                    addIntern().then(answers => {
                        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                        role = "Intern"
                        team.push(intern);
                        addTeamMember();
                    });
                    break;
                case "Finished":
                    console.log(team);
                    for (var i = 0; i < team.length; i++) {
                        let results = memberTemplate(team[i]);
                        console.log(results)
                    }
                    displayTeam();
            }
        })
}


// Create writeFile function using promises
// const writeHTML = util.promisify(fs. writeFile);

// function memberTemplate(answers, role){

//     // var row5; 

//     // if (role == "Manager"){
//     //     row5 = answers.office;
//     // } else if (role == "Engineer"){
//     //     row5 = answers.github;
//     // } else if (role == "Intern") {
//     //     row5 = answers.school;
//     // }

//     return   `<div class="card">
//     <div class="name">${answers.name}</div>
//     <div class="role">${role}</div>
//     <div class="identity">${answers.id}</div>
//     <div class="email">${answers.email}</div>
//     <div class="row5">${answers.row5}</div>
// </div>`
// }

function displayTeam(data) {
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
</html>`
};

addManager();

