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

module.exports = {
    landingQuestion,
    roleQuestions
}
