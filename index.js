const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// Create writeFile function using promises
const writeHTML = util.promisify(fs. writeFile);

const promptUser = () => {
    return inquirer.prompt([
        { type: "input", name: "tm-name", message: "Enter team manager's name: ", },
        { type: "input", name: "tm-id", message: "Enter team manager's employee ID: ", },
        { type: "input", name: "tm-email", message: "Enter team manager's email: ", },
        { type: "input", name: "tm-office", message: "Enter team manager's office number: ",},
    ])
}

const promptUser = () => {
    return inquirer.prompt([
        { type: "input", name: "eng-name", message: "Enter engineer's name: ", },
        { type: "input", name: "eng-id", message: "Enter engineer's employee ID: ", },
        { type: "input", name: "eng-email", message: "Enter engineer's email: ", },
        { type: "input", name: "eng-github", message: "Enter engineer's GitHub username: ",},
    ])
}

const promptUser = () => {
    return inquirer.prompt([
        {type: "input", name: "int-name: ", message; "Enter intern's name: ", },
        {type: "input", name: "int-id", message: "Enter intern's employee ID: ", },
        {type: "input", name: "int-email", message: "Enter intern's email: ", },
    ])
}

