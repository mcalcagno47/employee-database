const inquirer = require('inquirer');
const express = require('express');
const consoleTable = require('console.table');
const db = require('./Assets/query');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

console.log(db.getAllEmployees());

start();

function start() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'memberChoice',
            message: 'What would you like to do?',
            choices: ['View all employees', 'Add employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
        }
    ])

        .then((userChoice) => {
            switch (userChoice.memberChoice) {
                case 'View all employees':
                    viewAllEmployees();
                    break;
                case 'Add employee':
                    addEmployee();
                    break;
                case 'Update Employee Role':
                    updateRole();
                    break;
                case 'View All Roles':
                    viewAllRoles();
                    break;
                case 'Add Role':
                    addRole();
                    break;
                case 'View All Departments':
                    viewAllDepartments();
                    break;
                case 'Add Department':
                    addDepartments();
                    break;                         
                default:
                    ending();
            }
        })
}

function viewAllEmployees() {
    const viewAllEmployees = db.getAllEmployees();
    return inquirer.prompt([
        {

        }
    ])
};

app.listen(PORT, () => {
    console.log(`Server runnning on port${PORT}`);
})

