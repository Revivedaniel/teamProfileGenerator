const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const managerQuestions = [
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
        name: "addAnotherEmployee",
        choices: ["Add Another Employee", "All Done"]
    },
]

const internQuestions = [
    //Intern questions
    {
        type: "input",
        name: "internName",
        message: "Enter the intern's name"
    },
    {
        type: "input",
        name: "internId",
        message: "Enter the intern's id #"
    },
    {
        type: "input",
        name: "internEmail",
        message: "Enter the intern's email"
    },
    {
        type: "input",
        name: "internSchool",
        message: "Enter the intern's school"
    },
    {
        type: "list",
        name: "addAnotherEmployee",
        choices: ["Add Another Employee", "All Done"]
    },
]

const engineerQuestions = [
    //Engineer questions
    {
        type: "input",
        name: "engineerName",
        message: "Enter the engineer's name"
    },
    {
        type: "input",
        name: "engineerId",
        message: "Enter the engineer's id #"
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "Enter the engineer's email"
    },
    {
        type: "input",
        name: "engineerGitHub",
        message: "Enter the engineer's github"
    },
    {
        type: "list",
        name: "addAnotherEmployee",
        choices: ["Add Another Employee", "All Done"]
    },
    
]

const menu = [
    {
        type: "list",
        name: "addAnotherEmployeeMenu",
        choices: ["Add a Manager", "Add an Intern", "Add an Engineer"]
    }
]

let allAnswers = [];

function init() {
    inquirer.prompt(managerQuestions).then((data) => {
        data.employeeRole = "Manager";
        allAnswers.push(data);
        if (data.addAnotherEmployee == "Add Another Employee") {
            inquirer.prompt(menu).then((data) => {
                const newEmployee = data.addAnotherEmployeeMenu
                switch (newEmployee) {
                    case "Add a Manager":
                        manager();
                        break;
                    case "Add an Intern":
                        intern();
                        break;
                    case "Add an Engineer":
                        engineer();
                        break;
                }
            })
        }else{
            console.log(allAnswers)
        }
    })
}

function manager() {
    inquirer.prompt(managerQuestions).then((data) => {
        data.employeeRole = "Manager";
        allAnswers.push(data);
        if (data.addAnotherEmployee == "Add Another Employee") {
            inquirer.prompt(menu).then((data) => {
                const newEmployee = data.addAnotherEmployeeMenu
                switch (newEmployee) {
                    case "Add a Manager":
                        manager();
                        break;
                    case "Add an Intern":
                        intern();
                        break;
                    case "Add an Engineer":
                        engineer();
                        break;
                }
            })
        }else{
            console.log(allAnswers)
        }
    })
}

function intern() {
    inquirer.prompt(internQuestions).then((data) => {
        data.employeeRole = "Intern";
        allAnswers.push(data);
        if (data.addAnotherEmployee == "Add Another Employee") {
            inquirer.prompt(menu).then((data) => {
                const newEmployee = data.addAnotherEmployeeMenu
                switch (newEmployee) {
                    case "Add a Manager":
                        manager();
                        break;
                    case "Add an Intern":
                        intern();
                        break;
                    case "Add an Engineer":
                        engineer();
                        break;
                }
            })
        }else{
            console.log(allAnswers)
        }
    })
}

function engineer() {
    inquirer.prompt(engineerQuestions).then((data) => {
        data.employeeRole = "Engineer";
        allAnswers.push(data);
        if (data.addAnotherEmployee == "Add Another Employee") {
            inquirer.prompt(menu).then((data) => {
                const newEmployee = data.addAnotherEmployeeMenu
                switch (newEmployee) {
                    case "Add a Manager":
                        manager();
                        break;
                    case "Add an Intern":
                        intern();
                        break;
                    case "Add an Engineer":
                        engineer();
                        break;
                }
            })
        }else{
            console.log(allAnswers)
        }
    })
}

init();