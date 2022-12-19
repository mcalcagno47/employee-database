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

INSERT INTO employee (id, first_name, last_name, roles_id, manager_id)
VALUES (001, 'John', 'Doe', 01, 1),
    (002, 'Rebecca', 'Gomez', 01, 1),
    (003, 'George', 'Kleet', 02, 1),
    (004, 'Mary', 'Rosenbaum', 03, 1),
    (005, 'Mike', 'Rotch', 04, 2),
    (006, 'Amanda', 'Rosenbaum', 05, 3),
    (007, 'William', 'Runger', 06, 4),
    (008, 'Jeff', 'Klein', 07, 5);
    