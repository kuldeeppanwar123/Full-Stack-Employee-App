import axios from "axios";
export async function FetchEmployeeByName(name){
    console.log(name);
    const url = "http://localhost:5100/employeesByName/"+name;
    return await axios.get(url);

} 

