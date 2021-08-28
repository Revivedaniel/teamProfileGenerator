const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter the team manager's name"
    },
    {
        type: "input",
        name: "id",
        message: "Enter the team manager's Id #"
    },
    {
        type: "input",
        name: "email",
        message: "Enter the team manager's email"
    },
    {
        type: "input",
        name: "adtlInfo",
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
        name: "name",
        message: "Enter the intern's name"
    },
    {
        type: "input",
        name: "id",
        message: "Enter the intern's id #"
    },
    {
        type: "input",
        name: "email",
        message: "Enter the intern's email"
    },
    {
        type: "input",
        name: "adtlInfo",
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
        name: "name",
        message: "Enter the engineer's name"
    },
    {
        type: "input",
        name: "id",
        message: "Enter the engineer's id #"
    },
    {
        type: "input",
        name: "email",
        message: "Enter the engineer's email"
    },
    {
        type: "input",
        name: "adtlInfo",
        message: "Enter the engineer's github"
    },
    {
        type: "list",
        name: "addAnotherEmployee",
        choices: ["Add Another Employee", "All Done"]
    },
    
];

let createListItem = (data) => {
    `<li>
    <section>
        <h2>${data.name}</h2>
        <h3>Manager</h3>
    </section>
    <section>
        <article>
            <ul>
                <li>
                    ID: ${data.id}
                </li>
                <li>
                    Email: ${data.email}
                </li>
                <li>
                    ${data.adtlType}: ${data.adtlInfo}
                </li>
            </ul>
        </article>
    </section>
</li>`
}

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
        data.adtlType = "Office phone"
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
        data.adtlType = "Office phone"
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
        data.adtlType = "School"
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
        data.adtlType = "Git Hub"
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