const db = require('../db')

class EmployeeService{
   async newEmployee({uid, firstName, lastName, email, sse, gender}){
       await  db('Employees').insert({
            uid: uid,
            first_name: firstName,
            surname_name: lastName,
            email: email,
            sse: sse,
            gender: gender
        })
        return uid
    }
}

module.exports = new EmployeeService()