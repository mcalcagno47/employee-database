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

const addEmployee = () => {
    const roleArray= [];
    const employeeArray= [];
    db.query(`SELECT * FROM roles`, function (err, results) {
        for (let i = 0; i < results.length; i++) {
            roleArray.push(results[i].title);
        }
    db.query(`SELECT * FROM employees`, function (err, results) {
        for (let i = 0; i < results.length; i++) {
            let employeeName = `${results[i].first_name} ${results[i].last_name}`
            employeeArray.push(employeeName);
        }
        return inquirer.prompt([
            {
                type: 'input',
                message: "What is the employee's first name?",
                name: 'first_name',
            },
            {
                type: 'input',
                message: "What is the employee's last name?",
                name: 'last_name',
            },
            {
                type: 'list',
                message: "What is the employee's role?",
                name: 'role',
                choices: roleArray
            },
            {
                type: 'list',
                message: "Does the employee have a manager?",
                name: 'has_manager',
                choices: ["Yes", "No"]
            }
        ]).then((data) => {
            let roleName = data.roles;
            let first_name = data.first_name;
            let last_name = data.last_name;
            let roles_id = '';
            let manager = '';
            db.query(`SELECT id FROM roles WHERE roles.title = ?`, data.roles, (err, results) => {
                roles_id = results[0].id;
            });
            if (data.has_manager === "Yes") {
                return inquirer.prompt([
                    {
                    type: 'list',
                    message: "Please select the employees manager",
                    name: 'manager',
                    choices: employeeArray
                    }   
                ]).then((data) => {
                    db.query(`SELECT id FROM roles WHERE roles.title = ?`, roleName, (err, results) => {
                        roles_id = results[0].id;
                    })
                    db.query(`SELECT id FROM employees WHERE employees.first_name = ? AND employees.last_name = ?;`, data.manager.split(" "), (err, results) => {
                        manager = results[0].id;
                        db.query(`INSERT INTO employees (first_name, last_name, roles_id, manager_id) 
                        VALUES (?,?,?,?)`, [first_name, last_name, roles_id, manager], (err, results) => {
                            console.log("\nNew employee added. See below:");
                            viewAllEmployees();
                        })
                    })
                })
            } else {
                manager = null;
                db.query(`SELECT id FROM roles WHERE roles.title = ?`, roleName, (err, results) => {
                    roles_id = results[0].id;
                    db.query(`INSERT INTO employees (first_name, last_name, roles_id, manager_id) 
                    VALUES (?,?,?,?)`, [data.first_name, data.last_name, roles_id, manager], (err, results) => {
                        console.log("\nNew employee added. See below:");
                        viewAllEmployees();
                    })
                })
            }
        })
    })
})
};

const viewAllRoles = () => {
    db.query(`SELECT * FROM roles`, function (err, results) {
        console.log(`\n`);
        console.table(results);
        promptInit();
    })
};

const addRole = () => {
    let departmentArray = [];
    db.query(`SELECT * FROM department`, function (err, results) {
        for (let i = 0; i < results.length; i++) {
            departmentArray.push(results[i].name);
        }
        return inquirer.prompt([
            {
                type: 'input',
                message: "What is the name of the new role?",
                name: 'title',
            },
            {
                type: 'input',
                message: "What is the salary of the new role?",
                name: 'salary',
            },
            {
                type: 'list',
                message: "What department is the role under?",
                name: 'department',
                choices: departmentArray
            }
        ])
        .then((data) => {
            db.query(`SELECT id FROM department WHERE department.name = ?`, data.department, (err, results) => {
                let department_id = results[0].id;
            db.query(`INSERT INTO roles(title, salary, department_id)
            VALUES (?,?,?)`, [data.title, data.salary, department_id], (err, results) => {
                console.log("\nNew role added. See below:");
                viewAllRoles();
            })
            });
        })
    })
}

const updateRole = () => {
    const roleArray= [];
    const employeeArray= [];
    db.query(`SELECT * FROM roles`, function (err, results) {
        for (let i = 0; i < results.length; i++) {
            roleArray.push(results[i].title);
        }
    db.query(`SELECT * FROM employees`, function (err, results) {
        for (let i = 0; i < results.length; i++) {
            let employeeName = `${results[i].first_name} ${results[i].last_name}`
            employeeArray.push(employeeName);
        }
        return inquirer.prompt([
            {
                type: 'list',
                message: "Which employee do you want to update?",
                name: 'employee',
                choices: employeeArray
            },
            {
                type: 'list',
                message: "What is the employee's new role?",
                name: 'role',
                choices: roleArray
            },
        ]).then((data) => {
            db.query(`SELECT id FROM roles WHERE roles.title = '?';`, data.roles, (err, results) => {
                roles_id = results[0].id;
                db.query(`SELECT id FROM employees WHERE employees.first_name = ? AND employees.last_name = ?;`, data.employees.split(" "), (err, results) => {
                    db.query(`UPDATE employees SET roles_id = ? WHERE id = ?;`, [roles_id, results[0].id], (err, results) => {
                        console.log("\nEmployee role updated. See below:");
                        viewAllEmployees();
                    })
                })

            })
        })
    })
})
};

const viewAllDepartments = () => {
    db.query(`SELECT * FROM department`, function (err, results) {
        console.log(`\n`);
        console.table(results);
        promptInit();
    });
};

const addDepartments = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is the name of the new department?",
            name: 'name'
        }
    ])
    .then((data) => {
        db.query(`INSERT INTO department (name) VALUES (?)`, data.name, (err, results) => {
            console.log("\nNew department added. See below:");
            viewAllDepartments();
        })
    })
}

app.listen(PORT, () => {
    console.log(`Server runnning on port${PORT}`);
})

