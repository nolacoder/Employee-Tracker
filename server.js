const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const { landingQuestion, roleQuestions, departmentQuestions, employeeQuestions } = require('./src/questions')
const cTable = require('console.table');
const Role = require('./lib/Role');
const Department = require('./lib/Department');
const Employee = require('./lib/Employee');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'rootroot',
        database: 'workplace_db'
    },
    console.log(`Connected to the workplace_db database.`)
);

app.listen(PORT, () => {
    // console.log(`Server running on port ${PORT}`);
});

const askLandingQuestion = () => {
    inquirer.prompt(landingQuestion)
        .then((answer) => {
            handleLandingAnswer(answer);
        })
}

const handleLandingAnswer = (answer) => {
    switch (answer.landingOptions) {
        case 'View all departments':
            viewAllDepartments();
            break;
        case 'View all roles':
            viewAllRoles();
            break;
        case 'View all employees':
            viewAllEmployees();
            break;
        case 'Add a department':
            askDepartmentQuestions();
            break;
        case 'Add a role':
            askRoleQuestions();
            break;
        case 'Add an employee':
            askEmployeeQuestions();
            break;
        case 'Update an employee role':
            updateEmployeeRole();
            break;
    }
}

const viewAllRoles = () => {
    db.query('SELECT roles.id, title, name AS department, salary  FROM roles JOIN departments ON roles.department_id = departments.id;', function (err, results) {
        console.table('\n', results);
        askLandingQuestion();
      });
};

const viewAllEmployees = () => {
    db.query('SELECT employees.id, first_name, last_name, title, name AS department, salary FROM employees JOIN roles ON employees.role_id = roles.id JOIN departments ON roles.department_id = departments.id ORDER BY employees.id;', function (err, results) {
        console.table('\n', results);
        askLandingQuestion();
      });
}

const viewAllDepartments = () => {
    db.query('SELECT * FROM departments', function (err, results) {
        console.table('\n', results);
        askLandingQuestion();
      });
}

const askRoleQuestions = () => {
    inquirer.prompt(roleQuestions)
        .then((answers) => {
            createRole(answers);
        })
}

const askDepartmentQuestions = () => {
    inquirer.prompt(departmentQuestions)
        .then((answers) => {
            createDepartment(answers);
        })
}

const askEmployeeQuestions = () => {
    inquirer.prompt(employeeQuestions)
        .then((answers) => {
            createEmployee(answers);
        })
}

const createRole = (answers) => {
    const {roleName, roleSalary, roleDepartment } = answers;
    
    const newRole = new Role(roleName, roleSalary, roleDepartment)
    newRole.createRoleInDb();
    askLandingQuestion();
}

const createDepartment = (answers) => {
    const {departmentName} = answers;

    const newDepartment = new Department (departmentName)
    newDepartment.createDeptInDb();
    askLandingQuestion();
}

const createEmployee = (answers) => {
    const { firstName, lastName, empRole, empManager } = answers;

    const newEmployee = new Employee (firstName, lastName, empRole, empManager)
    newEmployee.createEmpInDb();
    askLandingQuestion();
}

const init = () => {
    askLandingQuestion();
}

init();
