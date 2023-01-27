import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name:{type:String , required:true},
    age:{type:Number , required:true},
    phone:{type:String,require:true,unique:true},
    salary:{type:String , required:true},
    department:{type:String , required:true}
})


export const employeeModel = mongoose.model('employee' , employeeSchema);