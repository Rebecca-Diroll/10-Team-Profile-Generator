const inquirer = require("inquirer");

// Add an intern
addIntern () {
    inquirer
        .prompt([
            { type: "input", name: "int-name: ", message; "Enter intern's name: ", },
            { type: "input", name: "int-id", message: "Enter intern's employee ID: ", },
            { type: "input", name: "int-email", message: "Enter intern's email: ", },
        ])
}

module.exports = Intern;