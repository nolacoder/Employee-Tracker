SELECT roles.id, title, name AS department, salary  FROM roles JOIN departments ON roles.department_id = departments.id;

SELECT employees.id, first_name, last_name, title, name AS department, salary FROM employees JOIN roles ON employees.role_id = roles.id JOIN departments ON roles.department_id = departments.id ORDER BY employees.id;

SELECT employees.id, first_name, last_name, salary FROM employees JOIN roles ON employees.role_id = roles.department_id ;

SELECT * FROM employees;
SELECT * FROM roles;
