const db = require('../db');

class EmployeeService {
    async newEmployee({ uid, firstName, lastName, email, sse, gender }) {
        await db('Employees').insert({
            uid: uid,
            first_name: firstName,
            surname_name: lastName,
            email: email,
            sse: sse,
            // gender: gender,
        });
        return uid;
    }
}

class TableService {
    async addNewRowToTable({ rowName }) {
        db.table('Employees', function (table) {
            table.string(rowName);
        });
    }
}

module.exports = { 
    EmployeeService: EmployeeService,
     TableService: TableService 
    };
