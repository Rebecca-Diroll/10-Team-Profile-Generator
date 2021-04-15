const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const util = require("util");

const Employee = require("./models/EmployeeClass")
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
                    // for (var i = 0; i < team.length; i++) {
                    //     let results = memberTemplate(team[i]);
                    //     console.log(results)
                    // }
                    // displayTeam();
                    createFile();
            }
        })
}

// Create manager card
function createManager(manager) {
    return`
    <div class="employee">
        <div class="cardHeader">
            <div class="cardTitle">${manager.getName()}</div>
            <div class="cardRole">${manager.getRole()}</div>
        </div>
        <div class="cardBody">
            <div class="cardId"><span>ID: </span>${manager.getId()}</div>
            <div class="cardEmail"><span>Email: </span>${manager.getEmail()}</div>
            <div class="cardOffice"><span>Office: </span>${manager.getOffice()}</div>
        </div>
    </div>

    `;
};

// Create engineer card
const createEngineer = engineer => {
    return`
    <div class="employee">
        <div class="cardHeader">
            <div class="cardTitle">${engineer.getName()}</div>
            <div class="cardRole">${engineer.getRole()}</div>
        </div>
        <div class="cardBody">
            <div class="cardId">${engineer.getId()}</div>
            <div class="cardEmail">${engineer.getEmail()}</div>
            <div class="cardOffice">${engineer.getGithub()}</div>
        </div>
    </div>

    `;
};

// Create intern card
const createIntern = intern => {
    return`
    <div class="employee">
        <div class="cardHeader">
            <div class="cardTitle">${intern.getName()}</div>
            <div class="cardRole">${intern.getRole()}</div>
        </div>
        <div class="cardBody">
            <div class="cardId">${intern.getId()}</div>
            <div class="cardEmail">${intern.getEmail()}</div>
            <div class="cardOffice">${intern.getSchool()}</div>
        </div>
    </div>

    `;
};



// Create cards for each team member
function createTeam() {
    let allCards = "";
    
    for (let i = 0; i < team.length; i++) {
        if (team[i] instanceof Manager) {
            allCards = allCards + createManager(team[i])
        } else if (team[i] instanceof Engineer) {
            allCards = allCards + createEngineer(team[i])
        } else if (team[i] instanceof Intern) {
            allCards = allCards + createIntern(team[i])
        }
    }
    return allCards;
};

function writeHTML() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team Profile</title>
        <link rel="stylesheet" href="/dist/style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    <body>
        <header class="myTeam">
            <h1>Team Profile</h1>
        </header>
        <div>
            <div class="teamMembers">
                ${createTeam()}
            </div>
        </div>
    </body>
</html>
    `;
};

// Create an html file with the team
function createFile() {
    fs.writeFile("./dist/myTeamProfile.html", writeHTML(), err => {
        err ? console.log(err) : console.log("File created as index.html in the dist folder.");
    });
};

addManager();