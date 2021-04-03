const inquirer = require("inquirer");

// Add an engineer
addEngineer () {
    inquirer
        .prompt([
            { type: "input", name: "eng-name", message: "Enter engineer's name: ", },
            { type: "input", name: "eng-id", message: "Enter engineer's employee ID: ", },
            { type: "input", name: "eng-email", message: "Enter engineer's email: ", },
            { type: "input", name: "eng-github", message: "Enter engineer's GitHub username: ",},
        ])
}

module.exports = Engineer;