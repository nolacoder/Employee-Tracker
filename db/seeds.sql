INSERT INTO department (name)
VALUES ("Sales"),
("Engineering"),
("Finance"),
("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Saleperson", 80000, 1),
("Lead Engineer", 160000, 2),
("Account Manager", 140000, 3),
("Legal Team Lead", 250000, 4),
("Software Engineer", 120000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Chad", "DiCristina", 1, 3),
("Sean", "Tapia", 4, 4),
("Renata", "Voci", 2, 2),
("Jill", "Thompson", 5, 2),
("Alice", "Walker", 3, 1),
("Greg", "Thompson", 5, 2);
