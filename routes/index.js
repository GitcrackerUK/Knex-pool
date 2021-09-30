const addEmployee = require('../controller/addEmployee')
const addPost = require('../controller/addPost')
const timeout = require('express-timeout-handler');
const express = require('express')

const Router = express.Router()
Router.post('/Employee', timeout.set(4000), addEmployee.newEmployee)
Router.post('/AddPost', timeout.set(4000), addPost.addPostToTable)

module.exports = Router