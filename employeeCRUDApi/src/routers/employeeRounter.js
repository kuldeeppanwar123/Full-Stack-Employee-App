import express from 'express';
import { DeleteEmployeeById, fetchAllEmployees, fetchEmployeeById, fetchEmployeeByName, fetchEmployeeByPhone, saveEmployee, updateEmployee } from '../controllers/employeeController.js';

const empRouter = express.Router();

empRouter.post('/employees' , saveEmployee);
empRouter.get('/employees',fetchAllEmployees);
empRouter.get('/employees/:id',fetchEmployeeById);
empRouter.get('/employeesByName/:name',fetchEmployeeByName);
empRouter.get('/employees/phone/:phone',fetchEmployeeByPhone);
empRouter.delete('/employees/:id',DeleteEmployeeById);
empRouter.put('/employees/:id',updateEmployee);

export default empRouter;