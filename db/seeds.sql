INSERT INTO department (name)
VALUES ("Engineering"),
    ("Finance"),
    ("Legal"),
    ("Sales");

INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Lead", 85000, 4),
    ("Salesperson", 70000, 4),
    ("Lead Engineer", 95000, 1),
    ("Software Engineer", 85000, 1),
    ("Account Manager", 120000, 2),
    ("Accountant", 100000, 2),
    ("Legal Team Lead", 210000, 3),
    ("Lawyer", 180000, 3);

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("John", "Doe", 01, 1),
    ("Rebecca", "Gomez", 01, 1),
    ("George", "Kleet", 02, 1),
    ("Mary", "Rosenbaum", 03, 1),
    ("Mike", "Rotch", 04, 2),
    ("Amanda", "Rosenbaum", 05, 3),
    ("William", "Runger", 06, 4),
    ("Jeff", "Klein", 07, 5);
    


CREATE VIEW employee_info AS
(SELECT
role.id AS role_id,
role.title,
role.salary,
department.name AS department_name
FROM role 
JOIN department 
on role.department_id = department.id);

CREATE VIEW employees_with_managers AS
(SELECT emp.id,
emp.first_name,
emp.last_name,
emp.role_id,
CONCAT(manager.first_name, ' ', manager.last_name) AS manager_name
FROM employee AS manager RIGHT OUTER JOIN employee AS emp ON manager.id = emp.manager_id);