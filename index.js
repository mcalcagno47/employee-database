const inquirer = require('inquirer');
const express = require('express');
const consoleTable = require('console.table');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

promptUser();

function promptUser() {
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
                    viewAllEmployees()
                    break
            }
        })
}

// function viewAllEmployees();

// app.listen(PORT, () => {
//     console.log(`Server runnning on port${PORT}`);
// })

