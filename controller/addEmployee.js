const services = require('../services');
const EmployeeService = new services.EmployeeService;
const createEmployee = require('../utils/createEmployee');


class employeeController{
  async  newEmployee(req,res){
     try{
        const uid = await EmployeeService.newEmployee(createEmployee())
        res.status(201).json({message: "user added", uid})
    }catch(err){
         console.error(err)
     }
    }
}

module.exports = new employeeController()