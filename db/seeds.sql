INSERT INTO department (id, dept_name)
VALUES (01, 'Engineering'),
    (02, 'Finance'),
    (03, 'Legal'),
    (04, 'Sales'),

INSERT INTO roles (id, title, salary, department_id)
VALUES (01, 'Sales Lead'),
    (02, 'Salesperson'),
    (03, 'Lead Engineer'),
    (04, 'Software Engineer'),
    (05, 'Account Manager'),
    (06, 'Accountant'),
    (07, 'Legal Team Lead'),
    (08, 'Lawyer');
        

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (01, 'John', 'Doe', 01, 1),
    (02, 'Rebecca', 'Gomez', 01, 1),
    (03, 'George', 'Kleet', 02, 1),
    (04, 'Mary', 'Rosenbaum', 03, 1),
    (05, 'Mike', 'Rotch', 04, 2),
    (06, 'Amanda', 'Rosenbaum', 05, 3),
    (07, 'William', 'Runger', 06, 4),
    (08, 'Jeff', 'Klein', 07, 5);
    