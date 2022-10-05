// Sets the class Department and the necessary methods
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'rootroot',
        database: 'workplace_db'
    },
);

class Department {
    constructor(name){
        this.name = name
    }

    createDeptInDb(){
        db.query('INSERT INTO departments (name) VALUES (?)', this.name, function (err, results) {
            if (err) {
                console.log(err);
            } 
        });
    }
}

module.exports = Department
