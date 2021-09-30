const db = require('../db');

class EmployeeService {
    async newEmployee({ uid, firstName, lastName, email, sse }) {
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

class PostService {
    async addNewPostToTable({ user,title, post }) {
       await db("Posts").insert({
        user,
        title,
        post
       })
    }
}

module.exports = { 
    EmployeeService: EmployeeService,
    PostService: PostService 
    };
