DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(100) NOT NULL
);

CREATE TABLE roles (
    id INT NOT NULL,
    title VARCHAR(100) NOT NULL,
    salary INT NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY department(id),
    FOREIGN KEY (department_id)
    REFERENCES department(id)
);

CREATE TABLE manager (
    id INT NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    roles_id INT NOT NULL,
    PRIMARY KEY department(id),
    FOREIGN KEY (roles_id)
    REFERENCES roles(id)
);

CREATE TABLE employee (
    id INT NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    roles_id INT NOT NULL,
    manager_id INT NOT NULL,
    PRIMARY KEY department(id),
    FOREIGN KEY (roles_id)
    REFERENCES roles(id),
    FOREIGN KEY (manager_id)
    REFERENCES manager(id)
);
