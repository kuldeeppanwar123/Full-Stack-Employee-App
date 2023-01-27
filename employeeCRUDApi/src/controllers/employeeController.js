
import { StatusCodes } from "http-status-codes";
import { employeeModel } from "../models/employeeModel.js";


export async function  saveEmployee(request , response){
    try {
       const emp =  new employeeModel(request.body);
       const e = await emp.save();
       response.status(StatusCodes.CREATED).json(e);
    } catch (error) {
        console.log(error);
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json("server side error");
    }
}


export async function fetchAllEmployees(request , response){
    try {
        const employees = await employeeModel.find();
        if(employees)
        response.status(StatusCodes.OK).json(employees);
        else
        response.status(StatusCodes.NOT_FOUND).json("sorry! Not Found")
    } catch (error) {
        console.log(error);
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json("server side error!");
    }
}


export async function fetchEmployeeById(request , response){
    try {
         const employee = await employeeModel.find({'_id':request.params.id});
        // const employee = await employeeModel.findById(request.params.id);
        if(employee.length>0){
        response.status(StatusCodes.OK).json(employee);
        }
        else{
        response.status(StatusCodes.NOT_FOUND).json("sorry! Not Found");
        }
    } catch (error) {
        console.log(error);
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json("server side error!");
    }
}


export async function fetchEmployeeByPhone(request , response){
    try {
        const employee = await employeeModel.findOne({phone:request.params.phone});
        if(employee){
            response.status(StatusCodes.OK).json(employee);
        }
        else{
        response.status(StatusCodes.NOT_FOUND).json("sorry! Not Found");
        }
    } catch (error) {
        console.log(error);
    }
}

export async function DeleteEmployeeById(request , response){
    try {
           await employeeModel.findByIdAndDelete(request.params.id);
            response.status(StatusCodes.NO_CONTENT).json();

    } catch (error) {
        console.log(error);
    }
}


export async function updateEmployee(request , response){
    try {
           await employeeModel.findByIdAndUpdate(request.params.id , request.body);
            response.status(StatusCodes.NO_CONTENT).json();
            
    } catch (error) {
        console.log(error);
    }
}

export async function fetchEmployeeByName(request , response){
    try {
        const employees = await employeeModel.find({'name':request.params.name});
        if(employees.length>0){
            response.status(StatusCodes.OK).json(employees);
        }
        else{
        response.status(StatusCodes.NOT_FOUND).json("sorry! Not Found");
        }

    } catch (error) {
        console.log(error);
    }
}
