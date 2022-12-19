INSERT INTO department (id, department_name)
VALUES ('Engineering'),
    ('Finance'),
    ('Legal'),
    ('Sales'),

INSERT INTO roles (id, title, salary, department_id)
VALUES ('Sales Lead', 85000, 4),
    ('Salesperson', 70000, 4),
    ('Lead Engineer', 95000, 1),
    ('Software Engineer', 85000, 1),
    ('Account Manager', 120000, 2),
    ('Accountant', 100000, 2),
    ('Legal Team Lead', 210000, 3),
    ('Lawyer', 180000, 3);

INSERT INTO employees (id, first_name, last_name, roles_id, manager_id)
VALUES ('John', 'Doe', 01, 1),
    ('Rebecca', 'Gomez', 01, 1),
    ('George', 'Kleet', 02, 1),
    ('Mary', 'Rosenbaum', 03, 1),
    ('Mike', 'Rotch', 04, 2),
    ('Amanda', 'Rosenbaum', 05, 3),
    ('William', 'Runger', 06, 4),
    ('Jeff', 'Klein', 07, 5);
    