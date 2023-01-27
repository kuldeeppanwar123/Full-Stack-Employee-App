import axios from "axios";

export async function RemoveEmployee(id){
   return await axios.delete("http://localhost:5100/employees/"+id);
}