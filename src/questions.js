// All of the question arrays are stored here to keep server.js lean
const landingQuestion = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'landingOptions',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
    }
]

const roleQuestions = [
    {
        type: 'input',
        message: 'What is the name of the role?',
        name: 'roleName'
    },
    {
        type: 'input',
        message: 'What is the salary of the role?',
        name: 'roleSalary'
    },
    {
        type: 'listed',
        message: 'What is the department of the role?',
        name: 'roleDepartment'
    }
]

const departmentQuestions = [
    {
        type: 'input',
        message: 'What is the name of the department?',
        name: 'departmentName'
    }
]

const employeeQuestions = [
    {
        type: 'input',
        message: "What is the employee's first name?",
        name: 'firstName'
    },
    {
        type: 'input',
        message: "What is the employee's last name?",
        name: 'lastName'
    },
    {
        type: 'input',
        message: "What is the employee's role?",
        name: 'empRole'
    },
    {
        type: 'input',
        message: "Who is the employee's manager?",
        name: 'empManager'
    }
]

const updateEmployeeQuestions = [
    {
        type: 'input',
        message: 'Which employee would you like to update',
        name: 'nameToUpdate'
    },
    {
        type: 'input',
        message: 'Which role would you like to assign the the employee?',
        name: 'updatedRole'
    }
]

module.exports = {
    landingQuestion,
    roleQuestions,
    departmentQuestions,
    employeeQuestions,
    updateEmployeeQuestions
}
