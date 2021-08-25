const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const questions = [
    {
        type: "input",
        name: "managerName",
        message: "Enter the team manager's name"
    },
    {
        type: "input",
        name: "managerId",
        message: "Enter the team manager's Id #"
    },
    {
        type: "input",
        name: "managerEmail",
        message: "Enter the team manager's email"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Enter the team manager's office phone number"
    },
    {
        type: "list",
        name: "addMoreEmployees",
        choices: ["Add an Engineer", "Add an Intern", "All Done"]
    },
    //Intern questions
    {
        type: "input",
        name: "internName",
        message: "Enter the intern's name",
        when: (answers) => answers.addMoreEmployees == "Add an Intern"
    },
    {
        type: "input",
        name: "internId",
        message: "Enter the intern's id #",
        when: (answers) => answers.addMoreEmployees == "Add an Intern"
    },
    {
        type: "input",
        name: "internEmail",
        message: "Enter the intern's email",
        when: (answers) => answers.addMoreEmployees == "Add an Intern"
    },
    {
        type: "input",
        name: "internSchool",
        message: "Enter the intern's school",
        when: (answers) => answers.addMoreEmployees == "Add an Intern"
    },
    //Engineer questions
    {
        type: "input",
        name: "engineerName",
        message: "Enter the engineer's name",
        when: (answers) => answers.addMoreEmployees == "Add an Engineer"
    },
    {
        type: "input",
        name: "engineerId",
        message: "Enter the engineer's id #",
        when: (answers) => answers.addMoreEmployees == "Add an Engineer"
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "Enter the engineer's email",
        when: (answers) => answers.addMoreEmployees == "Add an Engineer"
    },
    {
        type: "input",
        name: "engineerGitHub",
        message: "Enter the engineer's github",
        when: (answers) => answers.addMoreEmployees == "Add an Engineer"
    },
    
]

function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(data)
    })
}

init();