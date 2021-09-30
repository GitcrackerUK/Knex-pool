const express = require('express')
const addEmployee = require('../controller/addEmployee')
const Router = express.Router()
Router.post('/Employee', addEmployee.newEmployee)

module.exports = Router