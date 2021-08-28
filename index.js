const inquirer = require("inquirer");
const fs = require("fs");
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
    return(
    `<li style="width: 320px;">
    <section style="background-color: #0077f7; color: white; border-top-left-radius: 5px; border-top-right-radius: 5px; box-shadow: 3px 3px 3px grey;">
        <h2 style="margin: 0; padding: 5px;">${data.name}</h2>
        <h3 style="margin: 0; padding-bottom: 5px; padding-left: 5px;">${data.employeeRole}</h3>
    </section>
    <section style="box-shadow: 3px 3px 3px grey; background-color: #f6f7f9; border: lightgray 1px solid; display: flex; justify-content: center; padding-top: 30px; padding-bottom: 30px;">
            <ul style="list-style: none; padding: 0; border: lightgray solid 1px; width: 270px; background-color: white;">
                <li style="height: 30px; display: flex; align-items: center; padding-left: 5px;">
                    <span>${data.id}</span>
                </li>
                <li style="border-top: lightgray solid 1px; border-bottom: lightgray solid 1px; height: 30px; display: flex; align-items: center; padding-left: 5px;">
                    <span>${data.email}</span>
                </li>
                <li style="height: 30px; display: flex; align-items: center; padding-left: 5px;">
                    <span>${data.adtlType}: ${data.adtlInfo}</span>
                </li>
            </ul>
    </section>
</li>`
    )}

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
             //create an empty list array and push each employee into it
             let newList = [];
             for (const key in allAnswers) {
                 const employeeData = allAnswers[key];
                 newList.push(createListItem(employeeData))    
             }
             //template the rest of the html and have a literal be the name of the empty list array
             let newHtml = 
                 `<!DOCTYPE html>
                 <html lang="en">
                 <head>
                     <meta charset="UTF-8">
                     <meta http-equiv="X-UA-Compatible" content="IE=edge">
                     <meta name="viewport" content="width=device-width, initial-scale=1.0">
                     <title>My Team</title>
                 </head>
                 <body style="margin: 0;">
                     <header style="background-color: #e84756; color: white; height: 120px; display: flex; justify-content: center; align-items: center;">
                         <h1 style="margin: 0; padding: 0;">My Team</h1>
                     </header>
                 
                     <main>
                         <ul style="list-style: none;">
                             ${newList}
                         </ul>
                     </main>
                 </body>
                 </html>`
             //write that to file
            fs.writeFile("./myTeam.html", newHtml, (err) => {
                err ? console.log(err) : console.log("Seccessfully created myTeam.html!")
            })
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
            //create an empty list array and push each employee into it
            let newList = [];
            for (const key in allAnswers) {
                const employeeData = allAnswers[key];
                newList.push(createListItem(employeeData))    
            }
            //template the rest of the html and have a literal be the name of the empty list array
            let newHtml = 
                `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>My Team</title>
                </head>
                <body>
                    <header>
                        <h1>My Team</h1>
                    </header>
                
                    <main>
                        <ul>
                            ${newList}
                        </ul>
                    </main>
                </body>
                </html>`
            //write that to file
           fs.writeFile("./myTeam.html", newHtml, (err) => {
               err ? console.log(err) : console.log("Seccessfully created myTeam.html!")
           })
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
            //create an empty list array and push each employee into it
            let newList = [];
            for (const key in allAnswers) {
                const employeeData = allAnswers[key];
                newList.push(createListItem(employeeData))    
            }
            //template the rest of the html and have a literal be the name of the empty list array
            let newHtml = 
                `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>My Team</title>
                </head>
                <body>
                    <header>
                        <h1>My Team</h1>
                    </header>
                
                    <main>
                        <ul>
                            ${newList}
                        </ul>
                    </main>
                </body>
                </html>`
            //write that to file
           fs.writeFile("./myTeam.html", newHtml, (err) => {
               err ? console.log(err) : console.log("Seccessfully created myTeam.html!")
           })
        }
    })
}

init();