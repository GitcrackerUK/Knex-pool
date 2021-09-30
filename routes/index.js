const addEmployee = require('../controller/addEmployee')
const timeout = require('express-timeout-handler');
const express = require('express')

const Router = express.Router()
Router.post('/Employee', timeout.set(4000), addEmployee.newEmployee)

module.exports = Router