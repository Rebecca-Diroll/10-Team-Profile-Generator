const inquirer = require("inquirer");

// Add an engineer
// export function addEngineer () {
function addEngineer() {
    return inquirer
        .prompt([
            { type: "input", name: "name", message: "Enter engineer's name: ", },
            { type: "input", name: "id", message: "Enter engineer's employee ID: ", },
            { type: "input", name: "email", message: "Enter engineer's email: ", },
            { type: "input", name: "github", message: "Enter engineer's GitHub username: ",},
        ])
}

module.exports = addEngineer;