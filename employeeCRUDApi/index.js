// import express from "express";
// import {configDB} from './src/config/dbConfig.js'
// import 'dotenv/config';
// import mongoose from "mongoose";
// const app = express();

// // async function configDB(){
// //     try {
// //        await mongoose.connect('mongodb://127.0.0.1:27017/mydb');
// //        console.log("DB connected!");
// //     } catch (error) {
// //         console.log(error);
// //     }
// // }

// app.listen(7800,()=>{
//     configDB();
//     console.log(`server is listening at ${process.env.server_port}`);
// })


import express from "express";
import {configDB} from './src/config/dbConfig.js';
import empRouter from "./src/routers/employeeRounter.js";
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json())
app.use(empRouter);
configDB();
app.listen(5100 , ()=>{
    console.log("sever is listening at 5100");
})