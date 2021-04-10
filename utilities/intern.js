const inquirer = require("inquirer");

// Add an intern
// export function addIntern () {
function addIntern () {
    return inquirer
        .prompt([
            { type: "input", name: "name: ", message: "Enter intern's name: ", },
            { type: "input", name: "id", message: "Enter intern's employee ID: ", },
            { type: "input", name: "email", message: "Enter intern's email: ", },
            { type: "input", name: "school", message: "Enter intern's school: ", },
        ])
}

module.exports = addIntern;