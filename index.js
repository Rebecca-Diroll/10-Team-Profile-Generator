const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const teamManager = require("./utilities/manager")


// Ask if another team member will be added
addTeamMember() {
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
            if (val.addAnother) {
                this.Engineer
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