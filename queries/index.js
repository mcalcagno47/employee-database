const connection = require('./connection')

class Queries {
    constructor(connection) {
        this.connection = connection;
    }
    viewAllEmployees() {
        const sql = "SELECT employee.id, employee.first_name, .......";
        return this.connection.promise().query(sql)
    }
}