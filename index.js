const inquirer = require('inquirer');
const express = require('express');
const consoleTable = require('console.table');
const db = require('./Assets/query');
const PORT = process.env.PORT || 3001;
const app = express();
const EmployeeQueries = require("./Assets/query");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

console.log(db.getAllEmployees());

promptInit();

function promptInit() {
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

const viewAllEmployees = () => {
    const allEmployees = new EmployeeQueries(db);
    db.query(allEmployees, (err, rows) => {
        if (err) {
            throw err;
        }
        console.log("\n");
        console.table(rows);
        return promptInit();
    });
};

const viewAllRoles = () => {
    db.query(`SELECT * FROM role`, function (err, results) {
        console.log(`\n`);
        console.table(results);
        promptUser();
    })
};

const viewAllDepartments = () => {
    db.query(`SELECT * FROM department`, function (err, results) {
        console.log(`\n`);
        console.table(results);
        promptInit();
    });
};

app.listen(PORT, () => {
    console.log(`Server runnning on port${PORT}`);
})

