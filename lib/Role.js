const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'rootroot',
        database: 'workplace_db'
    },
);



class Role {
    constructor(name, salary, departmentName) {
        this.title = name,
            this.salary = salary,
            this.department_name = departmentName
    }

    getRoleName() {
        return this.title
    }

    getRoleSalary() {
        return this.salary
    }

    getDepartmentName() {
        return this.department_name
    }

    getDepartmentId() {
        db.query('SELECT * FROM departments WHERE name = ?', this.department_name, function (err, results) {
            if (err) {
                console.log(err);
            } else {
                const departmentId = results[0].id
                return departmentId
            }
        });
    }

    createRoleInDb() {
        const departmentId = this.getDepartmentId();
        console.log(departmentId)
        db.query('INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)', [this.title, this.salary, departmentId], function (err, results) {
            if (err) {
                console.log(err);
            } else {
                console.log(results);
                console.log(`Successfully added ${this.title} to database!`);
            }

        });
    }
}

module.exports = Role
