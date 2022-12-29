const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    database: 'employee_db',
    password: '47ATmysql.'
});

class  EmployeeQueries {
    constructor(connection){
        this.connection = connection;
    }
    getAllEmployees(){
        let query = 'SELECT * from employees';
        this.connection.query(query,
        function(err,results){
            return results
        })
    }
};

module.exports = new EmployeeQueries(db);



// https://www.npmjs.com/package/mysql2#using-promise-wrapper
// using promise wrapper, query database