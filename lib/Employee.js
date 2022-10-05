// Sets the class Employee and the necessary methods
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'rootroot',
        database: 'workplace_db'
    },
);

class Employee{
    constructor(firstName, lastName, role, manager){
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.manager = manager;
    }

    createEmpInDb(){
        db.query('INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [this.firstName, this.lastName, this.role, this.manager], function (err, results) {
            if (err) {
                console.log(err);
            } 
        });
    }


}

module.exports = Employee
