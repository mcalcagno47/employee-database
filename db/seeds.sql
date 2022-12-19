INSERT INTO department (id, department_name)
VALUES (01, 'Engineering'),
    (02, 'Finance'),
    (03, 'Legal'),
    (04, 'Sales'),

INSERT INTO roles (id, title, salary, department_id)
VALUES (01, 'Sales Lead', 85000, 04),
    (02, 'Salesperson', 70000, 04),
    (03, 'Lead Engineer', 95000, 01),
    (04, 'Software Engineer', 85000, 01),
    (05, 'Account Manager', 120000, 02),
    (06, 'Accountant', 100000, 02),
    (07, 'Legal Team Lead', 210000, 03),
    (08, 'Lawyer', 180000, 03);

INSERT INTO manager (id, first_name, last_name, roles_id)
VALUES (1, 'Ben', 'Sisko', 07),
    (2, 'Jean Luc', 'Picard', 01),
    (3, 'Kathryn', 'Janeway', 03),
    (4, 'Christopher', 'Pike', 05),
    (5, 'Carol', 'Freeman', 07);

INSERT INTO employee (id, first_name, last_name, roles_id, manager_id)
VALUES (001, 'John', 'Doe', 01, 1),
    (002, 'Rebecca', 'Gomez', 01, 1),
    (003, 'George', 'Kleet', 02, 1),
    (004, 'Mary', 'Rosenbaum', 03, 1),
    (005, 'Mike', 'Rotch', 04, 2),
    (006, 'Amanda', 'Rosenbaum', 05, 3),
    (007, 'William', 'Runger', 06, 4),
    (008, 'Jeff', 'Klein', 07, 5);
    