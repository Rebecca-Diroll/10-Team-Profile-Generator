const inquirer = require("inquirer");

// Add a team manager
addTeamManager () {
    inquirer
        .prompt([
            { type: "input", name: "tm-name", message: "Enter team manager's name: ", },
            { type: "input", name: "tm-id", message: "Enter team manager's employee ID: ", },
            { type: "input", name: "tm-email", message: "Enter team manager's email: ", },
            { type: "input", name: "tm-office", message: "Enter team manager's office number: ",},
        ])
}

module.exports = TeamManager;