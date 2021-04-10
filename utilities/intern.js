const inquirer = require("inquirer");

// Add an intern
export function addIntern () {
    return inquirer
        .prompt([
            { type: "input", name: "int-name: ", message; "Enter intern's name: ", },
            { type: "input", name: "int-id", message: "Enter intern's employee ID: ", },
            { type: "input", name: "int-email", message: "Enter intern's email: ", },
            { type: "input", name: "int-school", message: "Enter intern's school: ", },
        ])
}