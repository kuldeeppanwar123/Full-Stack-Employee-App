// import 'dotenv/config';
// import mongoose from 'mongoose';

// export async function configDB(){
//     try {
//        await mongoose.connect('mongodb://127.0.0.1:27017/mydb');
//        console.log("DB connected!");
//     } catch (error) {
//         console.log(error);
//     }
// }



import mongoose from 'mongoose';

export async function configDB(){
    try {
      await mongoose.connect('mongodb://127.0.0.1:27017/employeeDB');
        console.log("DB connected!");
    } catch (error) {
        console.log(error);
    }
}