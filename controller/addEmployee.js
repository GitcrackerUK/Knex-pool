const EmployeeService = require('../services')
const createEmployee = require('./createEmployee')

class employeeController{
  async  newEmployee(req,res){
     try{
        const id = await EmployeeService.newEmployee(createEmployee())
        res.status(201).json({message: "user added",id})
    }catch(err){
         console.error(err)
     }
    }
}

module.exports = new employeeController()