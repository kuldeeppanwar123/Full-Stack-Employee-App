import axios from "axios";
export async function updateEmployee(id,emp){
    const url = "http://localhost:5100/employees/"+id;
    return await axios.put(url,emp);

}