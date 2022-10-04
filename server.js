const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const { landingQuestion } = require('./src/questions')
const cTable = require('console.table');

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

const landingQuestions = () => {
    inquirer.prompt(landingQuestion)
        .then((answer) => {
            handleLandingAnswer(answer);
        })
}

const viewAllRoles = () => {
    db.query('SELECT * FROM roles', function (err, results) {
        console.table('\n', results);
      });
};

const viewAllEmployees = () => {
    db.query('SELECT * FROM employees', function (err, results) {
        console.table('\n', results);
      });
}

const handleLandingAnswer = (answer) => {
    switch (answer.landingOptions) {
        case 'View all roles':
            viewAllRoles();
            break;
        case 'View all employees':
            viewAllEmployees();
            break;
        case 'Add a department':
            viewAllDepartments();
            break;
        case 'Add a role':
            addRole();
            break;
        case 'Add an employee':
            addEmployee();
            break;
        case 'Update an employee role':
            updateEmployeeRole();
            break;
    }
}


const init = () => {
    landingQuestions();
}

init();
