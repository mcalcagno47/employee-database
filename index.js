const inquirer = require('inquirer');
const express = require('express');
const consoleTable = require('console.table');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    database: 'employee_db',
    password: '47ATmysql.'
});

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
    db.query('SELECT * FROM employees', (err, rows) => {
        if (err) {
            throw err;
        }
        console.log("\n");
        console.table(rows);
        return promptInit();
    });
};

const viewAllRoles = () => {
    db.query(`SELECT * FROM roles`, function (err, results) {
        console.log(`\n`);
        console.table(results);
        promptInit();
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

